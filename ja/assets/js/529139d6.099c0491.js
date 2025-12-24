"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["24331"], {
4316: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_auth_mdx_529_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-auth-mdx-529.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_auth_mdx_529_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-auth","title":"認証を設定する","description":"デバイスのユーザー認証に関するさまざまな設定方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-auth.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-auth","permalink":"/docs/ja/platform/biostar_x/settings-device-details-auth","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-auth.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-auth","title":"認証を設定する","description":"デバイスのユーザー認証に関するさまざまな設定方法を案内します。","keywords":["デバイス","認証"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ネットワークを設定する","permalink":"/docs/ja/platform/biostar_x/settings-device-details-network"},"next":{"title":"高度設定","permalink":"/docs/ja/platform/biostar_x/settings-device-details-advanced"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-auth.mdx


const frontMatter = {
	id: 'settings-device-details-auth',
	title: '認証を設定する',
	description: 'デバイスのユーザー認証に関するさまざまな設定方法を案内します。',
	keywords: [
		'デバイス',
		'認証'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "認証方法を設定する",
  "id": "認証方法を設定する",
  "level": 2
}, {
  "value": "認証モードを追加する",
  "id": "added-auth-mode",
  "level": 3
}, {
  "value": "指紋認証を設定する",
  "id": "指紋認証を設定する",
  "level": 2
}, {
  "value": "顔認証設定",
  "id": "顔認証設定",
  "level": 2
}, {
  "value": "QR/バーコード設定",
  "id": "qrバーコード設定",
  "level": 2
}, {
  "value": "カード認証設定",
  "id": "カード認証設定",
  "level": 2
}, {
  "value": "PIN認証設定",
  "id": "pin認証設定",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Details, IcAdd, IcEdit, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスのユーザー認証に関するさまざまな設定方法を案内します。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.authentication",
        product: "2"
      }), " セクションでは、認証方式とデバイスがサポートする主要な認証オプションを段階的に確認します。 設定を変更すると実際のデバイスに反映される点に留意し、各オプションの機能と注意事項を参照して環境に適した認証ポリシーを構成してください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスの種類によって設定できるネットワークオプションが異なる場合があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザーが任意で変更した内容がある場合は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " をクリックします。 変更内容を保存しないとデバイスに反映されません。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "認証方法を設定する",
      children: "認証方法を設定する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスの認証モードと権限、サーバーマッチング、認証待機時間を設定できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-auth-mode.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authenticationMode",
            product: "2"
          }), "：1 つ以上のクレデンシャルを組み合わせてデバイスの認証モードを設定します。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
            href: "#added-auth-mode",
            children: "次のドキュメント"
          }), "を参照してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["追加した認証モードを編集するには ", (0,jsx_runtime.jsx)(IcEdit, {}), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcTrash2, {}), " をクリックして追加した認証モードを削除します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.usersHaveFullAccess",
            product: "2"
          }), "：デバイスに登録されたユーザーに出入グループ設定なしですべての出入権限を付与できます。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["このオプションを ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), " に設定すると、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.accessLevel",
              product: "2"
            }), " および ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ag.floorLevel.title",
              product: "2"
            }), " にデバイスを登録できません。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authTimeout",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authenticationMode",
            product: "2"
          }), " オプションで複数のクレデンシャルを組み合わせて使用する場合、2 番目のクレデンシャルを認証するまでの待機時間です。 指定した時間内にクレデンシャルを認証しない場合、認証に失敗します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.serverMatching",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.active",
                product: "2"
              }), "：サーバーマッチング機能を有効にします。 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), "をインストールしたサーバーに保存されているユーザー情報を使用して認証を行うサーバーマッチング機能を設定してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.inactive",
                product: "2"
              }), "：サーバーマッチング機能を無効にします。 この場合、デバイスに登録されているユーザー情報で認証を行います。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(Details, {
          children: [(0,jsx_runtime.jsxs)("summary", {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.serverMatching",
              product: "2"
            }), " 機能に対応するデバイスとファームウェアバージョンを表示"]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "CoreStation ファームウェア 1.0.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry P2 ファームウェア 1.0.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry W2 ファームウェア 1.0.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation L2 ファームウェア 1.0.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation A2 ファームウェア 1.0.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 2 ファームウェア 1.2.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioLite N2 ファームウェア 1.0.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "XPass D2 ファームウェア 1.0.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "XPass 2 ファームウェア 1.0.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation 2 ファームウェア 1.4.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation F2 ファームウェア 1.0.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "X-Station 2 ファームウェア 1.0.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 ファームウェア 1.0.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry W3 ファームウェア 1.0.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceLite はサーバーマッチング機能をサポートしていません。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation F2、BioStation 3、BioEntry W3 デバイスでは顔認証のサーバーマッチングを使用できません。"
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceDetection",
            product: "2"
          }), "：ユーザーが認証するときにデバイスに内蔵されたカメラで顔を検出するアルゴリズムレベルを設定してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.faceDetectionLevel.normal",
                product: "2"
              }), "：腕の長さ程度の距離から顔を検出できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.faceDetectionLevel.strict",
                product: "2"
              }), "：腕の長さより近づく必要があり、顔を検出できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.faceDetectionLevel.none",
                product: "2"
              }), "：顔検出機能を使用しません。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "このオプションは BioStation A2 モデルでサポートされています。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.userIdDisplay",
            product: "2"
          }), "：認証成功時にデバイスに表示されるユーザーIDを表示または非表示にできます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.displayAll",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.maskAllButFirstLetter",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.hideAll",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.userNameDisplay",
            product: "2"
          }), "：認証成功時にデバイスに表示されるユーザー名を表示または非表示にできます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.displayAll",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.maskAllButFirstLetter",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.hideAll",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "added-auth-mode",
      children: "認証モードを追加する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.authenticationMode",
        product: "2"
      }), " オプションでデバイスの認証モードを設定してください。 指紋、ID、カード、PIN、顔などのクレデンシャルを組み合わせて認証モードを設定できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authenticationMode",
            product: "2"
          }), " オプションで ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.addNewAuthMode",
            product: "2"
          }), " ウィンドウが表示されたら、希望する認証モードを中央エリアへドラッグしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-edit-auth-mode-adding.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "追加できる認証モードは最大5個までです。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.schedule",
            product: "2"
          }), " オプションで希望の項目を選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべての設定が完了したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule.schedule",
          product: "2"
        }), " オプションに希望のスケジュールがない場合は、", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule.addNewSchedule",
          product: "2"
        }), " をクリックしてください。 新しいスケジュールを追加できます。 スケジュール設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-schedule",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指紋認証を設定する",
      children: "指紋認証を設定する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.fingerprint",
        product: "2"
      }), " グループでは、デバイスの指紋認証に関する詳細を設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-fingerprint.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.securityLevel",
            product: "2"
          }), "：指紋認証時に使用するセキュリティレベルを設定してください。 セキュリティレベルを上げるほど、", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#frr",
            children: "本人拒否率 (FRR)"
          }), " は高くなりますが、", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#far",
            children: "他人受入率 (FAR)"
          }), " は低くなります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.scanTimeout",
            product: "2"
          }), "：指紋スキャンの待機時間を設定してください。 設定した時間内に指紋をスキャンできない場合、認証は失敗します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.sensorSensitivity",
            product: "2"
          }), "：指紋センサーの感度を設定してください。 より精密な指紋情報を取得するには、センサー感度を高く設定してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.1NFastMode",
            product: "2"
          }), "：指紋認証の速度を設定してください。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.auto",
            product: "2"
          }), " を選択すると、デバイスに登録されている指紋テンプレートの総数に応じて認証速度が設定されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.templateFormat",
            product: "2"
          }), "：設定されている指紋テンプレート形式を確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.matchingTimeout",
            product: "2"
          }), "：指紋マッチングの待機時間を設定してください。 設定した時間内に認証が完了しない場合、認証は失敗します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.viewImage",
            product: "2"
          }), "：指紋認証時に画面に指紋画像を表示できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.sensorMode",
            product: "2"
          }), "：指紋センサーの動作モードを設定してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.sensorMode.autoOn",
                product: "2"
              }), "：指紋センサーがユーザーの指を検知すると、センサーがオンになります。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.sensorMode.alwaysOn",
                product: "2"
              }), "：指紋センサーが常にオンになっています。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.advancedEnrollment",
            product: "2"
          }), "：高品質の指紋情報を保存するために、スキャンした指紋の品質を検査できます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), "に設定すると、指紋品質が低い場合にユーザーへ通知し、正しくスキャンできるよう支援します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.fingerprintLFD",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#fake_fp",
            children: "偽造指紋"
          }), "検出レベルを設定できます。 偽造指紋検出レベルを高く設定すると、実際の指紋に対する拒否率も高くなる場合があります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.duplicateCheck",
            product: "2"
          }), "：指紋を登録する際に重複登録をチェックできます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスの種類によって設定できるオプションが異なる場合があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["指紋認証設定で ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.templateFormat",
              product: "2"
            }), " オプションを変更すると、以前に保存されたすべての指紋は使用できなくなります。 ユーザーの指紋を登録する前に、必ず ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.templateFormat",
              product: "2"
            }), " オプションでテンプレートを選択してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.viewImage",
              product: "2"
            }), " オプションは BioStation 2、BioStation A2、BioStation L2、BioLite N2、FaceStation F2(FSF2-ODB)、X-Station 2(XS2-ODPB, XS2-OAPB) モデルでサポートされています。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.fingerprintLFD",
              product: "2"
            }), " オプションは BioStation A2、BioStation L2、BioEntry W2、BioLite N2、FaceStation F2(FSF2-ODB)、X-Station 2(XS2-ODPB, XS2-OAPB) モデルでサポートされています。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "顔認証設定",
      children: "顔認証設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "user.credential.face",
        product: "2"
      }), " グループでは、デバイスの顔認証に関する詳細設定を行えます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-face.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.securityLevel",
            product: "2"
          }), "：顔を認証する際に使用するセキュリティレベルを設定します。 セキュリティレベルを上げるほど、", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#frr",
            children: "本人拒否率 (FRR)"
          }), " は高くなりますが、", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#far",
            children: "他人受入率 (FAR)"
          }), " は低くなります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "face.operationMode.enrollTime",
            product: "2"
          }), "：ユーザーの顔を登録する際、設定した時間内に登録できないと顔登録がキャンセルされます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.motionSensor",
            product: "2"
          }), "：デバイス周囲の動きを検知する感度を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.ambientBrightness",
            product: "2"
          }), "：デバイス周囲の明るさを検知して IR LED の強度を調整できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceLFD",
            product: "2"
          }), "：偽造顔検出レベルを設定します。 偽造顔検出レベルを高く設定すると、実際の顔に対する拒否率も高くなる場合があります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.lightBrightness",
            product: "2"
          }), "：デバイス照明の明るさを手動で調整できます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.ambientBrightness.normal",
            product: "2"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.ambientBrightness.high",
            product: "2"
          }), " で明るさを設定するか、 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.lightBrightness.notUse",
            product: "2"
          }), " を選択して照明をオフにできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceQuickEnrollment",
            product: "2"
          }), "：クイック顔登録の使用有無を設定します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.enable",
                product: "2"
              }), "：顔登録手順をワンステップに設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.disabled",
                product: "2"
              }), "：顔登録手順を3段階に設定します。 高品質の顔テンプレートを登録する場合は、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.disabled",
                product: "2"
              }), " に設定します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.duplicateCheck",
            product: "2"
          }), "：顔を登録する際に重複登録をチェックできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceDetectSetting",
            product: "2"
          }), "：顔を認証する際の顔認識環境を設定します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.faceMaxRotation",
                product: "2"
              }), "：許容される顔の最大回転角度を設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.faceDetectDist",
                product: "2"
              }), "：顔を認識する最小および最大距離を設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.faceWideSearch",
                product: "2"
              }), "：カメラ映像全体で顔を認識する場合は ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.on",
                product: "2"
              }), " に設定します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceOperationMode",
            product: "2"
          }), "：顔を認証する際のデバイスの動作モードを設定します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.face.operation_mode.enable",
                product: "2"
              }), "：ビジュアルと赤外線の両方でマッチングを行い、顔認証の精度を高めます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.face.operation_mode.disable",
                product: "2"
              }), "：デバイスの認証範囲内でユーザーが歩きながらでも顔認証を行えるよう、高速で認証を実行します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceFakeDetection",
            product: "2"
          }), "：写真などによる偽造顔を利用したユーザー認証を防止できます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceOperationMode",
            product: "2"
          }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.face.operation_mode.enable",
            product: "2"
          }), " に設定すると有効になります。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスの種類によって設定できるオプションが異なる場合があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.authmode.settings.ambientBrightness",
              product: "2"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceLFD",
              product: "2"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceQuickEnrollment",
              product: "2"
            }), " の各オプションは FaceStation 2、FaceLite モデルでサポートされています。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.authmode.settings.lightBrightness",
              product: "2"
            }), " オプションは FaceStation F2 ファームウェア 1.1.0 以降のモデルでサポートされています。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceDetectSetting",
              product: "2"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceOperationMode",
              product: "2"
            }), " の各オプションは FaceStation F2、BioStation 3 モデルでサポートされています。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "qrバーコード設定",
      children: "QR/バーコード設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "user.credential.barcode",
        product: "2"
      }), " グループでは、デバイスの QR/バーコード認証に関する詳細設定を行えます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-qrbarcode.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useVisualBarcode",
            product: "2"
          }), "：デバイスのカメラによる QR/バーコード認証の使用有無を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.qrCameraTimeout",
            product: "2"
          }), "：カメラのスキャン待機時間を設定します。 設定した時間内に QR/バーコードをスキャンしない場合、認証は失敗します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.normalize",
            product: "2"
          }), "：ユーザーに発行した CSN カードまたは Wiegand カードと同じデータを持つ QR コードで認証できるように設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.motionSensor",
            product: "2"
          }), "：動きを検知してカメラのスキャンを開始する感度を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useBarcodeScanner",
            product: "2"
          }), "：デバイスのスキャナーによるQR/バーコード認証の使用可否を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.qrScanTimeout",
            product: "2"
          }), "：スキャン待機時間を設定します。 設定した時間内に QR/バーコードをスキャンしない場合、認証は失敗します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVisualBarcode",
              product: "2"
            }), " オプションを使用するには、別途デバイスライセンスが必要です。 詳細については ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-license-device-license",
              children: "次のドキュメント"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVisualBarcode",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.qrCameraTimeout",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.normalize",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.authmode.settings.motionSensor",
              product: "2"
            }), " オプションに対応しているデバイスは以下のとおりです。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "X-Station 2 (XS2-ODPB, XS2-OAPB, XS2-DPB, XS2-APB) ファームウェア 1.2.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 (BS3-DB, BS3-APWB) ファームウェア 1.1.0 以上"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["以下のデバイスが ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useBarcodeScanner",
              product: "2"
            }), " および ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.qrScanTimeout",
              product: "2"
            }), " オプションに対応しています。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "X-Station 2 (XS2-QDPB, XS2-QAPB)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "カード認証設定",
      children: "カード認証設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.cardType",
        product: "2"
      }), " グループでデバイスが使用するカードタイプを設定します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["デバイスがサポートするカードタイプのみが ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.cardType",
          product: "2"
        }), " グループに表示されます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.CSN",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSNカードとフォーマットの種類を選択し、バイト順序を設定します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-card-csn.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.byteOrder",
          product: "2"
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
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.formatType",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.general",
                product: "2"
              }), "：カードのシリアル番号 (CSN) を変換せずにそのまま読み取って表示します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.wiegand",
                product: "2"
              }), "：ユーザーが定義した Wiegand 形式に従ってカードシリアル番号 (CSN) を変換して表示します。 新しい Wiegand 形式を設定するには", (0,jsx_runtime.jsx)(_components.a, {
                href: "settings-credential-wiegand-format",
                children: "次のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.Wiegand",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wiegand カードの種類を選択し、Wiegand 形式を設定します。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.cardFormat.wiegand.format",
        product: "2"
      }), " オプションで使用する Wiegand 形式を選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-card-wiegand.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["新しい Wiegand 形式を設定するには", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-credential-wiegand-format",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-2",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.supremaSmartCard",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema スマートカードの種類を選択し、カードレイアウトとバイト順序を設定します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-card-smart.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.batch.supremaSmartCardLayout",
            product: "2"
          }), "：Suprema スマートカードレイアウトを選択します。 新しいスマートカードレイアウトを設定するには ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-credential-smart-format",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.supremaSmartCardByteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), "：カードデータを大きいバイト単位から小さいバイト単位の順に処理します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), "：カードデータを小さいバイト単位から大きいバイト単位の順に処理します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-3",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.customSmartCard",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "他社が発行したカスタムスマートカードの種類を選択し、カードレイアウトとバイト順序を設定します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-card-custom.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.batch.customSmartCardLayout",
            product: "2"
          }), "：カスタムスマートカードレイアウトを選択します。 新しいスマートカードレイアウトを設定するには ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-credential-smart-format",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.customSmartCardByteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), "：カードデータを大きいバイト単位から小さいバイト単位の順に処理します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), "：カードデータを小さいバイト単位から大きいバイト単位の順に処理します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "カスタムスマートカードをサポートするデバイスとファームウェアバージョンを表示"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass D2 ファームウェア 1.7.1 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry P2 ファームウェア 1.5.1 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W2 ファームウェア 1.8.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 2a ファームウェア 1.1.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "X-Station 2 ファームウェア 1.3.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 ファームウェア 1.3.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioLite N2 ファームウェア 1.6.2 以上"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-4",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.csnMobile",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "モバイルカードの認識方法を設定します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-card-csn-mobile.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "NFC"
          }), "：モバイル機器で NFC 通信を使用してモバイルカードを認識します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BLE"
          }), "：低電力 Bluetooth (Bluetooth Low Energy、BLE) 通信を使用してモバイルカードを認識します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-5",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.templateOnMobile",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "テンプレートオンモバイルの認識方法と、ユーザーがデバイスで直接登録するバイオメトリクスを指定し、バイト順序を設定します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-card-tom.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.TomOutputByteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), "：カードデータを大きいバイト単位から小さいバイト単位の順に処理します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), "：カードデータを小さいバイト単位から大きいバイト単位の順に処理します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "テンプレートオンモバイルをサポートするデバイスとファームウェアバージョンを表示"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 ファームウェア 1.2.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pin認証設定",
      children: "PIN認証設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.pin",
        product: "2"
      }), " グループでは、デバイスのPIN認証に対して ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.scrambleKeypad",
        product: "2"
      }), " オプションをオンまたはオフに設定します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-pin.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.scrambleKeypad",
          product: "2"
        }), " オプションは、LCD画面のユーザーインターフェースに対応するSuprema製品でのみ使用できます。"]
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