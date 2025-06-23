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
            'platform/biostar_x/getting-started',
            'platform/biostar_x/system-requirements',
          ],
        },
        {
          type: 'category',
          label: '튜토리얼',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/tutorial',
          },
          items: [
            'platform/biostar_x/tutorial-express-install',
            'platform/biostar_x/tutorial-custom-install',
            'platform/biostar_x/tutorial-login',
            'platform/biostar_x/tutorial-register-license-key',
            'platform/biostar_x/tutorial-add-device',
            'platform/biostar_x/manage-server',
            'platform/biostar_x/change-port',
            'platform/biostar_x/change-db',
          ]
        },
        {
          type: 'category',
          label: '사용자',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/how-to-guide-user',
          },
          items: [
            'platform/biostar_x/user-group-manage',
            {
              type: 'category',
              label: '사용자 등록하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/add-user'
              },
              items: [
                'platform/biostar_x/add-user-basic-info',
                'platform/biostar_x/set-permission',
                'platform/biostar_x/enroll-credential',
              ]
            },
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
                'platform/biostar_x/delete-user-info-from-device',
                'platform/biostar_x/trace-user-access-log',
                'platform/biostar_x/export-import-user-info',
              ]
            },
            // 'platform/biostar_x/user-template',
            'platform/biostar_x/view-user-by-access',
            'platform/biostar_x/login-with-mfa',
            'platform/biostar_x/migration-face',
            'platform/biostar_x/columnlayout'
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
                'platform/biostar_x/check-elevator-status',
                'platform/biostar_x/control-elevator',
                'platform/biostar_x/check-zone-status',
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
          link: {
            type: 'doc',
            id: 'platform/biostar_x/how-to-guide-dashboard',
          },
          items: [
            'platform/biostar_x/dashboard'
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
              ]
            },
            'platform/biostar_x/settings-triger-and-action',
            'platform/biostar_x/settings-alert',
            {
              type: 'category',
              label: '크리덴션 관리하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/settings-credential-manage'
              },
              items: [
                'platform/biostar_x/settings-credential-card-manage',
                'platform/biostar_x/settings-credential-card-change-data-format',
                'platform/biostar_x/settings-credential-card-csn-mobile',
                'platform/biostar_x/settings-credential-wiegand-format',
                'platform/biostar_x/settings-credential-smart-format',
              ]
            },
            'platform/biostar_x/settings-diretory-integration',
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
          label: 'UI 알아보기',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/ui-overview'
          },
          items: [
            'platform/biostar_x/ui-common',
            'platform/biostar_x/ui-launcher',
            'platform/biostar_x/ui-user',
            'platform/biostar_x/ui-monitoring',
            'platform/biostar_x/ui-dashboard'
          ]
        },
        'platform/biostar_x/licensing'
      ],
    },
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
        'reference/glossary'
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
};

export default sidebars;
