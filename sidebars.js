// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  bsxplugins: [
    {
      type: 'category',
      label: 'BioStar X Plugins',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'platform/plugins/index',
      },
      items: [
        'platform/plugins/plugins-overview',
        'platform/plugins/getting-started',
        'platform/plugins/development-guide',
        'platform/plugins/registration-guide',
        'platform/plugins/troubleshooting'
      ]
    }
  ],
  biostar_air: [
    {
      type: 'category',
      label: 'BioStar Air',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'platform/biostar_air/index',
      },
      items: [
        {
          type: 'category',
          label: 'Overview',
          items: [
            'platform/biostar_air/what-is-biostar-air',
            'platform/biostar_air/access-control-hardware-compatibility',
            'platform/biostar_air/security-overview',
            'platform/biostar_air/site-setup-networking',
            'platform/biostar_air/biostar-air-migration',
          ]
        },
        {
          type: 'category',
          label: 'Site Management',
          items: [
            'platform/biostar_air/getting-started',
            'platform/biostar_air/biostar-air-login',
            {
              type: 'category',
              label: 'User Management',
              items: [
                'platform/biostar_air/managing-users',
                'platform/biostar_air/adding-individual-users',
                'platform/biostar_air/adding-users-in-bulk',
                'platform/biostar_air/troubleshooting-adding-users-in-bulk',
                'platform/biostar_air/user-card-types',
                'platform/biostar_air/managing-user-groups',
                'platform/biostar_air/managing-card-templates',
                'platform/biostar_air/managing-adding-users',
                'platform/biostar_air/linkpass-credentials',
              ]
            },
            {
              type: 'category',
              label: 'Device Management',
              items: [
                'platform/biostar_air/managing-registered-devices',
                'platform/biostar_air/configuring-ta',
                'platform/biostar_air/configuring-the-airfob-patch-and-tag',
                'platform/biostar_air/configuring-the-sio2-secure-module',
                'platform/biostar_air/how-to-upgrade-firmware',
                'platform/biostar_air/biometric-readers-and-credentials',
              ]
            },
            {
              type: 'category',
              label: 'Door Management',
              items: [
                'platform/biostar_air/managing-registered-doors',
                'platform/biostar_air/managing-door-and-device-groups',
                'platform/biostar_air/managing-door-schedules',
              ]
            },
            {
              type: 'category',
              label: 'Monitoring',
              items: [
                'platform/biostar_air/event-and-audit-logs',
                'platform/biostar_air/monitoring-door-status',
              ]
            },
            {
              type: 'category',
              label: 'Reports',
              items: [
                'platform/biostar_air/configuring-reports',
                'platform/biostar_air/reports-time-attendance-reports',
              ]
            },
            {
              type: 'category',
              label: 'Settings',
              items: [
                'platform/biostar_air/managing-administrators',
                'platform/biostar_air/site-settings',
                'platform/biostar_air/daylight-saving-time',
                'platform/biostar_air/customizing-email-templates',
                'platform/biostar_air/managing-sites-with-phone',
                'platform/biostar_air/custom-wiegand-card-formats'
              ]
            },
            {
              type: 'category',
              label: 'Advanced Features',
              items: [
                'platform/biostar_air/managing-door-access',
                'platform/biostar_air/managing-elevator-access',
                'platform/biostar_air/managing-roll-call-fire-muster',
                'platform/biostar_air/sip-intercom-for-biostation3'
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Video Management',
          items: [
            'platform/biostar_air/ip-camera-support-and-configuration',
            'platform/biostar_air/video-troubleshooting',
          ]
        },
        {
          type: 'category',
          label: 'Using Mobile Credentials',
          items: [
            'platform/biostar_air/suprema-pass-app-overview',
            'platform/biostar_air/opening-doors-with-mobile-credentials',
            'platform/biostar_air/suprema-pass-app-advanced-features',
            'platform/biostar_air/suprema-pass-app-sensitivity-settings',
            'platform/biostar_air/troubleshooting-suprema-pass-app',
            'platform/biostar_air/location-services-issues',
          ]
        },
        {
          type: 'category',
          label: 'Partners and Integrations',
          items: [
            'platform/biostar_air/intro-to-partner-portal',
            'platform/biostar_air/biostar-air-partner-portal-detailed-use',
            'platform/biostar_air/federated-sites',
            'platform/biostar_air/integration-quickstart',
          ]
        },
        {
          type: 'category',
          label: 'Hardware',
          items: [
            'platform/biostar_air/wiring-and-configuration',
          ]
        },
        {
          type: 'html',
          value: '<hr />'
        },
        {
          type: 'category',
          label: 'Release Notes',
          items: [
            'platform/biostar_air/release-notes/v2_10'
          ]
        }
      ]
    }
  ],
  biostarx: [
    {
      type: 'category',
      label: 'BioStar X',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'platform/biostar_x/index',
      },
      items: [
        {
          type: 'category',
          label: '개요',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/overview',
          },
          items: [
            'platform/biostar_x/before-start',
            'platform/biostar_x/system-requirements',
          ],
        },
        {
          type: 'category',
          label: '시작하기',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/getting-started',
          },
          items: [
            'platform/biostar_x/check-ethernet',
            'platform/biostar_x/express-install',
            'platform/biostar_x/custom-install',
            'platform/biostar_x/migration-x',
            'platform/biostar_x/install-communication-server',
            'platform/biostar_x/login',
            'platform/biostar_x/register-license-key',
            'platform/biostar_x/initial-setup-guide',
          ]
        },
        {
          type: 'category',
          label: '서버 관리',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/server-management',
          },
          items: [
            'platform/biostar_x/manage-server',
            'platform/biostar_x/service-settings',
            'platform/biostar_x/change-port',
            'platform/biostar_x/change-db',
            'platform/biostar_x/add-sub-db'
          ]
        },
        'platform/biostar_x/ui-launcher',
        {
          type: 'category',
          label: '사용자',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/how-to-guide-user',
          },
          items: [
            'platform/biostar_x/user-group-manage',
            'platform/biostar_x/add-user',
            'platform/biostar_x/add-user-basic-info',
            {
              type: 'category',
              label: '사용자 크리덴셜 등록하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/enroll-credential'
              },
              items: [
                'platform/biostar_x/enroll-credential-securitylevel',
                'platform/biostar_x/enroll-credential-authmode',
                'platform/biostar_x/enroll-credential-fingerprint',
                'platform/biostar_x/enroll-credential-face',
                'platform/biostar_x/enroll-credential-card',
                'platform/biostar_x/enroll-credential-mobile',
                'platform/biostar_x/enroll-credential-qrbarcode',
                'platform/biostar_x/enroll-credential-pin',
              ]
            },
            'platform/biostar_x/set-permission',
            'platform/biostar_x/set-user-advanced',
            'platform/biostar_x/view-users',
            {
              type: 'category',
              label: '사용자 관리하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/user-manage'
              },
              items: [
                'platform/biostar_x/edit-user',
                'platform/biostar_x/delete-user',
                'platform/biostar_x/transfer-user-info-to-device',
                // 'platform/biostar_x/delete-user-info-from-device',
                'platform/biostar_x/trace-user-access-log',
                'platform/biostar_x/export-import-user-info'
              ]
            },
            // 'platform/biostar_x/user-template',
            'platform/biostar_x/view-user-by-access',
            'platform/biostar_x/login-with-mfa',
            'platform/biostar_x/batch-import-face',
            'platform/biostar_x/migration-face',
            'platform/biostar_x/lockoverride'
          ]
        },
        {
          type: 'category',
          label: '모니터링',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/how-to-guide-monitoring',
          },
          items: [
            {
              type: 'category',
              label: '출입문 모니터링하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/monitoring-door'
              },
              items: [
                'platform/biostar_x/check-door-status',
                'platform/biostar_x/control-door',
                'platform/biostar_x/control-door-slave-device',
                'platform/biostar_x/control-elevator',
                'platform/biostar_x/control-zone',
              ]
            },
            'platform/biostar_x/monitoring-map',
            'platform/biostar_x/monitoring-device',
            'platform/biostar_x/monitoring-video',
            'platform/biostar_x/monitoring-event'
          ]
        },
        {
          type: 'category',
          label: '데이터',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/how-to-guide-data'
          },
          items: [
            'platform/biostar_x/data-generate-reports',
            'platform/biostar_x/data-automatic-report-schedule',
            'platform/biostar_x/data-settings'
          ]
        },
        {
          type: 'category',
          label: '대시보드',
          key: "bsxDashboard",
          link: {
            type: 'doc',
            id: 'platform/biostar_x/how-to-guide-dashboard',
          },
          items: [
            'platform/biostar_x/dashboard-adding-widget',
            'platform/biostar_x/dashboard-edit-widget',
            'platform/biostar_x/dashboard-delete-widget'
          ]
        },
        {
          type: 'category',
          label: '설정',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/how-to-guide-settings',
          },
          items: [
            {
              type: 'category',
              label: '장치 관리하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/settings-manage-devices'
              },
              items: [
                'platform/biostar_x/settings-manage-device-group',
                'platform/biostar_x/settings-adding-devices',
                'platform/biostar_x/settings-adding-wiegand',
                'platform/biostar_x/settings-adding-slave-device',
                'platform/biostar_x/settings-device-manage-device-users',
                'platform/biostar_x/settings-device-upgrade-firmware',
                'platform/biostar_x/settings-device-using-functions'
              ]
            },
            {
              type: 'category',
              label: '장치 설정하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/settings-device-details'
              },
              items: [
                'platform/biostar_x/settings-device-details-info',
                'platform/biostar_x/settings-device-details-network',
                'platform/biostar_x/settings-device-details-auth',
                'platform/biostar_x/settings-device-details-advanced',
                'platform/biostar_x/settings-device-details-thermal-mask',
                'platform/biostar_x/settings-device-details-interphone',
                'platform/biostar_x/settings-device-details-rtsp'
              ]
            },
            'platform/biostar_x/settings-device-image-log',
            'platform/biostar_x/settings-device-usb-agent',
            'platform/biostar_x/settings-device-connection-manager',
            {
              type: 'category',
              label: '출입문 관리하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/settings-manage-door'
              },
              items: [
                'platform/biostar_x/settings-manage-door-group',
                'platform/biostar_x/settings-door-add',
                'platform/biostar_x/settings-door-edit-info',
                'platform/biostar_x/settings-door-delete'
              ]
            },
            {
              type: 'category',
              label: '운영 권한 관리하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/settings-manage-account'
              },
              items: [
                'platform/biostar_x/settings-adding-custom-account',
              ]
            },
            {
              type: 'category',
              label: '출입 통제 설정하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/settings-access-control'
              },
              items: [
                'platform/biostar_x/settings-access-control-manage-access-level',
                'platform/biostar_x/settings-access-control-manage-access-group',
                'platform/biostar_x/settings-access-control-manage-floor-level',
                'platform/biostar_x/settings-access-control-ac-status'
              ]
            },
            'platform/biostar_x/settings-schedule',
            'platform/biostar_x/settings-triger-and-action',
            'platform/biostar_x/settings-event-log-import',
            'platform/biostar_x/settings-alert',
            {
              type: 'category',
              label: '크리덴셜 관리하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/settings-credential-manage'
              },
              items: [
                'platform/biostar_x/settings-credential-card-manage',
                'platform/biostar_x/settings-credential-wiegand-format',
                'platform/biostar_x/settings-credential-smart-format',
                'platform/biostar_x/settings-credential-mobile-access-card',
              ]
            },
            'platform/biostar_x/settings-card-printer',
            'platform/biostar_x/settings-email-setting',
            'platform/biostar_x/settings-custom-interface',
            {
              type: 'category',
              label: '서버 설정하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/settings-server',
              },
              items: [
                'platform/biostar_x/settings-server-server',
                'platform/biostar_x/settings-server-https'
              ]
            },
            {
              type: 'category',
              label: '라이선스 활성화하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/settings-license',
              },
              items: [
                'platform/biostar_x/settings-license-biostar-x-license',
                'platform/biostar_x/settings-license-device-license'
              ]
            },
            {
              type: 'category',
              label: '시스템 설정하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/settings-system'
              },
              items: [
                'platform/biostar_x/settings-system-audit-trail',
                'platform/biostar_x/settings-system-system-backup',
                'platform/biostar_x/settings-system-system-restore',
                'platform/biostar_x/settings-system-security',
                'platform/biostar_x/settings-system-daylight-saving-time'
              ]
            },
            'platform/biostar_x/settings-preferences'
          ]
        },
        {
          type: 'category',
          label: '고급 설정',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/how-to-guide-advanced-settings',
          },
          items: [
            {
              type: 'category',
              label: '엘리베이터 관리하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/settings-manage-elevators'
              },
              items: [
                'platform/biostar_x/settings-manage-elevators-group',
                'platform/biostar_x/settings-elevators-add',
                'platform/biostar_x/settings-elevators-edit-info',
                'platform/biostar_x/settings-elevators-delete'
              ]
            },
            {
              type: 'category',
              label: '고급 출입 통제 설정하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/settings-advanced-ac',
              },
              items: [
                'platform/biostar_x/settings-advanced-ac-apb',
                'platform/biostar_x/settings-advanced-ac-fire-alarm',
                'platform/biostar_x/settings-advanced-ac-scheduled-lock',
                'platform/biostar_x/settings-advanced-ac-scheduled-unlock',
                'platform/biostar_x/settings-advanced-ac-intrusion-alarm',
                'platform/biostar_x/settings-advanced-ac-interlock',
                'platform/biostar_x/settings-advanced-ac-muster',
                'platform/biostar_x/settings-advanced-ac-occupancy',
                'platform/biostar_x/settings-advanced-ac-roll-call',
              ]
            },
            {
              type: 'category',
              label: '비디오 설정하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/settings-videos'
              },
              items: [
                'platform/biostar_x/settings-video-integration',
                'platform/biostar_x/settings-videos-camera',
                'platform/biostar_x/settings-videos-rule',
              ]
            },
            {
              type: 'category',
              label: '맵 관리하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/settings-map-management'
              },
              items: [
                'platform/biostar_x/settings-map-manage-floor',
                'platform/biostar_x/settings-map-manage-facility',
                'platform/biostar_x/settings-map-manage-area'
              ]
            },
            'platform/biostar_x/settings-visitor',
            'platform/biostar_x/settings-diretory-integration',
            'platform/biostar_x/settings-remote-access',
            'platform/biostar_x/settings-virtual-device-event-log'
          ]
        },
        {
          type: 'category',
          label: '플러그인',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/plugins',
          },
          items: [
            {
              type: 'category',
              label: '근태 관리 사용하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/tna',
              },
              items: [
                'platform/biostar_x/tna-rule-setting',
                'platform/biostar_x/tna-rule-shift-paycode',
                'platform/biostar_x/tna-rule-shift-day',
                'platform/biostar_x/tna-rule-shift-schedule',
                'platform/biostar_x/tna-rule-shift-overtime',
                'platform/biostar_x/tna-rule-schedule',
                'platform/biostar_x/tna-report',
                'platform/biostar_x/tna-report-edit',
                'platform/biostar_x/tna-settings'
              ]
            },
            {
              type: 'category',
              label: '방문자 신청 및 관리하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/visitor',
              },
              items: [
                'platform/biostar_x/visitor-register',
                'platform/biostar_x/visitor-register-manage',
                'platform/biostar_x/visitor-register-checkin-manage',
                'platform/biostar_x/visitor-register-checkout-manage',
                'platform/biostar_x/visitor-register-all-manage',
                'platform/biostar_x/visitor-remove-expire-personal'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'UI 알아보기',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/ui-overview'
          },
          items: [
            'platform/biostar_x/ui-common',
            'platform/biostar_x/ui-user',
            'platform/biostar_x/ui-monitoring',
            'platform/biostar_x/ui-dashboard',
            'platform/biostar_x/ui-settings'
          ]
        },
        'platform/biostar_x/licensing'
      ],
    },
    'platform/biostar_x/appendices',
    {
      type: 'html',
      value: '<hr />'
    },
    {
      type: 'category',
      label: 'Release Notes',
      link: {
        type: 'doc',
        id: 'platform/biostar_x/release-notes'
      },
      items: [
        'platform/biostar_x/release-notes/100'
      ]
    }
  ],
  legal: [
    {
      type: 'category',
      label: 'Legal',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      items: [
        'legal/disclaimers',
        'legal/eula',
        'legal/open-source-licenses'
      ]
    }
  ],
  reference: [
    {
      type: 'category',
      label: '참조 문서',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'reference/index',
      },
      items: [
        'reference/glossary',
        {
          type: "category",
          label: "제품 기능 및 사양 비교",
          link: {
            type: 'doc',
            id: 'reference/compares/index',
          },
          items: [
            {
              type: 'category',
              label: '지문 인증 장치',
              items: [
                'reference/compares/fingerprint-devices-funcs',
                'reference/compares/fingerprint-devices-specs'
              ]
            },
            {
              type: 'category',
              label: '얼굴 인증 장치',
              items: [
                'reference/compares/face-devices-funcs',
                'reference/compares/face-devices-specs',
              ]
            },
            {
              type: 'category',
              label: 'RFID 장치',
              items: [
                'reference/compares/rfid-devices-funcs',
                'reference/compares/rfid-devices-specs',
              ]
            },
            {
              type: 'category',
              label: '지문 및 RFID 리더',
              items: [
                'reference/compares/finger-rfid-devices-funcs',
                'reference/compares/finger-rfid-devices-specs',
              ]
            },
            {
              type: 'category',
              label: '지능형 컨트롤러 및 주변 장치',
              items: [
                'reference/compares/controller-devices-funcs',
                'reference/compares/controller-devices-specs',
              ]
            }
          ]
        },
        'reference/smartcardissue'
      ]
    }
  ],
  howto: [
    {
      type: 'category',
      label: 'How-to Articles',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'how-to/index',
      },
      items: [
        'how-to/master-admin',
      ]
    }
  ],
  corestation40: [
    {
      type: 'category',
      label: 'CoreStation',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'device/corestation_40/index',
      },
      items: [
        'device/corestation_40/safety-instructions',
        'device/corestation_40/getting-started',
        'device/corestation_40/installation',
        'device/corestation_40/product-specifications',
        'device/corestation_40/regulatory-information',
        'device/corestation_40/appendices'
      ]
    }
  ],
  corestation20: [
    {
      type: 'category',
      label: 'CoreStation 20',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'device/corestation_20/index',
      },
      items: [
        'device/corestation_20/safety-instructions',
        'device/corestation_20/getting-started',
        'device/corestation_20/installation',
        'device/corestation_20/product-specifications',
        'device/corestation_20/regulatory-information',
        'device/corestation_20/appendices'
      ]
    }
  ],
  doorinterface24: [
    {
      type: 'category',
      label: 'Door Interface',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'device/doorinterface/index',
      },
      items: [
        'device/doorinterface/safety-instructions',
        'device/doorinterface/getting-started',
        'device/doorinterface/installation',
        'device/doorinterface/product-specifications',
        'device/doorinterface/regulatory-information',
        'device/doorinterface/appendices'
      ]
    }
  ],
  facestationf2: [
    {
      type: 'category',
      label: 'FaceStation F2',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'device/facestation_f2/index',
      },
      items: [
        'device/facestation_f2/safety-instructions',
        'device/facestation_f2/getting-started',
        'device/facestation_f2/installation',
        {
          type: 'category',
          label: '사용하기',
          link: {
            type: 'doc',
            id: 'device/facestation_f2/using-device',
          },
          items: [
            'device/facestation_f2/admin-menu',
            'device/facestation_f2/user',
            'device/facestation_f2/authentication',
            'device/facestation_f2/settings',
            'device/facestation_f2/event-log'
          ]
        },
        'device/facestation_f2/troubleshooting',
        'device/facestation_f2/product-specifications',
        'device/facestation_f2/regulatory-information',
        'device/facestation_f2/appendices'
      ]
    }
  ],
  bioentryw3: [
    {
      type: 'category',
      label: 'BioEntry W3',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'device/bioentry_w3/index',
      },
      items: [
        'device/bioentry_w3/safety-instructions',
        'device/bioentry_w3/getting-started',
        'device/bioentry_w3/installation',
        'device/bioentry_w3/product-specifications',
        'device/bioentry_w3/regulatory-information',
        'device/bioentry_w3/appendices'
      ]
    }
  ],
  biostation3: [
    {
      type: 'category',
      label: 'BioStation 3',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'device/biostation_3/index',
      },
      items: [
        'device/biostation_3/safety-instructions',
        'device/biostation_3/getting-started',
        'device/biostation_3/installation',
        {
          type: 'category',
          label: '사용하기',
          link: {
            type: 'doc',
            id: 'device/biostation_3/using-device',
          },
          items: [
            'device/biostation_3/admin-menu',
            'device/biostation_3/user',
            'device/biostation_3/authentication',
            'device/biostation_3/settings',
            'device/biostation_3/event-log',
          ],
        },
        'device/biostation_3/troubleshooting',
        'device/biostation_3/product-specifications',
        'device/biostation_3/regulatory-information',
        'device/biostation_3/appendices',
      ],
    },
  ],
  biostation2a: [
    {
      type: 'category',
      label: 'BioStation 2a',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'device/biostation_2a/index',
      },
      items: [
        'device/biostation_2a/safety-instructions',
        'device/biostation_2a/getting-started',
        'device/biostation_2a/installation',
        {
          type: 'category',
          label: '사용하기',
          link: {
            type: 'doc',
            id: 'device/biostation_2a/using-device',
          },
          items: [
            'device/biostation_2a/admin-menu',
            'device/biostation_2a/user',
            'device/biostation_2a/authentication',
            'device/biostation_2a/settings',
            'device/biostation_2a/event-log',
          ],
        },
        'device/biostation_2a/troubleshooting',
        'device/biostation_2a/product-specifications',
        'device/biostation_2a/regulatory-information',
        'device/biostation_2a/appendices',
      ],
    },
  ],
  bioliten2: [
    {
      type: 'category',
      label: 'BioLite N2',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'device/biolite_n2/index',
      },
      items: [
        'device/biolite_n2/safety-instructions',
        'device/biolite_n2/getting-started',
        'device/biolite_n2/installation',
        {
          type: 'category',
          label: '사용하기',
          link: {
            type: 'doc',
            id: 'device/biolite_n2/using-device',
          },
          items: [
            'device/biolite_n2/admin-menu',
            'device/biolite_n2/user',
            'device/biolite_n2/authentication',
            'device/biolite_n2/settings',
            'device/biolite_n2/event-log',
          ],
        },
        'device/biolite_n2/troubleshooting',
        'device/biolite_n2/product-specifications',
        'device/biolite_n2/regulatory-information',
        'device/biolite_n2/appendices',
      ],
    },
  ],
  xstation2: [
    {
      type: 'category',
      label: 'X-Station 2',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'device/xstation_2/index',
      },
      items: [
        'device/xstation_2/safety-instructions',
        'device/xstation_2/getting-started',
        'device/xstation_2/installation',
        {
          type: 'category',
          label: '사용하기',
          link: {
            type: 'doc',
            id: 'device/xstation_2/using-device',
          },
          items: [
            'device/xstation_2/admin-menu',
            'device/xstation_2/user',
            'device/xstation_2/authentication',
            'device/xstation_2/settings',
            'device/xstation_2/event-log',
          ],
        },
        'device/xstation_2/troubleshooting',
        'device/xstation_2/product-specifications',
        'device/xstation_2/regulatory-information',
        'device/xstation_2/appendices',
      ],
    },
  ],
  facestation2: [
    {
      type: 'category',
      label: 'FaceStation 2',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'device/facestation_2/index',
      },
      items: [
        'device/facestation_2/safety-instructions',
        'device/facestation_2/getting-started',
        'device/facestation_2/installation',
        {
          type: 'category',
          label: '사용하기',
          link: {
            type: 'doc',
            id: 'device/facestation_2/using-device',
          },
          items: [
            'device/facestation_2/admin-menu',
            'device/facestation_2/user',
            'device/facestation_2/authentication',
            'device/facestation_2/settings',
            'device/facestation_2/event-log',
          ],
        },
        'device/facestation_2/troubleshooting',
        'device/facestation_2/product-specifications',
        'device/facestation_2/regulatory-information',
        'device/facestation_2/appendices',
      ],
    },
  ],
  xpassd2: [
    {
      type: 'category',
      label: 'XPass D2',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'device/xpass_d2/index',
      },
      items: [
        'device/xpass_d2/safety-instructions',
        'device/xpass_d2/getting-started',
        'device/xpass_d2/installation',
        'device/xpass_d2/product-specifications',
        'device/xpass_d2/regulatory-information',
        'device/xpass_d2/appendices'
      ]
    }
  ],
  // bioentryp2: [
  //   {
  //     type: 'category',
  //     label: 'BioEntry P2',
  //     collapsed: false,
  //     collapsible: false,
  //     className: 'p-title',
  //     link: {
  //       type: 'doc',
  //       id: 'device/bioentry_p2/index',
  //     },
  //     items: [
  //       'device/bioentry_p2/safety-instructions',
  //       'device/bioentry_p2/getting-started',
  //       'device/bioentry_p2/installation',
  //       'device/bioentry_p2/product-specifications',
  //       'device/bioentry_p2/regulatory-information',
  //       'device/bioentry_p2/appendices'
  //     ]
  //   }
  // ],
};

export default sidebars;
