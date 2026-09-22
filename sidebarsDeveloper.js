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
        'biostar_sdk/quick_guide',
        'biostar_sdk/getting_started',
        {
          type: 'html',
          value: '<hr />'
        },
        {
          type: 'category',
          label: '릴리스 노트',
          link: {
            type: 'doc',
            id: 'biostar_sdk/release_note'
          },
          items: [
            'biostar_sdk/release_note/release_note_2913',
            'biostar_sdk/release_note/release_note_2912',
            'biostar_sdk/release_note/release_note_299',
            'biostar_sdk/release_note/release_note_298',
            'biostar_sdk/release_note/release_note_296',
            'biostar_sdk/release_note/release_note_294',
            'biostar_sdk/release_note/release_note_291',
            'biostar_sdk/release_note/release_note_283',
            'biostar_sdk/release_note/release_note_2829',
            'biostar_sdk/release_note/release_note_282',
            'biostar_sdk/release_note/release_note_281',
            'biostar_sdk/release_note/release_note_280',
            'biostar_sdk/release_note/release_note_27212',
            'biostar_sdk/release_note/release_note_272',
            'biostar_sdk/release_note/release_note_271',
            'biostar_sdk/release_note/release_note_270',
            'biostar_sdk/release_note/release_note_264',
            'biostar_sdk/release_note/release_note_26316',
            'biostar_sdk/release_note/release_note_26312',
            'biostar_sdk/release_note/release_note_26311',
            'biostar_sdk/release_note/release_note_26310',
            'biostar_sdk/release_note/release_note_263',
            'biostar_sdk/release_note/release_note_262',
            'biostar_sdk/release_note/release_note_261',
            'biostar_sdk/release_note/release_note_260',
            'biostar_sdk/release_note/release_note_250',
            'biostar_sdk/release_note/release_note_240',
            'biostar_sdk/release_note/release_note_231b',
            'biostar_sdk/release_note/release_note_230',
            'biostar_sdk/release_note/release_note_220',
            'biostar_sdk/release_note/release_note_210',
            'biostar_sdk/release_note/release_note_200',
          ]
        }
      ]
    }
  ],
};