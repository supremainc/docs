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
          label: '활용 안내',
          link: {
            type: 'doc',
            id: 'platform/biostar_x/how-to-guide',
          },
          items: [
            'platform/biostar_x/user-group-manage',
            {
              type: 'category',
              label: '사용자 관리하기',
              link: {
                type: 'doc',
                id: 'platform/biostar_x/user-manage'
              },
              items: [
                'platform/biostar_x/add-user',
                'platform/biostar_x/edit-user',
                'platform/biostar_x/set-permission',
                'platform/biostar_x/enroll-credential',
                'platform/biostar_x/delete-user',
              ]
            }
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
        'legal/open-source-licenses'
      ]
    }
  ]
};

export default sidebars;
