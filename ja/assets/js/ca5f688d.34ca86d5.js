"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["29029"], {
93309: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_video_integration_mdx_ca5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-video-integration-mdx-ca5.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_video_integration_mdx_ca5_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-video-integration","title":"VMS と連携する","description":"BioStar X でリアルタイム映像のモニタリングおよび録画映像の再生を行うための Video Management System (VMS) 連携方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-video-integration.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-video-integration","permalink":"/docs/ja/platform/biostar_x/settings-video-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-video-integration.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-video-integration","title":"VMS と連携する","description":"BioStar X でリアルタイム映像のモニタリングおよび録画映像の再生を行うための Video Management System (VMS) 連携方法を説明します。","keywords":["ビデオ","連携","カメラ","設定"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ビデオ設定","permalink":"/docs/ja/platform/biostar_x/settings-videos"},"next":{"title":"カメラを設定する","permalink":"/docs/ja/platform/biostar_x/settings-videos-camera"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-video-integration.mdx


const frontMatter = {
	id: 'settings-video-integration',
	title: 'VMS と連携する',
	description: 'BioStar X でリアルタイム映像のモニタリングおよび録画映像の再生を行うための Video Management System (VMS) 連携方法を説明します。',
	keywords: [
		'ビデオ',
		'連携',
		'カメラ',
		'設定'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "開始する前に",
  "id": "開始する前に",
  "level": 2
}, {
  "value": "VMS サーバー連携設定",
  "id": "vms-サーバー連携設定",
  "level": 2
}, {
  "value": "VMS サーバーで証明書をインストールする",
  "id": "install-vms-certification",
  "level": 3
}, {
  "value": "VMS 連携を有効化する",
  "id": "vms-連携を有効化する",
  "level": 3
}, {
  "value": "サービスの再起動",
  "id": "サービスの再起動",
  "level": 3
}, {
  "value": "カメラの確認と設定",
  "id": "カメラの確認と設定",
  "level": 3
}, {
  "value": "トラブルシューティング",
  "id": "video-troubleshooting",
  "level": 3
}, {
  "value": "クライアント PC で証明書をインストールする",
  "id": "install-client-certification",
  "level": 4
}, {
  "value": "VMS イベントとブックマークの設定",
  "id": "vms-event-bookmark",
  "level": 2
}, {
  "value": "VMSサーバー連携の解除",
  "id": "vmsサーバー連携の解除",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Start, Step, Steps, TabItem, Tabs} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Video Management System"
      }), " (VMS) は、複数のカメラ映像を統合管理し、録画と再生を行う映像管理システムです。 BioStar X と VMS を連携すると、入退室制御と映像セキュリティを 1 つのプラットフォームで統合管理できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VMS 連携により、次のような利点を得られます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "リアルタイムモニタリング"
          }), "：出入口に接続されたカメラのライブ映像を確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "統合イベント管理"
          }), "：入退室イベントと映像を関連付けてセキュリティ状況を把握できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "効率的な証拠収集"
          }), "：特定の時点の録画映像を迅速に検索して再生できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ブックマーク機能"
          }), "：重要なイベント時点に映像タグを追加し、簡単に検索および確認できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "開始する前に",
      children: "開始する前に"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Video Management System"
      }), " (VMS) と連携する前に、次の項目を確認してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS 連携機能は ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "アドバンス"
          }), " (Advanced) ライセンス以上で追加オプションとして利用できます。 ライセンスポリシーの詳細は", (0,jsx_runtime.jsx)(_components.a, {
            href: "licensing#features-add-ons",
            children: "次のドキュメント"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS サーバーが正しくインストールおよび構成されていることを確認してください。 VMS サーバーが ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " とオンラインで接続できる状態である必要があります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " と互換性のある VMS を使用してください。 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X VMS"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Nx Witness v5.1.5"
          }), " 系列の VMS を利用できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS サーバーの IP アドレス、ポート番号、管理者アカウント情報を準備してください。 これらの情報は ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " が VMS サーバーに接続する際に必要です。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vms-サーバー連携設定",
      children: "VMS サーバー連携設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["VMS サーバーと ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " を連携するには、次の手順に従ってください。"]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "install-vms-certification",
          children: "VMS サーバーで証明書をインストールする"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "VMS サーバーの録画映像を再生するには、HTTPS プロトコルを使用する必要があります。 VMS サーバーで IP アドレスベースの証明書を作成してください。"
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "証明書をインストールする前に、VMS をインストールした PC に Open JDK 21 以上がインストールされていることを確認してください。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["VMS サーバーと ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "BioStar X"
                }), " を同じサーバーにインストールする場合、証明書をインストールする必要があります。"]
              }), "\n"]
            }), "\n"]
          })
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: "C:\\Program Files\\BioStar X\\third"
              }), " パスに移動し、コマンドプロンプトを起動してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "次のコマンドを実行してください。"
            }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
              groupId: "os",
              defaultValue: "Windows",
              children: [(0,jsx_runtime.jsx)(TabItem, {
                value: "Windows",
                children: (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-java",
                    children: "java -Xverify:none -jar scaleUtil-1.0-obfuscated.jar vmsCertCreate \"C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\<%VENDOR.NAME%>\\<%VENDOR.NAME%> Media Server\\ssl\" {VMS_IP_ADDRESS}\n"
                  })
                })
              }), (0,jsx_runtime.jsx)(TabItem, {
                value: "Linux",
                children: (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-java",
                    children: "java -Xverify:none -jar scaleUtil-1.0-obfuscated.jar vmsCertCreate \"/opt/<%VENDOR.NAME%>/mediaserver/var/ssl\" {VMS_IP_ADDRESS}\n"
                  })
                })
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "<%VENDOR.NAME%>"
                  }), " 部分に VMS をインストールしたパスを入力してください。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "{VMS_IP_ADDRESS}"
                  }), " 部分に VMS サーバーの IP アドレスを入力してください。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["導入した VMS 製品によっては ", (0,jsx_runtime.jsx)(_components.em, {
                    children: "ssl"
                  }), " のパスが異なる場合があります。"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "VMS をインストールしたパスに証明書ファイル (**.pem*) が生成されていることを確認してください。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "VMS サーバーを再起動してください。"
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["VMS が ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " と別のサーバーにインストールされている場合は、", (0,jsx_runtime.jsx)(_components.em, {
              children: "scaleUtil-1.0-all.jar"
            }), " ファイルを VMS サーバーにコピーして上記の手順を実行してください。"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "vms-連携を有効化する",
          children: "VMS 連携を有効化する"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shell.header.launcher"
              }), "ページで", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shell.header.setting"
              }), "をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.video.root"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.video.vmsIntegration"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["初めてアクセスする場合は ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " の管理者アカウントでログインする必要があります。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-video-integration-login.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "video.setting.integration.title",
                product: "2"
              }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), " に設定してください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-video-integration.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "VMS サーバー情報を入力してください。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.serverAddress",
                    product: "2"
                  }), "：VMS サーバーの IP アドレスを入力してください。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.port",
                    product: "2"
                  }), "：VMS サーバーのポート番号を入力してください。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.loginId",
                    product: "2"
                  }), "：VMS サーバーの管理者アカウント ID を入力してください。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.password",
                    product: "2"
                  }), "：VMS サーバーの管理者アカウントのパスワードを入力してください。"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["VMS サーバー情報をすべて入力したら、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.apply",
                product: "2"
              }), " ボタンをクリックしてください。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "VMS サーバーとの連携に失敗してエラーメッセージが表示された場合は、サーバーアドレスや管理者アカウント情報などを再確認してください。 VMS サーバーがオンライン状態にあるか、ファイアウォール設定によってネットワーク接続がブロックされていないかを確認することも必要です。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "video.setting.tag.title",
                  product: "2"
                }), " セクションの設定の詳細は ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#vms-event-bookmark",
                  children: "次のドキュメント"
                }), " を参照してください。"]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "サービスの再起動",
          children: "サービスの再起動"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS サーバーと初めて連携すると、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " はサービスを自動的に再起動します。 自動で再起動しない場合は、次の手順に従って手動でサービスを再起動してください。"]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Windows で ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Service Manager"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "All Services"
              }), " リストで下記サービスの ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Stop"
              }), " ボタンをクリックしてサービスを停止してください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/biostarx-sm-restart-service-video.png",
              alone: true
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar X Unified Gateway Service"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar X Core Web Service"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["停止を要求したサービスの状態が ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Pending"
              }), " から ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Stopped"
              }), " に変わったら、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Start"
              }), " ボタンをクリックしてサービスを再起動してください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/biostarx-sm-restart-service-video-start.png",
              alone: true
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "カメラの確認と設定",
          children: "カメラの確認と設定"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS サーバーと正常に連携できた場合、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " メニューで接続されているカメラを確認できます。 詳細は ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-videos-camera",
            children: "次のドキュメント"
          }), " を参照してください。"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "video-troubleshooting",
      children: "トラブルシューティング"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "次のような状況が発生した場合、VMS サーバーにインストールされている証明書をクライアント PC にインストールして問題を解決できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ブラウザーで ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Video Management System"
          }), " (VMS) にアクセスした際に「安全ではありません」と警告が表示される場合"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " ページでライブ映像は再生されるが録画映像が再生されない場合"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "install-client-certification",
      children: "クライアント PC で証明書をインストールする"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " をインストールしたクライアント PC のログイン画面、または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.https.https",
            product: "2"
          }), " から HTTPS 証明書インストーラ (", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), ") をダウンロードします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ダウンロードしたファイルを解凍し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cert-register.exe"
          }), " ファイルを実行します。 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment Certification"
          }), " ウィンドウが表示されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Target System"
          }), " で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "VMS"
          }), " を選択し、次の情報を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-vms-certification.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Address"
              }), "：VMS サーバーの IP アドレス"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Port"
              }), "：VMS サーバーのポート番号"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["セキュリティ警告メッセージを確認し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "はい"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web ブラウザーを再起動し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " ページで VMS サーバーの録画映像が正常に再生されるか確認します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vms-event-bookmark",
      children: "VMS イベントとブックマークの設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["連携したVMSサーバーにブックマークタグとイベントタグの情報を送信できます。 このとき、イベントログ、ドア名、デバイス名、ユーザーIDも併せて送信するかどうかを選択できます。 必要なオプションを選択し、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " をクリックしてください。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-event-bookmark.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.language",
            product: "2"
          }), "：VMSサーバーに送信するイベントタグおよびブックマークタグの言語を選択します。 韓国語または英語を選択できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.setting.tag.bookmark",
            product: "2"
          }), "：ブックマークタグは、VMSサーバーに保存された映像にラベルと名前を付け、簡単に検索・確認できる機能です。 ブックマークタグで送信する情報を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.setting.tag.event",
            product: "2"
          }), "：ある時点で発生したイベントをVMSサーバーに送信して記録できます。 イベントタグで送信する情報を選択します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["VMSのブックマーク機能の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://resources.vmsproxy.com/nx_6.0_help/using_bookmarks.html",
              children: "次のリンク"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["VMSのイベント機能の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://resources.vmsproxy.com/nx_6.0_help/events_available_in_vms.html",
              children: "次のリンク"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vmsサーバー連携の解除",
      children: "VMSサーバー連携の解除"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "連携したVMSサーバーとの接続を解除するには、次の手順に従ってください。 VMS連携を解除すると、ビデオ設定、登録済みカメラ、ルールがすべて削除されます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "ページで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.vmsIntegration"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.setting.integration.title",
            product: "2"
          }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.notUse",
            product: "2"
          }), " に設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メッセージウィンドウの内容を確認し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " をクリックしてください。"]
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