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
        link: {
            type: 'doc',
            id: 'platform/biostar-x/index'
        },
        items: [
            'platform/biostar-x/install'
        ],
    },
  ],
};

export default sidebars;
