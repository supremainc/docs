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
            'platform/biostar_x/express-install',
            'platform/biostar_x/custom-install',
            'platform/biostar_x/login',
            'platform/biostar_x/register-license-key',
            'platform/biostar_x/manage-server',
            'platform/biostar_x/change-port',
            'platform/biostar_x/change-db',
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
