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
      items: [
        {
          type: 'category',
          label: '개요',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/index',
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
                'platform/biostar_x/user-info-with-device',
                'platform/biostar_x/trace-user-access-log',
                'platform/biostar_x/export-import-user-info',
              ]
            },
            'platform/biostar_x/search-users',
            'platform/biostar_x/user-template',
            'platform/biostar_x/view-user-by-access',
            'platform/biostar_x/login-with-mfa',
            'platform/biostar_x/migration-visual-face'
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
        }
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
  bioStation3: [
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
          ],
        },
        'device/biostation_3/troubleshooting',
        'device/biostation_3/product-specifications',
        'device/biostation_3/regulatory-information',
        'device/biostation_3/appendices',
      ],
    },
  ],
};

export default sidebars;
