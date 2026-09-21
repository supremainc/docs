/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
export default {
  deviceSdk: [
    {
      type: 'category',
      label: 'BioStar SDK',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      link: {
        type: 'doc',
        id: 'biostar_sdk/start'
      },
      items: [
         'biostar_sdk/quick_guide'
      ]
    }
  ],
};