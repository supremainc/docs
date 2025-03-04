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
        label: 'BioStar 2',
        collapsed: false,
        collapsible: false,
        className: 'p-title',
        items: [
            {
              type: 'category',
              label: '개요',
              link: {
                type: 'doc',
                id: 'platform/biostar2/index',
              },
              items: [
                'platform/biostar2/getting-started',
                'platform/biostar2/system-requirements',
                'platform/biostar2/product-compatibility'
              ],
            },
            {
              type: 'category',
              label: '튜토리얼',
              link: {
                type: 'doc',
                id: 'platform/biostar2/tutorial',
              },
              items: [
                'platform/biostar2/express-install',
                'platform/biostar2/custom-install',
                'platform/biostar2/login',
                'platform/biostar2/manage-server',
                'platform/biostar2/change-port',
                'platform/biostar2/change-db',
                'platform/biostar2/register-activation-key',
              ]
            }
        ],
    },
  ],
};

export default sidebars;
