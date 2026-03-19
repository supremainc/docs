"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["69895"], {
37255: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ device_info_settings_frontMatter),
  toc: () => (/* binding */ device_info_settings_toc),
  "default": () => (/* binding */ device_info_settings_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_device_info_settings_mdx_258_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ device_info_settings_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-device-info-settings-mdx-258.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_device_info_settings_mdx_258_namespaceObject = JSON.parse('{"id":"platform/biostar_air/device-info-settings","title":"デバイス情報および設定オプションのご案内","description":"BioStar Airポータルでは、デバイスモデルごとに提供される情報の確認方法や、ネットワーク、認証、勤怠管理などの設定オプションについてご案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/device-info-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/device-info-settings","permalink":"/docs/ja/platform/biostar_air/device-info-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/device-info-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"device-info-settings","title":"デバイス情報および設定オプションのご案内","description":"BioStar Airポータルでは、デバイスモデルごとに提供される情報の確認方法や、ネットワーク、認証、勤怠管理などの設定オプションについてご案内します。","keywords":["デバイス情報","設定オプション","BioStar Air"],"toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"登録済みデバイスの管理","permalink":"/docs/ja/platform/biostar_air/managing-registered-devices"},"next":{"title":"デバイスグループを管理する","permalink":"/docs/ja/platform/biostar_air/manage-device-group"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_bsair-device-info-settings.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "基本情報",
  "id": "基本情報",
  "level": 4
}, {
  "value": "アクション機能",
  "id": "アクション機能",
  "level": 4
}, {
  "value": "基本設定",
  "id": "基本設定",
  "level": 4
}, {
  "value": "<Cmd class=\"normal\"></Cmd>(Time &amp; Attendance, T&amp;A)",
  "id": "tna",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image, Include} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h3, {
      id: "deviceInfo",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "new_layout_nav_title_detail",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "new_layout_nav_title_detail",
        product: "air"
      }), " セクションでは、デバイスの名前、モデル名、シリアル番号、ファームウェアバージョンなどの基本情報と、機能を操作するアクションメニューや基本設定オプションが表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "基本情報",
      children: "基本情報"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスの基本情報を確認できます。 この情報は編集できません。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_non_editable_fields_product",
            product: "air"
          }), "：デバイスの製品名です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_non_editable_fields_model",
            product: "air"
          }), "：デバイスのモデル名です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_non_editable_fields_serial",
            product: "air"
          }), "：デバイスのシリアル番号です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_non_editable_fields_firmware",
            product: "air"
          }), "：デバイスにインストールされているファームウェアのバージョンです。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "アクション機能",
      children: "アクション機能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスの機能を制御できる", (0,jsx_runtime.jsx)(_components.strong, {
        children: "アクション"
      }), "（Action）機能です。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-edit-actions.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "firmware_update_btn",
            product: "air"
          }), "：デバイスのファームウェアを最新バージョンに更新できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_actions_reboot",
            product: "air"
          }), "：デバイスに問題や異常が発生した場合、リモートで再起動できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_actions_factory_reset",
            product: "air"
          }), "：デバイスに保存されているすべての設定を初期化します。 この操作を実行すると、デバイスのすべての設定とデータが削除されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_actions_factory_reset",
            product: "air"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_actions_excluding_network",
            product: "air"
          }), "：ネットワーク設定を除くすべての設定を初期化します。 この操作を実行すると、デバイスのすべての設定とデータが削除されますが、ネットワーク設定は保持されます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "基本設定",
      children: "基本設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスの基本設定を変更できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_nick_name",
            product: "air"
          }), "：デバイス一覧およびログに表示されるデバイスの別名です。 直接編集できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_timezone",
            product: "air"
          }), "：サイトとデバイスの時計が異なる場合にログを一貫して保つために、デバイスのタイムゾーンを設定します。 サマータイム（Daylight Saving Time、DST）を適用するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_field_dst_usage",
            product: "air"
          }), " オプションを有効にします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "xpass2",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "keypad_use_rf_card_number",
              product: "air"
            }), "：RFカード番号をキーパッドで入力して使用できます。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["この機能はキーパッドをサポートする", (0,jsx_runtime.jsx)(_components.strong, {
                children: "XP2-GKDPB"
              }), "モデルのみで利用できます。"]
            })
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device_editable_fields_hands_free",
          product: "air"
        }), "：BLEの範囲を拡張できます。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "ae-mc,xpass2,xs2",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_editable_fields_qr_reader",
              product: "air"
            }), "：デバイスにRS‑485のQRリーダーが接続されていることを確認できます。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "QRリーダーを該当デバイスと接続して使用する場合、他のRS-485デバイスを使用できません。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "SIO2を使用する場合、その出入り口に接続されているデバイスでQRリーダーを使用できません。"
                }), "\n"]
              }), "\n"]
            })
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "ae-mc,xs2",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_card",
            product: "air"
          }), "：カード認証を有効または無効にできます。 DESFire、Felicaカード形式をサポートしています。"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "ae-mc,xpass2",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_beep_setting",
            product: "air"
          }), "：入退室認証成功時の通知音を設定できます。"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "xpass2,bew3,bs3",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "cardSettings",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_title",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_title",
          product: "air"
        }), " セクションでは、カード認証に関する設定を変更できます。"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "nfcRfcard",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_editable_fields_card",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_editable_fields_card",
              product: "air"
            }), "：トグルスイッチをクリックしてカードによる入退室認証をオンまたはオフにできます。 カード認証に対応するカードの種類を選択してください。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_card_em4100",
                product: "air"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_card_mifare_felica",
                product: "air"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_card_byte_order",
            product: "air"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "MSB"
                }), "：カードデータを処理するとき、大きいバイト単位から小さいバイト単位の順に処理し、カードシリアル番号 (CSN) を左から右へ順に保存します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "LSB"
                }), "：カードデータを処理するとき、小さいバイト単位から大きいバイト単位の順に処理してカードシリアル番号 (CSN) を保存します。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_card_field_data_reading_method",
              product: "air"
            }), "：CSN（デフォルト）または Wiegand 形式を選択できます。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Wiegand形式には5つの基本形式が含まれています。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "card_format_submenu",
                product: "air"
              }), " で、さらに多くの形式を追加できます。 カスタムカード形式の設定の詳細は ", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_air/custom-wiegand-card-formats"
              }), " を参照してください。"]
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "device_card_wiegand_card",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_wiegand_card",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Wiegandカードとして、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_wiegand_card_iclass",
          product: "air"
        }), " と ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_wiegand_card_hid_prox",
          product: "air"
        }), " のカードを選択できます。 トグルスイッチをクリックして機能を有効にした後、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_wiegand_card",
          product: "air"
        }), "で希望するカード形式を選択してください。"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "この機能はデバイスによってサポートされない場合があります。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Wiegand形式には5つの基本形式が含まれています。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "card_format_submenu",
                product: "air"
              }), " で、さらに多くの形式を追加できます。 カスタムカード形式の設定の詳細は ", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_air/custom-wiegand-card-formats"
              }), " を参照してください。"]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "new_layout_nav_title_network",
        product: "air",
        className: "normal "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスのネットワーク設定を変更できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_use_dhcp",
            product: "air"
          }), "：デバイスがIPアドレスを自動的に取得するように設定できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ネットワーク設定を手動で構成するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_use_dhcp",
            product: "air"
          }), " オプションを無効にして次のフィールドに入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_editable_fields_ip_address",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_editable_fields_gateway",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_editable_fields_dns_address",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_editable_fields_subnet_mask",
          product: "air"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "xpass2,bew3,bs3",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "authentication",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "new_layout_nav_title_authentication",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsx)(Include, {
        type: props.type,
        ref: "xpass2",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication_txt1",
                product: "air"
              }), "：認証方式を追加できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_btn",
                product: "air"
              }), " をクリックして認証方式を追加してください。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "XP2-MDPB"
                  }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "XP2-GDPB"
                  }), "：認証方式としてRFカードのみを選択できます。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "XP2-GKDPB"
                  }), "：認証方式としてRFカードとPINを組み合わせて選択できます。"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Include, {
        type: props.type,
        ref: "bew3",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_nav_title_authentication_txt1",
              product: "air"
            }), "：認証方式を追加できます。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "add_btn",
              product: "air"
            }), " をクリックして認証方式を追加してください。 認証方式としてRFカードと顔認証を組み合わせて選択できます。"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Include, {
        type: props.type,
        ref: "bs3",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_nav_title_authentication_txt1",
              product: "air"
            }), "：認証方式を追加できます。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "add_btn",
              product: "air"
            }), " をクリックして認証方式を追加してください。 認証方式として、RFカード、顔認証、ID、PINを組み合わせて選択できます。"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Include, {
        type: props.type,
        ref: "bs3",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_bs3_authen_display_user_name",
                product: "air"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_bs3_authen_display_user_id",
                product: "air"
              }), "：認証画面にユーザー名またはIDを表示するかどうかを選択できます。 画面に表示しないように設定するには、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_bs3_authen_display_user_name_txt3",
                product: "air"
              }), " オプションを選択します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication_auth_timeout",
                product: "air"
              }), "：設定した時間内にクレデンシャルを認証できない場合、認証は失敗します。"]
            }), "\n"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Include, {
        type: props.type,
        ref: "xpass2",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication_auth_timeout",
                product: "air"
              }), "：設定した時間内にクレデンシャルを認証できない場合、認証は失敗します。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: ["この機能は ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "XP2-GKDPB"
                }), " モデルでのみ利用できます。"]
              })
            }), "\n"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "選択したスケジュールに応じて認証方式を個別に設定できます。 例えば、勤務時間中はカード認証のみを許可し、勤務時間外はカードとPINの組み合わせを許可できます。"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "bew3,bs3",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "faceAuthentication",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "new_layout_nav_title_face",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "faceSecurity",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "site_setting_tab_security",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_7_title",
              product: "air"
            }), "：写真などの偽造顔を用いたユーザー認証を防止できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_7_text2",
              product: "air"
            }), "：顔を登録する際に重複登録をチェックできます。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "faceDetection",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_face_detection",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_2_title",
              product: "air"
            }), "：デバイス周囲の動きを検知する感度を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_3_title",
              product: "air"
            }), "：許容される顔の最大回転角度を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_5_title",
              product: "air"
            }), "：カメラ映像全体で顔を認識する範囲を広げることができます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_4_title",
              product: "air"
            }), " ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_4_title_cm",
              product: "air"
            }), "：顔を認識する最小および最大距離を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_8_title",
              product: "air"
            }), " ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_8_title_cm",
              product: "air"
            }), "：ユーザーの顔を登録する際、設定した時間内に登録できないと顔登録がキャンセルされます。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "maskDetection",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "new_layout_device_bew3_block_8_1_text",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["マスク検出機能を設定するには、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "new_layout_device_bew3_block_8_1_text",
          product: "air"
        }), " オプションを有効にします。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_8_2_text",
              product: "air"
            }), "：マスク検出感度を選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
            sid: "new_layout_device_bew3_block_8_3_text",
            product: "air"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_3_value1",
                  product: "air"
                }), "：マスク未着用のユーザーは認証が拒否され、マスク未着用イベントがログに記録されます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_3_value2",
                  product: "air"
                }), "：マスク未着用のユーザーも認証できますが、マスク未着用イベントがログに記録されます。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
            sid: "new_layout_device_bew3_block_8_4_text",
            product: "air"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_4_value1",
                  product: "air"
                }), "：認証を実行した後にユーザーのマスク着用を確認するか、体温を測定します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_4_value2",
                  product: "air"
                }), "：ユーザーのマスク着用を確認するか体温を測定した後に認証を実行します。 この場合、マスクを着用していない、または基準温度を超えているユーザーは認証できません。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_4_value3",
                  product: "air"
                }), "：デバイスをマスク着用の確認または体温測定専用としてのみ使用できます。 この場合、認証に関係なく、マスクを着用しているか基準温度以下のユーザーはすべて入場できます。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "bs3_qr_barcode_toogle1",
              product: "air"
            }), "：デバイスのカメラによるQR/バーコード認証の使用可否を設定できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "bs3_qr_barcode_toogle2",
              product: "air"
            }), "：付与したCSNカードまたはWiegandカードと同じデータを持つQRコードで認証できるように設定できます。 この機能を使用するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "bs3_qr_barcode_toogle1",
              product: "air"
            }), " オプションを有効にする必要があります。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "顔以外のクレデンシャルを使用する際は、主に「前」と「後」が重要です。"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "tna",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "new_layout_nav_title_tna",
        product: "air",
        className: "normal"
      }), "(Time & Attendance, T&A)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["この機能を有効にすると、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_edit_tna_event_label",
        product: "air",
        className: "bold"
      }), " が ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "イベントログ"
      }), " に記録され、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tna_report",
        product: "air",
        className: "bold"
      }), " に使用されます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "new_device_edit_tna_toogle",
            product: "air"
          }), "：トグルスイッチをクリックして勤怠管理機能をオンまたはオフにできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_tna_mode_label",
            product: "air"
          }), "：希望する勤怠モードを選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Include, {
          type: props.type,
          ref: "bs3",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_edit_tna_mode_option2",
                product: "air"
              }), "：画面に勤怠キーを表示し、認証時にユーザーが勤怠イベントを選択できます。"]
            }), "\n"]
          })
        }), "\n", (0,jsx_runtime.jsx)(Include, {
          type: props.type,
          ref: "ae-mc,xpass2,bew3,bs3,xs2",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_edit_tna_mode_option3",
                product: "air"
              }), "：設定したスケジュールに従って勤怠イベントが自動で切り替わります。 勤怠イベントに適用するスケジュールを選択できます。"]
            }), "\n"]
          })
        }), "\n", (0,jsx_runtime.jsx)(Include, {
          type: props.type,
          ref: "bs3",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_edit_tna_mode_option4",
                product: "air"
              }), "：ユーザーが最後に使用した勤怠イベントを継続して使用できます。"]
            }), "\n"]
          })
        }), "\n", (0,jsx_runtime.jsx)(Include, {
          type: props.type,
          ref: "ae-mc,xpass2,bew3,bs3,xs2",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_edit_tna_mode_option5",
                  product: "air"
                }), "：選択した勤怠イベントのみを使用できます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_edit_tna_mode_option6",
                  product: "air"
                }), "：モバイルクレデンシャルを提示する際、Suprema Passアプリで勤怠イベントを選択できます。"]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["勤怠管理の構成に関する詳細は ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/configuring-ta"
        }), " を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "bs3",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "device_bs3_sound_label",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_bs3_sound_label",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "device_bs3_sound_label2",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_bs3_sound_label2",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_label3",
              product: "air"
            }), "：デバイスを使用していないときに LCD 画面の明るさを下げて不要な電力消費を削減できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_label4",
              product: "air"
            }), "：画面の照明を常にオンにするか、無効化後に暗くなるように設定できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_backlight",
              product: "air"
            }), "：画面バックライトが自動でオフになるまでの時間を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user_form_input3",
              product: "air"
            }), "：デバイスの画面に表示する言語を設定できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_home_screen",
              product: "air"
            }), "：デバイスのホーム画面の背景に表示する項目を設定します。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_bs3_sound_home_screen_txt1",
                  product: "air"
                }), "：既定の画像をホーム画面に表示します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_bs3_sound_home_screen_txt2",
                  product: "air"
                }), "：ユーザーが登録した画像をデバイスのホーム画面に表示できます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_bs3_sound_home_screen_txt3",
                  product: "air"
                }), "：管理者が入力した内容をホーム画面に表示できます。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "audit_action_update",
                product: "air"
              }), " ボタンをクリックして保存すると、画像や通知が編集画面に表示されませんが、デバイスには引き続き表示されます。"]
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "device_bs3_sound_home_screen_sound",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_bs3_sound_home_screen_sound",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_home_screen_soung_use_voice",
              product: "air"
            }), "：通知音の代わりに音声ガイダンスを使用できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_home_screen_soung_device",
              product: "air"
            }), "：デバイスから出る音量を調整できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_home_screen_soung_speaker",
              product: "air"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_home_screen_microphone",
              product: "air"
            }), "：IP インターホン機能を使用するときにデバイスから出力または入力される音量を設定できます。"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "ae-mc,xpass2,bew3,bs3",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "wiegandoutput",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "new_layout_nav_title_wiegandout",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["外部システム（例：アラームパネル）との統合のための機能です。 この機能を使用するには、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "use_wiegand_out_label",
          product: "air"
        }), " オプションを有効にします。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "wiegand_output_mode",
              product: "air"
            }), "：Wiegand 信号の出力モードを設定します。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "user_regular_card_type",
                  product: "air"
                }), "：設定済みの Wiegand フォーマットでカードをスキャンします。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "device_wiegand_output_use_fail_code",
                    product: "air"
                  }), "：エラーコードを設定でき、Wiegand を使用したカード認証に失敗した場合に送信する値を選択できます。"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_wiegand_output_mode_bypass",
                  product: "air"
                }), "：Wiegand 認証に関係なく CSN を送信します。 ドア制御機能のないデバイスとして使用する場合に設定します。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "wiegand_output_info",
              product: "air"
            }), "：認証時にデバイスへ出力する情報を選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "wiegand_pulse_width",
              product: "air"
            }), "：Wiegand 信号のパルス幅を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "wiegand_pulse_interval",
              product: "air"
            }), "：Wiegand 信号のパルス間隔を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "mobile_consecutive_tag",
              product: "air"
            }), "：待機時間なしで連続してモバイルカードをタグ付けできます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "devices_weigand_out_consecutive_lable",
              product: "air"
            }), "：モバイルカードを連続でタグ付けできる最大回数を設定できます。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "mobile_consecutive_tag",
            product: "air"
          }), " 機能は Suprema Passアプリ 2.9.0 以上でサポートされています。"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "bs3",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "intercom",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_intercom_title",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_use_intercom",
              product: "air"
            }), "：IPインターホン機能を有効または無効にできます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_server_transport",
              product: "air"
            }), "：IPインターホンのSIPサーバー設定の際にSIPトランスポート方式を選択してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_server_address",
              product: "air"
            }), "：SIPサーバーのアドレスを入力してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_server_port",
              product: "air"
            }), "：SIPサーバーのポートを入力してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_registration_duration",
              product: "air"
            }), "：登録維持時間を入力します。 デバイスは登録維持時間が終了するたびにSIPサーバーへの登録を試みます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_username",
              product: "air"
            }), "：SIPアカウントのユーザー名を入力してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "login_password",
              product: "air"
            }), "：SIPアカウントのパスワードを入力してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_authorization_id",
              product: "air"
            }), "：SIPアカウントの認証IDを入力してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_outbound_proxy_server",
              product: "air"
            }), "：別の（アウトバウンド）プロキシサーバー経由でSIPサービスを使用できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_extension_number",
              product: "air"
            }), "：内線番号を追加または編集できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_video_resolution",
              product: "air"
            }), "：IPインターホン使用時に出力される映像の解像度を選択してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_open_door_button",
              product: "air"
            }), "：通話中にデバイスのドアを開けるためのボタンを指定してください。"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "bs3,xpass2",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "secureTamper",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_bs3_secure_tamper",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["デバイスでタンパーイベントが発生した場合、保存されている", (0,jsx_runtime.jsx)(_components.strong, {
          children: "全ユーザー情報"
        }), "、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "全ログ"
        }), "、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "セキュリティキー"
        }), "を削除するように設定できます。"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "bs3",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "rtspStreaming",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_bs3_rtsp",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real Time Streaming Protocol"
        }), "（RTSP）ストリーミングの詳細項目を設定できます。 デバイスのカメラを通じてリアルタイムで映像を配信できます。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_rtsp_toogle",
              product: "air"
            }), "：RTSPストリーミング機能をオンまたはオフに切り替えます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_rtsp_address",
              product: "air"
            }), "：RTSPサーバーのアドレスです。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_rtsp_port",
              product: "air"
            }), "：RTSPサーバーのポートを入力します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user_info_id",
              product: "air"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "login_password",
              product: "air"
            }), "：RTSPサーバーのIDとパスワードを入力します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_rtsp_video",
              product: "air"
            }), "：RTSP 使用時に出力される映像の解像度を選択します。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "RTSPストリーミング機能は BioStation 3 デバイスでのみサポートされます。"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rssiSensitivity",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "new_layout_nav_title_sensitivity",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "入退室のロックを解除するために、モバイル機器とデバイスがどれほど近くにある必要があるかを示すRSSI値を調整できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-edit-sensitivity.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "値が小さいほど、意図しない作動を防ぎます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "値が大きいほど、干渉が多い場所での検出が改善されます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["設定した値を初期化するには、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_btn_reset",
          product: "air"
        }), " ボタンをクリックしてください。"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "ae-mc,xpass2,xs2",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "moduleFoundSlots",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "module_found_slots_title",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["接続されている OM-120 モジュールを検出するためのオプションです。 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "add_btn",
          product: "air"
        }), " ボタンをクリックしてモジュールを検出できます。"]
      })]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/device-info-settings.mdx


const device_info_settings_frontMatter = {
	id: 'device-info-settings',
	title: 'デバイス情報および設定オプションのご案内',
	description: 'BioStar Airポータルでは、デバイスモデルごとに提供される情報の確認方法や、ネットワーク、認証、勤怠管理などの設定オプションについてご案内します。',
	keywords: [
		'デバイス情報',
		'設定オプション',
		'BioStar Air'
	],
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const device_info_settings_contentTitle = undefined;

const assets = {

};




const device_info_settings_toc = [...toc, ...toc, ...toc, ...toc, ...toc];
function device_info_settings_createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Details, Head} = _components;
  if (!Details) device_info_settings_missingMdxReference("Details", true);
  if (!Head) device_info_settings_missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "管理者は、登録済みのデバイスを選択して基本情報を確認し、ネットワークや認証、勤怠管理など、運用に必要な設定を行うことができます。 デバイスモデルによって利用できる設定オプションが異なる場合があります。該当するデバイス項目を展開して、利用可能なオプションをご確認ください。"
    }), "\n", "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "deviceInfo",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(Head, {
          level: "2",
          hashid: "airfob",
          children: "AirFob Edge"
        })
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "ae-mc"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "deviceInfo",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(Head, {
          level: "2",
          hashid: "xpass2",
          children: "XPass 2"
        })
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "xpass2"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "deviceInfo",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(Head, {
          level: "2",
          hashid: "xs2",
          children: "X-Station 2"
        })
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "xs2"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "deviceInfo",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(Head, {
          level: "2",
          hashid: "bew3",
          children: "BioEntry W3"
        })
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "bew3"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "deviceInfo",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(Head, {
          level: "2",
          hashid: "bs3",
          children: "BioStation 3"
        })
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "bs3"
      })]
    })]
  });
}
function device_info_settings_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(device_info_settings_createMdxContent, {
      ...props
    })
  }) : device_info_settings_createMdxContent(props);
}
function device_info_settings_missingMdxReference(id, component) {
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