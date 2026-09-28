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
          type: 'category',
          label: 'API & References',
          link: {
            type: 'doc',
            id: 'biostar_sdk/api_references'
          },
          items: [
            'biostar_sdk/return_code',
            {
              type: 'category',
              label: 'SDK API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/sdk_api'
              },
              items: [
                'biostar_sdk/bs2_version',
                'biostar_sdk/bs2_allocatecontext',
                'biostar_sdk/bs2_releasecontext',
                'biostar_sdk/bs2_initialize',
                'biostar_sdk/bs2_releaseobject',
                'biostar_sdk/bs2_makepincode',
                'biostar_sdk/bs2_makepincodewithkey',
                'biostar_sdk/bs2_setmaxthreadcount',
                'biostar_sdk/bs2_computecrc16ccitt',
                'biostar_sdk/bs2_getcardmodel',
                'biostar_sdk/bs2_setdataencryptkey',
                'biostar_sdk/bs2_removedataencryptkey',
                'biostar_sdk/bs2_setdevicesearchingtimeout',
                'biostar_sdk/bs2_setdebugfilelog',
                'biostar_sdk/bs2_setdebugfilelogex',
                'biostar_sdk/bs2_enabledevicelicense',
                'biostar_sdk/bs2_disabledevicelicense',
                'biostar_sdk/bs2_querydevicelicense',
                'biostar_sdk/bs2_initializeex',
              ]
            },
            {
              type: 'category',
              label: 'Communication API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/communication_api'
              },
              items: [
                'biostar_sdk/bs2_setdeviceeventlistener',
                'biostar_sdk/bs2_searchdevices',
                'biostar_sdk/bs2_searchdevicesex',
                'biostar_sdk/bs2_searchdevicebyip',
                'biostar_sdk/bs2_getdevices',
                'biostar_sdk/bs2_connectdevice',
                'biostar_sdk/bs2_connectdeviceipv6',
                'biostar_sdk/bs2_connectdeviceviaip',
                'biostar_sdk/bs2_disconnectdevice',
                'biostar_sdk/bs2_setkeepalivetimeout',
                'biostar_sdk/bs2_setnotificationlistener',
                'biostar_sdk/bs2_setserverport',
                'biostar_sdk/bs2_setsslserverport',
                'biostar_sdk/bs2_getserverport',
                'biostar_sdk/bs2_getsslserverport',
                'biostar_sdk/bs2_isconnected',
                'biostar_sdk/bs2_isautoconnection',
                'biostar_sdk/bs2_setautoconnection',
                'biostar_sdk/bs2_getenableipv4',
                'biostar_sdk/bs2_setenableipv4',
                'biostar_sdk/bs2_getenableipv6',
                'biostar_sdk/bs2_setenableipv6',
                'biostar_sdk/bs2_setserverportipv6',
                'biostar_sdk/bs2_getserverportipv6',
                'biostar_sdk/bs2_setsslserverportipv6',
                'biostar_sdk/bs2_getsslserverportipv6',
                'biostar_sdk/bs2_setdefaultresponsetimeout',
                'biostar_sdk/bs2_getdefaultresponsetimeout',
                'biostar_sdk/bs2_getsocketretrycount',
                'biostar_sdk/bs2_setsocketretrycount',
                'biostar_sdk/bs2_getsocketsslretrycount',
                'biostar_sdk/bs2_setsocketsslretrycount',
                'biostar_sdk/bs2_setdefaultlongresponsetimeout',
                'biostar_sdk/bs2_getdefaultlongresponsetimeout'
              ]
            },
            {
              type: 'category',
              label: 'Device API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/device_api'
              },
              items: [
                'biostar_sdk/bs2_getdeviceinfo',
                'biostar_sdk/bs2_getdeviceinfoex',
                'biostar_sdk/bs2_getdevicetime',
                'biostar_sdk/bs2_setdevicetime',
                'biostar_sdk/bs2_cleardatabase',
                'biostar_sdk/bs2_factoryreset',
                'biostar_sdk/bs2_rebootdevice',
                'biostar_sdk/bs2_lockdevice',
                'biostar_sdk/bs2_unlockdevice',
                'biostar_sdk/bs2_setkeepalivetimeout',
                'biostar_sdk/bs2_upgradefirmware',
                'biostar_sdk/bs2_updateresource',
                'biostar_sdk/bs2_getspecifieddeviceinfo',
                'biostar_sdk/bs2_getauthoperatorlevelex',
                'biostar_sdk/bs2_getallauthoperatorlevelex',
                'biostar_sdk/bs2_setauthoperatorlevelex',
                'biostar_sdk/bs2_removeauthoperatorlevelex',
                'biostar_sdk/bs2_removeallauthoperatorlevelex',
                'biostar_sdk/bs2_getdevicecapabilities',
                'biostar_sdk/bs2_runaction',
                'biostar_sdk/bs2_getmasteradmin',
                'biostar_sdk/bs2_setmasteradmin'
              ]
            },
            {
              type: 'category',
              label: 'Log Management API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/log_management_api'
              },
              items: [
                'biostar_sdk/bs2_getlog',
                'biostar_sdk/bs2_getfilteredlog',
                'biostar_sdk/bs2_clearlog',
                'biostar_sdk/bs2_startmonitoringlog',
                'biostar_sdk/bs2_startmonitoringlogex',
                'biostar_sdk/bs2_stopmonitoringlog',
                'biostar_sdk/bs2_getlogblob',
                'biostar_sdk/bs2_getfilteredlogsinceeventid',
                'biostar_sdk/bs2_getimagelog',
                'biostar_sdk/bs2_getlogsmallblob',
                'biostar_sdk/bs2_getlogsmallblobex',
                'biostar_sdk/bs2_getdeviceiostatus',
                'biostar_sdk/bs2_getalldeviceiostatus'
              ]
            },
            {
              type: 'category',
              label: 'Access Control API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/access_control_api'
              },
              items: [
                'biostar_sdk/bs2_getaccessgroup',
                'biostar_sdk/bs2_getallaccessgroup',
                'biostar_sdk/bs2_setaccessgroup',
                'biostar_sdk/bs2_removeaccessgroup',
                'biostar_sdk/bs2_removeallaccessgroup',
                'biostar_sdk/bs2_getaccesslevel',
                'biostar_sdk/bs2_getallaccesslevel',
                'biostar_sdk/bs2_setaccesslevel',
                'biostar_sdk/bs2_removeaccesslevel',
                'biostar_sdk/bs2_removeallaccesslevel',
                'biostar_sdk/bs2_getaccessschedule',
                'biostar_sdk/bs2_getallaccessschedule',
                'biostar_sdk/bs2_setaccessschedule',
                'biostar_sdk/bs2_removeaccessschedule',
                'biostar_sdk/bs2_removeallaccessschedule',
                'biostar_sdk/bs2_getholidaygroup',
                'biostar_sdk/bs2_getallholidaygroup',
                'biostar_sdk/bs2_setholidaygroup',
                'biostar_sdk/bs2_removeholidaygroup',
                'biostar_sdk/bs2_removeallholidaygroup'
              ]
            },
            {
              type: 'category',
              label: 'Door Control API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/door_control_api'
              },
              items: [
                'biostar_sdk/bs2_getdoor',
                'biostar_sdk/bs2_getalldoor',
                'biostar_sdk/bs2_getdoorstatus',
                'biostar_sdk/bs2_getalldoorstatus',
                'biostar_sdk/bs2_setdoor',
                'biostar_sdk/bs2_setdooralarm',
                'biostar_sdk/bs2_removedoor',
                'biostar_sdk/bs2_removealldoor',
                'biostar_sdk/bs2_releasedoor',
                'biostar_sdk/bs2_lockdoor',
                'biostar_sdk/bs2_unlockdoor',
                'biostar_sdk/bs2_timedlockdoor',
                'biostar_sdk/bs2_timedunlockdoor'
              ]
            },
            {
              type: 'category',
              label: 'Wiegand API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/wiegand_api'
              },
              items: [
                'biostar_sdk/bs2_searchwieganddevices',
                'biostar_sdk/bs2_getwieganddevices',
                'biostar_sdk/bs2_addwieganddevices',
                'biostar_sdk/bs2_removewieganddevices'
              ]
            },
            {
              type: 'category',
              label: 'Server API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/server_api'
              },
              items: [
                'biostar_sdk/bs2_setservermatchinghandler',
                'biostar_sdk/bs2_verifyuser',
                'biostar_sdk/bs2_identifyuser',
                'biostar_sdk/bs2_verifyuserex',
                'biostar_sdk/bs2_identifyuserex',
                'biostar_sdk/bs2_verifyusersmall',
                'biostar_sdk/bs2_identifyusersmall',
                'biostar_sdk/bs2_verifyusersmallex',
                'biostar_sdk/bs2_identifyusersmallex',
                'biostar_sdk/bs2_verifyuserfaceex',
                'biostar_sdk/bs2_setuserphrasehandler',
                'biostar_sdk/bs2_responseuserphrase',
                'biostar_sdk/bs2_setbarcodescanlistener',
                'biostar_sdk/bs2_setosdpstandarddevicestatuslistener'
              ]
            },
            {
              type: 'category',
              label: 'SSL API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/ssl_api'
              },
              items: [
                'biostar_sdk/bs2_setsslhandler',
                'biostar_sdk/bs2_disablessl'
              ]
            },
            {
              type: 'category',
              label: 'Debugging API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/debugging_api'
              },
              items: [
                'biostar_sdk/bs2_setdebugexcallback'
              ]
            },
            {
              type: 'category',
              label: 'User Management API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/user_management_api'
              },
              items: [
                'biostar_sdk/bs2_getuserlist',
                'biostar_sdk/bs2_removeuser',
                'biostar_sdk/bs2_removealluser',
                'biostar_sdk/bs2_getuserinfos',
                'biostar_sdk/bs2_getuserinfosex',
                'biostar_sdk/bs2_enroluser',
                'biostar_sdk/bs2_enroluserex',
                'biostar_sdk/bs2_enrolluser',
                'biostar_sdk/bs2_enrolluserex',
                'biostar_sdk/bs2_getuserdatas',
                'biostar_sdk/bs2_getuserdatasex',
                'biostar_sdk/bs2_getsupportedusermask',
                'biostar_sdk/bs2_enrollusersmall',
                'biostar_sdk/bs2_enrollusersmallex',
                'biostar_sdk/bs2_getusersmallinfos',
                'biostar_sdk/bs2_getusersmallinfosex',
                'biostar_sdk/bs2_getusersmalldatas',
                'biostar_sdk/bs2_getusersmalldatasex',
                'biostar_sdk/bs2_enrolluserfaceex',
                'biostar_sdk/bs2_getuserinfosfaceex',
                'biostar_sdk/bs2_getuserdatasfaceex',
                'biostar_sdk/bs2_partialupdateuser',
                'biostar_sdk/bs2_partialupdateuserex',
                'biostar_sdk/bs2_partialupdateusersmall',
                'biostar_sdk/bs2_partialupdateusersmallex',
                'biostar_sdk/bs2_partialupdateuserfaceex',
                'biostar_sdk/bs2_getuserstatistic',
                'biostar_sdk/bs2_getuseroverride',
                'biostar_sdk/bs2_getalluseroverride',
                'biostar_sdk/bs2_setuseroverride',
                'biostar_sdk/bs2_removeuseroverride',
                'biostar_sdk/bs2_removealluseroverride'
              ]
            },
            {
              type: 'category',
              label: 'Configuration API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/configuration_api'
              },
              items: [
                'biostar_sdk/bs2_resetconfig',
                'biostar_sdk/bs2_resetconfigexceptnetinfo',
                'biostar_sdk/bs2_getconfig',
                'biostar_sdk/bs2_setconfig',
                'biostar_sdk/bs2_getfactoryconfig',
                'biostar_sdk/bs2_getsystemconfig',
                'biostar_sdk/bs2_setsystemconfig',
                'biostar_sdk/bs2_getauthconfig',
                'biostar_sdk/bs2_setauthconfig',
                'biostar_sdk/bs2_getstatusconfig',
                'biostar_sdk/bs2_setstatusconfig',
                'biostar_sdk/bs2_getdisplayconfig',
                'biostar_sdk/bs2_setdisplayconfig',
                'biostar_sdk/bs2_getipconfig',
                'biostar_sdk/bs2_getipconfigviaudp',
                'biostar_sdk/bs2_setipconfig',
                'biostar_sdk/bs2_setipconfigviaudp',
                'biostar_sdk/bs2_getipconfigext',
                'biostar_sdk/bs2_setipconfigext',
                'biostar_sdk/bs2_gettnaconfig',
                'biostar_sdk/bs2_settnaconfig',
                'biostar_sdk/bs2_getcardconfig',
                'biostar_sdk/bs2_setcardconfig',
                'biostar_sdk/bs2_getfingerprintconfig',
                'biostar_sdk/bs2_setfingerprintconfig',
                'biostar_sdk/bs2_getrs485config',
                'biostar_sdk/bs2_setrs485config',
                'biostar_sdk/bs2_getwiegandconfig',
                'biostar_sdk/bs2_setwiegandconfig',
                'biostar_sdk/bs2_getwieganddeviceconfig',
                'biostar_sdk/bs2_setwieganddeviceconfig',
                'biostar_sdk/bs2_getinputconfig',
                'biostar_sdk/bs2_setinputconfig',
                'biostar_sdk/bs2_getwlanconfig',
                'biostar_sdk/bs2_setwlanconfig',
                'biostar_sdk/bs2_gettriggeractionconfig',
                'biostar_sdk/bs2_settriggeractionconfig',
                'biostar_sdk/bs2_geteventconfig',
                'biostar_sdk/bs2_getwiegandmulticonfig',
                'biostar_sdk/bs2_setwiegandmulticonfig',
                'biostar_sdk/bs2_getcard1xconfig',
                'biostar_sdk/bs2_setcard1xconfig',
                'biostar_sdk/bs2_getsystemextconfig',
                'biostar_sdk/bs2_setsystemextconfig',
                'biostar_sdk/bs2_getvoipconfig',
                'biostar_sdk/bs2_setvoipconfig',
                'biostar_sdk/bs2_getfaceconfig',
                'biostar_sdk/bs2_setfaceconfig',
                'biostar_sdk/bs2_getrs485configex',
                'biostar_sdk/bs2_setrs485configex',
                'biostar_sdk/bs2_getcardconfigex',
                'biostar_sdk/bs2_setcardconfigex',
                'biostar_sdk/bs2_getdstconfig',
                'biostar_sdk/bs2_setdstconfig',
                'biostar_sdk/bs2_getsupportedconfigmask',
                'biostar_sdk/bs2_getipconfigviaudpex',
                'biostar_sdk/bs2_setipconfigviaudpex',
                'biostar_sdk/bs2_getipv6config',
                'biostar_sdk/bs2_setipv6config',
                'biostar_sdk/bs2_getipv6configviaudp',
                'biostar_sdk/bs2_setipv6configviaudp',
                'biostar_sdk/bs2_getipv6configviaudpex',
                'biostar_sdk/bs2_setipv6configviaudpex',
                'biostar_sdk/bs2_getdesfirecardconfigex',
                'biostar_sdk/bs2_setdesfirecardconfigex',
                'biostar_sdk/bs2_getauthconfigext',
                'biostar_sdk/bs2_setauthconfigext',
                'biostar_sdk/bs2_getfaceconfigext',
                'biostar_sdk/bs2_setfaceconfigext',
                'biostar_sdk/bs2_getthermalcameraconfig',
                'biostar_sdk/bs2_setthermalcameraconfig',
                'biostar_sdk/bs2_getbarcodeconfig',
                'biostar_sdk/bs2_setbarcodeconfig',
                'biostar_sdk/bs2_getinputconfigex',
                'biostar_sdk/bs2_setinputconfigex',
                'biostar_sdk/bs2_getrelayactionconfig',
                'biostar_sdk/bs2_setrelayactionconfig',
                'biostar_sdk/bs2_getvoipconfigext',
                'biostar_sdk/bs2_setvoipconfigext',
                'biostar_sdk/bs2_getrtspconfig',
                'biostar_sdk/bs2_setrtspconfig',
                'biostar_sdk/bs2_getlicenseconfig',
                'biostar_sdk/bs2_getosdpstandardconfig',
                'biostar_sdk/bs2_getosdpstandardactionconfig',
                'biostar_sdk/bs2_setosdpstandardactionconfig',
                'biostar_sdk/bs2_getcustomcardconfig',
                'biostar_sdk/bs2_setcustomcardconfig',
                'biostar_sdk/bs2_getmifarecardconfigex',
                'biostar_sdk/bs2_setmifarecardconfigex',
                'biostar_sdk/bs2_getfacilitycodeconfig',
                'biostar_sdk/bs2_setfacilitycodeconfig',
                'biostar_sdk/bs2_getrs485configexdynamic',
                'biostar_sdk/bs2_setrs485configexdynamic'
              ]
            },
            {
              type: 'category',
              label: 'Smartcard API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/smartcard_api'
              },
              items: [
                'biostar_sdk/bs2_scancard',
                'biostar_sdk/bs2_writecard',
                'biostar_sdk/bs2_erasecard',
                'biostar_sdk/bs2_getlockoverride',
                'biostar_sdk/bs2_getalllockoverride',
                'biostar_sdk/bs2_setlockoverride',
                'biostar_sdk/bs2_removelockoverride',
                'biostar_sdk/bs2_removealllockoverride'
              ]
            },
            {
              type: 'category',
              label: 'QR Code API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/qr_code_api'
              },
              items: [
                'biostar_sdk/bs2_writeqrcode',
              ]
            },
            {
              type: 'category',
              label: 'Fingerprint API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/fingerprint_api'
              },
              items: [
                'biostar_sdk/bs2_scanfingerprint',
                'biostar_sdk/bs2_scanfingerprintex',
                'biostar_sdk/bs2_verifyfingerprint',
                'biostar_sdk/bs2_getlastfingerprintimage',
                'biostar_sdk/bs2_getfingertemplatequality'
              ]
            },
            {
              type: 'category',
              label: 'Face API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/face_api'
              },
              items: [
                'biostar_sdk/bs2_scanface',
                'biostar_sdk/bs2_getauthgroup',
                'biostar_sdk/bs2_getallauthgroup',
                'biostar_sdk/bs2_setauthgroup',
                'biostar_sdk/bs2_removeauthgroup',
                'biostar_sdk/bs2_removeallauthgroup',
                'biostar_sdk/bs2_scanfaceex',
                'biostar_sdk/bs2_extracetemplatefaceex',
                'biostar_sdk/bs2_getnormalizedimagefaceex'
              ]
            },
            {
              type: 'category',
              label: 'Blacklist API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/blacklist_api'
              },
              items: [
                'biostar_sdk/bs2_getblacklist',
                'biostar_sdk/bs2_getallblacklist',
                'biostar_sdk/bs2_setblacklist',
                'biostar_sdk/bs2_removeblacklist',
                'biostar_sdk/bs2_removeallblacklist'
              ]
            },
            {
              type: 'category',
              label: 'Slave Control API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/slave_control_api'
              },
              items: [
                'biostar_sdk/bs2_getslavedevice',
                'biostar_sdk/bs2_setslavedevice',
                'biostar_sdk/bs2_getslaveexdevice',
                'biostar_sdk/bs2_setslaveexdevice',
                'biostar_sdk/bs2_searchdevicescorestation',
                'biostar_sdk/bs2_searchdevicescorestationex',
                'biostar_sdk/bs2_getdevicescorestation',
                'biostar_sdk/bs2_addosdpstandarddevice',
                'biostar_sdk/bs2_getosdpstandarddevice',
                'biostar_sdk/bs2_getavailableosdpstandarddevice',
                'biostar_sdk/bs2_updateosdpstandarddevice',
                'biostar_sdk/bs2_removeosdpstandarddevice',
                'biostar_sdk/bs2_getosdpstandarddevicecapability',
                'biostar_sdk/bs2_setosdpstandarddevicesecuritykey',
                'biostar_sdk/bs2_setslavebaudrate'
              ]
            },
            {
              type: 'category',
              label: 'Zone Control API',
              link: {
                type: 'doc',
                id: 'biostar_sdk/zone_control_api'
              },
              items: [
                {
                  type: 'category',
                  label: '안티패스백',
                  className: 'apis',
                  link: {
                    type: 'doc',
                    id: 'biostar_sdk/zone_control_api_apb'
                  },
                  items: [
                    'biostar_sdk/bs2_getantipassbackzone',
                    'biostar_sdk/bs2_getallantipassbackzone',
                    'biostar_sdk/bs2_getantipassbackzonestatus',
                    'biostar_sdk/bs2_getallantipassbackzonestatus',
                    'biostar_sdk/bs2_setantipassbackzone',
                    'biostar_sdk/bs2_setantipassbackzonealarm',
                    'biostar_sdk/bs2_removeantipassbackzone',
                    'biostar_sdk/bs2_removeallantipassbackzone',
                    'biostar_sdk/bs2_clearantipassbackzonestatus',
                    'biostar_sdk/bs2_clearallantipassbackzonestatus',
                    'biostar_sdk/bs2_setcheckglobalapbviolationhandler',
                    'biostar_sdk/bs2_checkglobalapbviolation',
                    'biostar_sdk/bs2_setglobalapbviolationbydooropenhandler',
                    'biostar_sdk/bs2_checkglobalapbviolationbydooropen'
                  ]
                },
                {
                  type: 'category',
                  label: '시간 지정 안티패스백',
                  className: 'apis',
                  link: {
                    type: 'doc',
                    id: 'biostar_sdk/zone_control_api_timed_apb'
                  },
                  items: [
                    'biostar_sdk/bs2_gettimedantipassbackzone',
                    'biostar_sdk/bs2_getalltimedantipassbackzone',
                    'biostar_sdk/bs2_gettimedantipassbackzonestatus',
                    'biostar_sdk/bs2_getalltimedantipassbackzonestatus',
                    'biostar_sdk/bs2_settimedantipassbackzone',
                    'biostar_sdk/bs2_settimedantipassbackzonealarm',
                    'biostar_sdk/bs2_removetimedantipassbackzone',
                    'biostar_sdk/bs2_removealltimedantipassbackzone',
                    'biostar_sdk/bs2_cleartimedantipassbackzonestatus',
                    'biostar_sdk/bs2_clearalltimedantipassbackzonestatus',
                  ]
                },
                {
                  type: 'category',
                  label: '화재 경보',
                  className: 'apis',
                  link: {
                    type: 'doc',
                    id: 'biostar_sdk/zone_control_api_firealarm'
                  },
                  items: [
                    'biostar_sdk/bs2_getfirealarmzone',
                    'biostar_sdk/bs2_getallfirealarmzone',
                    'biostar_sdk/bs2_getfirealarmzonestatus',
                    'biostar_sdk/bs2_getallfirealarmzonestatus',
                    'biostar_sdk/bs2_setfirealarmzone',
                    'biostar_sdk/bs2_setfirealarmzonealarm',
                    'biostar_sdk/bs2_removefirealarmzone',
                    'biostar_sdk/bs2_removeallfirealarmzone'
                  ]
                },
                {
                  type: 'category',
                  label: '스케줄 잠금/개방',
                  className: 'apis',
                  link: {
                    type: 'doc',
                    id: 'biostar_sdk/zone_control_api_schedule'
                  },
                  items: [
                    'biostar_sdk/bs2_getscheduledlockunlockzone',
                    'biostar_sdk/bs2_getallscheduledlockunlockzone',
                    'biostar_sdk/bs2_getscheduledlockunlockzonestatus',
                    'biostar_sdk/bs2_getallscheduledlockunlockzonestatus',
                    'biostar_sdk/bs2_setscheduledlockunlockzone',
                    'biostar_sdk/bs2_setscheduledlockunlockzonealarm',
                    'biostar_sdk/bs2_removescheduledlockunlockzone',
                    'biostar_sdk/bs2_removeallscheduledlockunlockzone'
                  ]
                },
                {
                  type: 'category',
                  label: '경비 경보',
                  className: 'apis',
                  link: {
                    type: 'doc',
                    id: 'biostar_sdk/zone_control_api_intrusion'
                  },
                  items: [
                    'biostar_sdk/bs2_getintrusionalarmzone',
                    'biostar_sdk/bs2_getintrusionalarmzonestatus',
                    'biostar_sdk/bs2_getallintrusionalarmzonestatus',
                    'biostar_sdk/bs2_setintrusionalarmzone',
                    'biostar_sdk/bs2_setintrusionalarmzonealarm',
                    'biostar_sdk/bs2_removeintrusionalarmzone',
                    'biostar_sdk/bs2_removeallintrusionalarmzone',
                    'biostar_sdk/bs2_setintrusionalarmzonearm'
                  ]
                },
                {
                  type: 'category',
                  label: '인터락',
                  className: 'apis',
                  link: {
                    type: 'doc',
                    id: 'biostar_sdk/zone_control_api_interlock'
                  },
                  items: [
                    'biostar_sdk/bs2_getinterlockzone',
                    'biostar_sdk/bs2_getinterlockzonestatus',
                    'biostar_sdk/bs2_getallinterlockzonestatus',
                    'biostar_sdk/bs2_setinterlockzone',
                    'biostar_sdk/bs2_setinterlockzonealarm',
                    'biostar_sdk/bs2_removeinterlockzone',
                    'biostar_sdk/bs2_removeallinterlockzone'
                  ]
                },
                {
                  type: 'category',
                  label: 'Ethernet',
                  className: 'apis',
                  link: {
                    type: 'doc',
                    id: 'biostar_sdk/zone_control_api_ethernet'
                  },
                  items: [
                    'biostar_sdk/bs2_getdevicezone',
                    'biostar_sdk/bs2_getalldevicezone',
                    'biostar_sdk/bs2_setdevicezone',
                    'biostar_sdk/bs2_removedevicezone',
                    'biostar_sdk/bs2_removealldevicezone',
                    'biostar_sdk/bs2_setdevicezonealarm',
                    'biostar_sdk/bs2_cleardevicezoneaccessrecord',
                    'biostar_sdk/bs2_clearalldevicezoneaccessrecord',
                    'biostar_sdk/bs2_getdevicezoneagentrancelimit',
                    'biostar_sdk/bs2_getalldevicezoneagentrancelimit',
                    'biostar_sdk/bs2_setdevicezoneagentrancelimit',
                    'biostar_sdk/bs2_removedevicezoneagentrancelimit',
                    'biostar_sdk/bs2_removealldevicezoneagentrancelimit',
                    'biostar_sdk/bs2_getdevicezonemasterconfig',
                    'biostar_sdk/bs2_setdevicezonemasterconfig',
                    'biostar_sdk/bs2_removedevicezonemasterconfig'
                  ]
                },
                {
                  type: 'category',
                  label: 'Lift 스케줄 잠금/개방 ',
                  className: 'apis',
                  link: {
                    type: 'doc',
                    id: 'biostar_sdk/zone_control_api_liftschedule'
                  },
                  items: [
                    'biostar_sdk/bs2_getliftlockunlockzone',
                    'biostar_sdk/bs2_getallliftlockunlockzone',
                    'biostar_sdk/bs2_getliftlockunlockzonestatus',
                    'biostar_sdk/bs2_getallliftlockunlockzonestatus',
                    'biostar_sdk/bs2_setliftlockunlockzone',
                    'biostar_sdk/bs2_setliftlockunlockzonealarm',
                    'biostar_sdk/bs2_removeliftlockunlockzone',
                    'biostar_sdk/bs2_removeallliftlockunlockzone'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'USB Exported Control API',
              className: 'apis',
              link: {
                type: 'doc',
                id: 'biostar_sdk/use_exported_control_api'
              },
              items: [
                'biostar_sdk/bs2_allocateusbcontext',
                'biostar_sdk/bs2_releaseusbcontext',
                'biostar_sdk/bs2_getuserdatabaseinfofromdir',
                'biostar_sdk/bs2_getuserlistfromdir',
                'biostar_sdk/bs2_getuserinfosfromdir',
                'biostar_sdk/bs2_getuserdatasfromdir',
                'biostar_sdk/bs2_getuserinfosexfromdir',
                'biostar_sdk/bs2_getuserdatasexfromdir',
                'biostar_sdk/bs2_getusersmallinfosfromdir',
                'biostar_sdk/bs2_getusersmalldatasfromdir',
                'biostar_sdk/bs2_getusersmallinfosexfromdir',
                'biostar_sdk/bs2_getusersmalldatasexfromdir',
                'biostar_sdk/bs2_getlogfromdir',
                'biostar_sdk/bs2_getlogblobfromdir',
                'biostar_sdk/bs2_getfilteredlogfromdir',
                'biostar_sdk/bs2_getlogsmallblobfromdir',
                'biostar_sdk/bs2_getlogsmallblobexfromdir',
                'biostar_sdk/bs2_getuserinfosfaceexfromdir',
                'biostar_sdk/bs2_getuserdatasfaceexfromdir',
                'biostar_sdk/bs2_getuserdatabaseinfofromdirwithkey',
                'biostar_sdk/bs2_getuserlistfromdirwithkey',
                'biostar_sdk/bs2_getuserinfosfromdirwithkey',
                'biostar_sdk/bs2_getuserdatasfromdirwithkey',
                'biostar_sdk/bs2_getuserinfosexfromdirwithkey',
                'biostar_sdk/bs2_getuserdatasexfromdirwithkey',
                'biostar_sdk/bs2_getusersmallinfosfromdirwithkey',
                'biostar_sdk/bs2_getusersmalldatasfromdirwithkey',
                'biostar_sdk/bs2_getusersmallinfosexfromdirwithkey',
                'biostar_sdk/bs2_getusersmalldatasexfromdirwithkey',
                'biostar_sdk/bs2_getlogfromdirwithkey',
                'biostar_sdk/bs2_getlogblobfromdirwithkey',
                'biostar_sdk/bs2_getfilteredlogfromdirwithkey',
                'biostar_sdk/bs2_getlogsmallblobfromdirwithkey',
                'biostar_sdk/bs2_getlogsmallblobexfromdirwithkey',
                'biostar_sdk/bs2_getuserinfosfaceexfromdirwithkey',
                'biostar_sdk/bs2_getuserdatasfaceexfromdirwithkey'
              ]
            }
          ]
        },
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