"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["45336"], {
54674: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_ip_camera_support_and_configuration_mdx_d01_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-ip-camera-support-and-configuration-mdx-d01.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_ip_camera_support_and_configuration_mdx_d01_namespaceObject = JSON.parse('{"id":"platform/biostar_air/ip-camera-support-and-configuration","title":"IPカメラのサポートおよび設定","description":"BioStar AirでONVIF互換のIPカメラの設定、ライブおよび録画ビデオストリームの構成、カメラ映像を入退室イベントと統合する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/ip-camera-support-and-configuration.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/ip-camera-support-and-configuration","permalink":"/docs/ja/platform/biostar_air/ip-camera-support-and-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/ip-camera-support-and-configuration.mdx","tags":[],"version":"current","frontMatter":{"id":"ip-camera-support-and-configuration","title":"IPカメラのサポートおよび設定","description":"BioStar AirでONVIF互換のIPカメラの設定、ライブおよび録画ビデオストリームの構成、カメラ映像を入退室イベントと統合する方法を案内します。","keywords":["IPカメラ","BioStar Air","カメラ構成"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"BioStation 3 SIPインターホンの設定","permalink":"/docs/ja/platform/biostar_air/sip-intercom-for-biostation3"},"next":{"title":"SIO2 セキュリティモジュールの構成","permalink":"/docs/ja/platform/biostar_air/configuring-the-sio2-secure-module"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/ip-camera-support-and-configuration.mdx


const frontMatter = {
	id: 'ip-camera-support-and-configuration',
	title: 'IPカメラのサポートおよび設定',
	description: 'BioStar AirでONVIF互換のIPカメラの設定、ライブおよび録画ビデオストリームの構成、カメラ映像を入退室イベントと統合する方法を案内します。',
	keywords: [
		'IPカメラ',
		'BioStar Air',
		'カメラ構成'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "互換性",
  "id": "compatibility",
  "level": 2
}, {
  "value": "機能紹介",
  "id": "functionality",
  "level": 2
}, {
  "value": "使用方法",
  "id": "instructions",
  "level": 2
}, {
  "value": "IPカメラの接続",
  "id": "ipカメラの接続",
  "level": 3
}, {
  "value": "BioStar Airへのログイン",
  "id": "biostar-airへのログイン",
  "level": 3
}, {
  "value": "ビデオ管理の有効化",
  "id": "ビデオ管理の有効化",
  "level": 3
}, {
  "value": "カメラの追加",
  "id": "カメラの追加",
  "level": 3
}, {
  "value": "ドアとの接続",
  "id": "ドアとの接続",
  "level": 3
}, {
  "value": "リアルタイムカメラ映像の表示",
  "id": "リアルタイムカメラ映像の表示",
  "level": 3
}, {
  "value": "録画済みカメラ映像の表示",
  "id": "録画済みカメラ映像の表示",
  "level": 3
}, {
  "value": "イベント映像の表示",
  "id": "イベント映像の表示",
  "level": 3
}, {
  "value": "テストおよび検証済みデバイス一覧",
  "id": "tested-devices",
  "level": 2
}, {
  "value": "IPカメラでのONVIF有効化方法",
  "id": "ipカメラでのonvif有効化方法",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airは、互換デバイスと同じネットワークに接続されたIPカメラを自動的に検出します。 カメラはデバイスをゲートウェイとして使用するため、ネットワークビデオレコーダー（Network Video Recorder, NVR）は不要です。 代わりにカメラは内蔵SDカードストレージを使用します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "互換機器を設置している場合、BioStar Airは以下のような同時ライブビューを表示できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "最大2台のカメラでFull HD解像度（1080p）"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "最大4台のカメラでHD解像度（720p）"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "この仕様はX-Station 2を使用する場合に2倍になります。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["BioStar Airにカメラを登録した後、録画されたビデオが再生されない場合は、", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/video-troubleshooting"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compatibility",
      children: "互換性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Onvif Profiles"
          }), "：IPカメラはOnvifプロファイルSまたはGと互換性がある必要があります。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Onvif Profile S"
              }), "：ライブビデオストリーミング"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Onvif Profile G"
              }), "：録画済みビデオをSDカードに保存"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SDカード"
          }), "：IPカメラは後で録画した映像を再生できるように内蔵SDカードを備えている必要があります。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "SanDisk microSDXC Class10 Max Endurance 256GBまたは512GBを推奨します。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "エンコーディング"
          }), "：カメラはH.264(AVC)をサポートし、有効なコーデックとして設定されている必要があります。 BioStar Airは現在H.265をサポートしていません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "推奨ブランド"
          }), "：Hanwhavision、Hikvision、Dahuaのカメラとの互換性が高いです。 他ブランドとの互換性はOnvifプロファイルの準拠状況によって異なる場合があります。 テスト済みおよび検証済みデバイスの一覧の詳細については、", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#tested-devices"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "テストしたい別のカメラブランドがある場合は、サービスチームにお問い合わせください。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functionality",
      children: "機能紹介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airポータルまたはモバイルアプリで以下の操作を行えます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "リアルタイムのカメラフィードを表示できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "録画されたカメラ映像を表示できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "出勤イベントに関連するカメラ映像にアクセスできます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "instructions",
      children: "使用方法"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ipカメラの接続",
          children: "IPカメラの接続"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ネットワーク接続"
              }), "：IPカメラがBioStar Airと互換性のある機器と同じネットワークに接続されていることを確認してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Onvifの有効化"
              }), "：カメラでOnvifが有効になっていることを確認します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "デバイス登録"
              }), "：デバイスがBioStar Airポータルに登録されていることを確認します。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "biostar-airへのログイン",
          children: "BioStar Airへのログイン"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "マスター"
          }), "管理者のみビデオ管理の有効化などサイト設定を変更できます。 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com/",
            children: "BioStar Airポータル"
          }), "に", (0,jsx_runtime.jsx)(_components.strong, {
            children: "マスター"
          }), "権限でログインします。"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ビデオ管理の有効化",
          children: "ビデオ管理の有効化"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "site_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_qr_reader_tab",
                product: "air"
              }), " タブをクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_video_management",
                product: "air"
              }), " オプションを有効にします。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-addtional-feature-video-mangement.png"
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["この機能は", (0,jsx_runtime.jsx)(_components.strong, {
              children: "マスター"
            }), "レベルの管理者のみ有効にできます。"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "カメラの追加",
          children: "カメラの追加"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "cameras_groups_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-camera.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "cameras_list_title_add_button",
                product: "air"
              }), " ボタンをクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "cameras_templ_title_modal",
                product: "air"
              }), " ウィンドウが表示されたら、ゲートウェイとして機能するデバイスを選択します。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-camera-add.png",
              caption: true
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "カメラを追加するには、以下の情報を設定します。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "cameras_add_camera_input_name",
                    product: "air"
                  }), "：カメラ名を入力します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "event_logs_column3",
                    product: "air"
                  }), "：カメラを区別する名前を選択してください。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "cameras_add_camera_input_id",
                    product: "air"
                  }), "：カメラにアクセスするIDを入力します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "cameras_add_camera_input_pass",
                    product: "air"
                  }), "：カメラにアクセスするパスワードを入力します。"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["選択したカメラを追加するには ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " ボタンをクリックします。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "デバイスにはファームウェア2.5.1以上がインストールされ、カメラと同じネットワーク上にある必要があります。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStar Airはネットワーク上のカメラを自動的に検出します。"
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ドアとの接続",
          children: "ドアとの接続"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "追加したカメラをドアに割り当て、入退室イベントに関連する映像を連携できます。"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_submenu",
                product: "air"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "リストからカメラを割り当てるドアをクリックします。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "edit_door.title",
                product: "air"
              }), " パネルが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_auxiliary_device",
                product: "air"
              }), " セクションまでスクロールします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column6",
                product: "air"
              }), " オプションで追加したカメラを選択します。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-door-assign-camera.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["変更を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "リアルタイムカメラ映像の表示",
          children: "リアルタイムカメラ映像の表示"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["追加したカメラの映像をリアルタイムで確認できます。 画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "realtime_video_submenu",
            product: "air"
          }), " をクリックします。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-realtime-camera.png",
          caption: true
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar Airと互換性のある機器ごとに、最大2つのフルHD（1080p）ライブストリームを表示できます。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "より多くのリアルタイムストリームを表示するには、デバイスを追加するかカメラの解像度を下げてください。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_menu",
                  product: "air"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "cameras_groups_submenu",
                  product: "air"
                }), " → リストでカメラをクリック → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "cameras_edit_camera_name_profile",
                  product: "air"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "録画済みカメラ映像の表示",
          children: "録画済みカメラ映像の表示"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["録画されたビデオストリームを表示できます。 画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "recorded_video_submenu",
            product: "air"
          }), " をクリックします。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-recorded-camera.png",
          caption: true
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "イベント映像の表示",
          children: "イベント映像の表示"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          }), " をクリックします。 関連するビデオクリップがあるイベントログを見つけ、再生ボタンをクリックすると映像を視聴できます。"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tested-devices",
      children: "テストおよび検証済みデバイス一覧"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "メーカー"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "モデル番号"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "機器タイプ"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Onvifプロファイル"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "解像度"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hanwha Techwin"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "QNV-C8011R"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T, M"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2592x1944"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hanwha Techwin"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "QND-6022R"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hanwha Techwin"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MMI-600R"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HIKVISION"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DS-2CD2025FWD-I"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "5"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HIKVISION"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DS-2CD2166G2-I"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "3200×1800"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "6"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HIKVISION"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DS-2CD1121-I"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "7"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DHI-NVR2104HS-P-S3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NVR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "12MP"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "8"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IPC-HDBW3249E-AS-NI"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920×1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "9"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SD22204UEN-GN"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920×1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DH-IPC-HFW1230DT-STW-VN"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920×1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "11"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Marruy"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IPC-A32E-L"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2304×1296"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "12"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "TP-Link"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Tapo C210"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2304×1296"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ipカメラでのonvif有効化方法",
      children: "IPカメラでのONVIF有効化方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ウェブブラウザを開き、カメラのIPアドレスを入力します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "管理者資格情報で認証してログインします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), "または", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configuration"
          }), "セクションに移動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ONVIF、またはオープンネットワークビデオインターフェースを有効にします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "必要に応じてONVIF専用のユーザープロファイルを作成します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "設定を保存し、BioStar AirでONVIF接続をテストします。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ファームウェア更新"
            }), "：カメラとデバイスを最新のファームウェアに更新してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ポートフォワーディング"
            }), "：必要に応じてONVIF用のポートフォワーディングを設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "サードパーティツール"
            }), "：ONVIF Device Managerを使用してカメラの設定と機能を確認します。"]
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