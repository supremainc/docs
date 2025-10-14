"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6852"], {
44159: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ add_sub_db_frontMatter),
  toc: () => (/* binding */ add_sub_db_toc),
  "default": () => (/* binding */ add_sub_db_MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_add_sub_db_mdx_286_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ add_sub_db_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-add-sub-db-mdx-286.json
var site_docs_platform_biostar_x_add_sub_db_mdx_286_namespaceObject = JSON.parse('{"id":"platform/biostar_x/add-sub-db","title":"보조 데이터베이스 추가하기","description":"커뮤니케이션 서버를 추가했을 때 메인 서버의 부하를 줄이기 위해 커뮤니케이션 서버와 연동할 보조 데이터베이스를 추가하고 연결하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/add-sub-db.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/add-sub-db","permalink":"/docs/en/platform/biostar_x/add-sub-db","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/add-sub-db.mdx","tags":[],"version":"current","frontMatter":{"id":"add-sub-db","title":"보조 데이터베이스 추가하기","description":"커뮤니케이션 서버를 추가했을 때 메인 서버의 부하를 줄이기 위해 커뮤니케이션 서버와 연동할 보조 데이터베이스를 추가하고 연결하는 방법을 안내합니다.","keywords":["데이터베이스","추가","연결"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"Change the Database","permalink":"/docs/en/platform/biostar_x/change-db"},"next":{"title":"Launcher","permalink":"/docs/en/platform/biostar_x/ui-launcher"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/common/_bsx-sub-db-create-table-query-mariadb.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Details} = _components;
  if (!Details) _missingMdxReference("Details", true);
  return (0,jsx_runtime.jsxs)(Details, {
    children: [(0,jsx_runtime.jsx)("summary", {
      children: "CREATE TABLE"
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.mt__fttid__ ENGINE=FEDERATED CONNECTION='default/mt__fttid__';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.mt__lksrch ENGINE=FEDERATED CONNECTION='default/mt__lksrch';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.temp_acsgrusr ENGINE=FEDERATED CONNECTION='default/temp_acsgrusr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.temp_doubleauthusr ENGINE=FEDERATED CONNECTION='default/temp_doubleauthusr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.temp_operator ENGINE=FEDERATED CONNECTION='default/temp_operator';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_acsgr ENGINE=FEDERATED CONNECTION='default/t_acsgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_acsgrlvls ENGINE=FEDERATED CONNECTION='default/t_acsgrlvls';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_acsgrsent ENGINE=FEDERATED CONNECTION='default/t_acsgrsent';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_acsgruss ENGINE=FEDERATED CONNECTION='default/t_acsgruss';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_acslvl ENGINE=FEDERATED CONNECTION='default/t_acslvl';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_acslvlitm ENGINE=FEDERATED CONNECTION='default/t_acslvlitm';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_acslvlitmdrs ENGINE=FEDERATED CONNECTION='default/t_acslvlitmdrs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_acslvlitms ENGINE=FEDERATED CONNECTION='default/t_acslvlitms';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_acslvlsent ENGINE=FEDERATED CONNECTION='default/t_acslvlsent';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_adserver_setting ENGINE=FEDERATED CONNECTION='default/t_adserver_setting';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_adt ENGINE=FEDERATED CONNECTION='default/t_adt';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_advusrcrd ENGINE=FEDERATED CONNECTION='default/t_advusrcrd';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_advusrgrp ENGINE=FEDERATED CONNECTION='default/t_advusrgrp';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_ad_column ENGINE=FEDERATED CONNECTION='default/t_ad_column';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_ad_group_filter ENGINE=FEDERATED CONNECTION='default/t_ad_group_filter';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_ad_group_filter_setting ENGINE=FEDERATED CONNECTION='default/t_ad_group_filter_setting';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_ad_usrmapping ENGINE=FEDERATED CONNECTION='default/t_ad_usrmapping';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_almact ENGINE=FEDERATED CONNECTION='default/t_almact';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_almdr ENGINE=FEDERATED CONNECTION='default/t_almdr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_almeml ENGINE=FEDERATED CONNECTION='default/t_almeml';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_almmsg ENGINE=FEDERATED CONNECTION='default/t_almmsg';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_almset ENGINE=FEDERATED CONNECTION='default/t_almset';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_almsetevt ENGINE=FEDERATED CONNECTION='default/t_almsetevt';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_almsetobj ENGINE=FEDERATED CONNECTION='default/t_almsetobj';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_almsmtpset ENGINE=FEDERATED CONNECTION='default/t_almsmtpset';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_almsndset ENGINE=FEDERATED CONNECTION='default/t_almsndset';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_apbbpacgr ENGINE=FEDERATED CONNECTION='default/t_apbbpacgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_area_info ENGINE=FEDERATED CONNECTION='default/t_area_info';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_atmsyndevgrs ENGINE=FEDERATED CONNECTION='default/t_atmsyndevgrs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_atmsyndevs ENGINE=FEDERATED CONNECTION='default/t_atmsyndevs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_audit ENGINE=FEDERATED CONNECTION='default/t_audit';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_authgrp ENGINE=FEDERATED CONNECTION='default/t_authgrp';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_blkl ENGINE=FEDERATED CONNECTION='default/t_blkl';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_bzoup ENGINE=FEDERATED CONNECTION='default/t_bzoup';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_crd ENGINE=FEDERATED CONNECTION='default/t_crd';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_crdidasm ENGINE=FEDERATED CONNECTION='default/t_crdidasm';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_crdisshis ENGINE=FEDERATED CONNECTION='default/t_crdisshis';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_crdlay ENGINE=FEDERATED CONNECTION='default/t_crdlay';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_crdlay_felica ENGINE=FEDERATED CONNECTION='default/t_crdlay_felica';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_crdmoachis ENGINE=FEDERATED CONNECTION='default/t_crdmoachis';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_crdt ENGINE=FEDERATED CONNECTION='default/t_crdt';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_crdtbin ENGINE=FEDERATED CONNECTION='default/t_crdtbin';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_crdtyp ENGINE=FEDERATED CONNECTION='default/t_crdtyp';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_cusfldtyp ENGINE=FEDERATED CONNECTION='default/t_cusfldtyp';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_cusfldtyp_vst ENGINE=FEDERATED CONNECTION='default/t_cusfldtyp_vst';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_dashboard_setting ENGINE=FEDERATED CONNECTION='default/t_dashboard_setting';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_dblmdacsgrs ENGINE=FEDERATED CONNECTION='default/t_dblmdacsgrs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_dblmdflrgrs ENGINE=FEDERATED CONNECTION='default/t_dblmdflrgrs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_dev ENGINE=FEDERATED CONNECTION='default/t_dev';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_dev3rdprnt ENGINE=FEDERATED CONNECTION='default/t_dev3rdprnt';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_devcap ENGINE=FEDERATED CONNECTION='default/t_devcap';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_devcaps ENGINE=FEDERATED CONNECTION='default/t_devcaps';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_devcapsfrdev ENGINE=FEDERATED CONNECTION='default/t_devcapsfrdev';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_devforcecmd ENGINE=FEDERATED CONNECTION='default/t_devforcecmd';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_devgr ENGINE=FEDERATED CONNECTION='default/t_devgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_devinactive ENGINE=FEDERATED CONNECTION='default/t_devinactive';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_devoprmd ENGINE=FEDERATED CONNECTION='default/t_devoprmd';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_devoprt ENGINE=FEDERATED CONNECTION='default/t_devoprt';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_devrs4chns ENGINE=FEDERATED CONNECTION='default/t_devrs4chns';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_devthm ENGINE=FEDERATED CONNECTION='default/t_devthm';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_devtposdp ENGINE=FEDERATED CONNECTION='default/t_devtposdp';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_devtyp ENGINE=FEDERATED CONNECTION='default/t_devtyp';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_devwgd ENGINE=FEDERATED CONNECTION='default/t_devwgd';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_dev_fllr ENGINE=FEDERATED CONNECTION='default/t_dev_fllr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_dr ENGINE=FEDERATED CONNECTION='default/t_dr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_drgr ENGINE=FEDERATED CONNECTION='default/t_drgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_drtrgact ENGINE=FEDERATED CONNECTION='default/t_drtrgact';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_drzn ENGINE=FEDERATED CONNECTION='default/t_drzn';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_dr_flr_map ENGINE=FEDERATED CONNECTION='default/t_dr_flr_map';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_dst ENGINE=FEDERATED CONNECTION='default/t_dst';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_elvt ENGINE=FEDERATED CONNECTION='default/t_elvt';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_elvtdevs ENGINE=FEDERATED CONNECTION='default/t_elvtdevs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_elvtgr ENGINE=FEDERATED CONNECTION='default/t_elvtgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_elvttrgact ENGINE=FEDERATED CONNECTION='default/t_elvttrgact';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_email_content ENGINE=FEDERATED CONNECTION='default/t_email_content';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_emlst ENGINE=FEDERATED CONNECTION='default/t_emlst';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_encmgr ENGINE=FEDERATED CONNECTION='default/t_encmgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_erldev ENGINE=FEDERATED CONNECTION='default/t_erldev';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_etrdevs ENGINE=FEDERATED CONNECTION='default/t_etrdevs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_evtflt ENGINE=FEDERATED CONNECTION='default/t_evtflt';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_evtprio ENGINE=FEDERATED CONNECTION='default/t_evtprio';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_evtprioaltdevs ENGINE=FEDERATED CONNECTION='default/t_evtprioaltdevs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_evtpriosnd ENGINE=FEDERATED CONNECTION='default/t_evtpriosnd';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_evtspc ENGINE=FEDERATED CONNECTION='default/t_evtspc';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_evttyp ENGINE=FEDERATED CONNECTION='default/t_evttyp';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_evttyp_group ENGINE=FEDERATED CONNECTION='default/t_evttyp_group';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_exdevs ENGINE=FEDERATED CONNECTION='default/t_exdevs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_extsys ENGINE=FEDERATED CONNECTION='default/t_extsys';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_failsyncacsgrupdate ENGINE=FEDERATED CONNECTION='default/t_failsyncacsgrupdate';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_failsyncacslvlupdate ENGINE=FEDERATED CONNECTION='default/t_failsyncacslvlupdate';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_failsyncflrlvlupdate ENGINE=FEDERATED CONNECTION='default/t_failsyncflrlvlupdate';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_failsyncusrupdate ENGINE=FEDERATED CONNECTION='default/t_failsyncusrupdate';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_faldrgrs ENGINE=FEDERATED CONNECTION='default/t_faldrgrs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_faldrs ENGINE=FEDERATED CONNECTION='default/t_faldrs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_falelvts ENGINE=FEDERATED CONNECTION='default/t_falelvts';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_fclty_info ENGINE=FEDERATED CONNECTION='default/t_fclty_info';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_fctmpl ENGINE=FEDERATED CONNECTION='default/t_fctmpl';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_flkbpacgr ENGINE=FEDERATED CONNECTION='default/t_flkbpacgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_flkdrgrs ENGINE=FEDERATED CONNECTION='default/t_flkdrgrs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_flkdrs ENGINE=FEDERATED CONNECTION='default/t_flkdrs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_flkelvts ENGINE=FEDERATED CONNECTION='default/t_flkelvts';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_flrgrlvls ENGINE=FEDERATED CONNECTION='default/t_flrgrlvls';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_flrlvl ENGINE=FEDERATED CONNECTION='default/t_flrlvl';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_flrlvlitm ENGINE=FEDERATED CONNECTION='default/t_flrlvlitm';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_flrlvlitmelvts ENGINE=FEDERATED CONNECTION='default/t_flrlvlitmelvts';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_flrlvlitms ENGINE=FEDERATED CONNECTION='default/t_flrlvlitms';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_flrlvlsent ENGINE=FEDERATED CONNECTION='default/t_flrlvlsent';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_flrs ENGINE=FEDERATED CONNECTION='default/t_flrs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_flr_info ENGINE=FEDERATED CONNECTION='default/t_flr_info';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_fngptmpl ENGINE=FEDERATED CONNECTION='default/t_fngptmpl';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_fngptmplver ENGINE=FEDERATED CONNECTION='default/t_fngptmplver';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_fulacgrs ENGINE=FEDERATED CONNECTION='default/t_fulacgrs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_fuldrgrs ENGINE=FEDERATED CONNECTION='default/t_fuldrgrs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_fuldrs ENGINE=FEDERATED CONNECTION='default/t_fuldrs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_fulelvts ENGINE=FEDERATED CONNECTION='default/t_fulelvts';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_gis_door_info ENGINE=FEDERATED CONNECTION='default/t_gis_door_info';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_gis_vcm_info ENGINE=FEDERATED CONNECTION='default/t_gis_vcm_info';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_grm ENGINE=FEDERATED CONNECTION='default/t_grm';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_grmel ENGINE=FEDERATED CONNECTION='default/t_grmel';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_grmeltyp ENGINE=FEDERATED CONNECTION='default/t_grmeltyp';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_grmelvid ENGINE=FEDERATED CONNECTION='default/t_grmelvid';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_grmgr ENGINE=FEDERATED CONNECTION='default/t_grmgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_hol ENGINE=FEDERATED CONNECTION='default/t_hol';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_holgr ENGINE=FEDERATED CONNECTION='default/t_holgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_holsch ENGINE=FEDERATED CONNECTION='default/t_holsch';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_holschtmprds ENGINE=FEDERATED CONNECTION='default/t_holschtmprds';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_imglgjb ENGINE=FEDERATED CONNECTION='default/t_imglgjb';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_inpcfg ENGINE=FEDERATED CONNECTION='default/t_inpcfg';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_inpcfgex ENGINE=FEDERATED CONNECTION='default/t_inpcfgex';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_ledoup ENGINE=FEDERATED CONNECTION='default/t_ledoup';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_lgserverevt ENGINE=FEDERATED CONNECTION='default/t_lgserverevt';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_lgtbidx ENGINE=FEDERATED CONNECTION='default/t_lgtbidx';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_lgupdhis ENGINE=FEDERATED CONNECTION='default/t_lgupdhis';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_licenses ENGINE=FEDERATED CONNECTION='default/t_licenses';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_lstlog ENGINE=FEDERATED CONNECTION='default/t_lstlog';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_lstsynsta ENGINE=FEDERATED CONNECTION='default/t_lstsynsta';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_lstusrauth ENGINE=FEDERATED CONNECTION='default/t_lstusrauth';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_lulacgrs ENGINE=FEDERATED CONNECTION='default/t_lulacgrs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_mblcrd ENGINE=FEDERATED CONNECTION='default/t_mblcrd';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_mobile_credential ENGINE=FEDERATED CONNECTION='default/t_mobile_credential';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_mobile_picture_hash ENGINE=FEDERATED CONNECTION='default/t_mobile_picture_hash';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_mxdt ENGINE=FEDERATED CONNECTION='default/t_mxdt';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_nested_dev ENGINE=FEDERATED CONNECTION='default/t_nested_dev';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_nested_devgr ENGINE=FEDERATED CONNECTION='default/t_nested_devgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_nested_drgr ENGINE=FEDERATED CONNECTION='default/t_nested_drgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_nested_elvtgr ENGINE=FEDERATED CONNECTION='default/t_nested_elvtgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_nested_grmgr ENGINE=FEDERATED CONNECTION='default/t_nested_grmgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_nested_usrgr ENGINE=FEDERATED CONNECTION='default/t_nested_usrgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_ntc ENGINE=FEDERATED CONNECTION='default/t_ntc';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_occpbpacgr ENGINE=FEDERATED CONNECTION='default/t_occpbpacgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_oupsig ENGINE=FEDERATED CONNECTION='default/t_oupsig';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_perm ENGINE=FEDERATED CONNECTION='default/t_perm';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_polygon_info ENGINE=FEDERATED CONNECTION='default/t_polygon_info';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_prf ENGINE=FEDERATED CONNECTION='default/t_prf';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_qcact ENGINE=FEDERATED CONNECTION='default/t_qcact';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_qcactalm ENGINE=FEDERATED CONNECTION='default/t_qcactalm';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_qcactperm ENGINE=FEDERATED CONNECTION='default/t_qcactperm';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_reporttempid ENGINE=FEDERATED CONNECTION='default/t_reporttempid';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_reporttempid_header ENGINE=FEDERATED CONNECTION='default/t_reporttempid_header';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_report_export_setting ENGINE=FEDERATED CONNECTION='default/t_report_export_setting';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_report_print_setting ENGINE=FEDERATED CONNECTION='default/t_report_print_setting';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_report_schedules ENGINE=FEDERATED CONNECTION='default/t_report_schedules';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_report_setting ENGINE=FEDERATED CONNECTION='default/t_report_setting';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_report_template ENGINE=FEDERATED CONNECTION='default/t_report_template';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_report_template_group_filter ENGINE=FEDERATED CONNECTION='default/t_report_template_group_filter';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_report_template_user_filter ENGINE=FEDERATED CONNECTION='default/t_report_template_user_filter';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_rmjb ENGINE=FEDERATED CONNECTION='default/t_rmjb';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_rmjbev ENGINE=FEDERATED CONNECTION='default/t_rmjbev';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_rmjbzn ENGINE=FEDERATED CONNECTION='default/t_rmjbzn';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_sch ENGINE=FEDERATED CONNECTION='default/t_sch';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_schdl ENGINE=FEDERATED CONNECTION='default/t_schdl';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_schdltmprds ENGINE=FEDERATED CONNECTION='default/t_schdltmprds';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_shf ENGINE=FEDERATED CONNECTION='default/t_shf';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_shfgr ENGINE=FEDERATED CONNECTION='default/t_shfgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_shfgrshfs ENGINE=FEDERATED CONNECTION='default/t_shfgrshfs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_shfgruss ENGINE=FEDERATED CONNECTION='default/t_shfgruss';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_shfrul ENGINE=FEDERATED CONNECTION='default/t_shfrul';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_shftmplshfs ENGINE=FEDERATED CONNECTION='default/t_shftmplshfs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_snd ENGINE=FEDERATED CONNECTION='default/t_snd';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_srvsta ENGINE=FEDERATED CONNECTION='default/t_srvsta';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_synctapb ENGINE=FEDERATED CONNECTION='default/t_synctapb';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_syscfg ENGINE=FEDERATED CONNECTION='default/t_syscfg';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_takey ENGINE=FEDERATED CONNECTION='default/t_takey';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_tmapbbpacgr ENGINE=FEDERATED CONNECTION='default/t_tmapbbpacgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_tmprd ENGINE=FEDERATED CONNECTION='default/t_tmprd';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_trgact ENGINE=FEDERATED CONNECTION='default/t_trgact';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_usersent ENGINE=FEDERATED CONNECTION='default/t_usersent';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_usr ENGINE=FEDERATED CONNECTION='default/t_usr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_usracsgrtmpl ENGINE=FEDERATED CONNECTION='default/t_usracsgrtmpl';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_usrcrd ENGINE=FEDERATED CONNECTION='default/t_usrcrd';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_usrcusfld ENGINE=FEDERATED CONNECTION='default/t_usrcusfld';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_usrcusfldtmpl ENGINE=FEDERATED CONNECTION='default/t_usrcusfldtmpl';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_usrgr ENGINE=FEDERATED CONNECTION='default/t_usrgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_usrgr_order ENGINE=FEDERATED CONNECTION='default/t_usrgr_order';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_usrmsksyn ENGINE=FEDERATED CONNECTION='default/t_usrmsksyn';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_usroprmd ENGINE=FEDERATED CONNECTION='default/t_usroprmd';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_usrphoto ENGINE=FEDERATED CONNECTION='default/t_usrphoto';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_usrtmpl ENGINE=FEDERATED CONNECTION='default/t_usrtmpl';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_usr_phrase ENGINE=FEDERATED CONNECTION='default/t_usr_phrase';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_usr_rep ENGINE=FEDERATED CONNECTION='default/t_usr_rep';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_vcm_flr_map ENGINE=FEDERATED CONNECTION='default/t_vcm_flr_map';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_vipphbks ENGINE=FEDERATED CONNECTION='default/t_vipphbks';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_visit ENGINE=FEDERATED CONNECTION='default/t_visit';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_visitacsgrmap ENGINE=FEDERATED CONNECTION='default/t_visitacsgrmap';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_visitcusfld ENGINE=FEDERATED CONNECTION='default/t_visitcusfld';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_visitfngptmpl ENGINE=FEDERATED CONNECTION='default/t_visitfngptmpl';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_visitfngptmplver ENGINE=FEDERATED CONNECTION='default/t_visitfngptmplver';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_visitorterminal ENGINE=FEDERATED CONNECTION='default/t_visitorterminal';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_visitorterminalacgroupmap ENGINE=FEDERATED CONNECTION='default/t_visitorterminalacgroupmap';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_visitorterminalregion ENGINE=FEDERATED CONNECTION='default/t_visitorterminalregion';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_visitorterminalregionmap ENGINE=FEDERATED CONNECTION='default/t_visitorterminalregionmap';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_visitorterms ENGINE=FEDERATED CONNECTION='default/t_visitorterms';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_wgdbz ENGINE=FEDERATED CONNECTION='default/t_wgdbz';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_wgdfmt ENGINE=FEDERATED CONNECTION='default/t_wgdfmt';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_wgdled ENGINE=FEDERATED CONNECTION='default/t_wgdled';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_wgdtmpr ENGINE=FEDERATED CONNECTION='default/t_wgdtmpr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_widget ENGINE=FEDERATED CONNECTION='default/t_widget';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_zn ENGINE=FEDERATED CONNECTION='default/t_zn';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znacsgr ENGINE=FEDERATED CONNECTION='default/t_znacsgr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znapb ENGINE=FEDERATED CONNECTION='default/t_znapb';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znapbusrio ENGINE=FEDERATED CONNECTION='default/t_znapbusrio';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_zncrd ENGINE=FEDERATED CONNECTION='default/t_zncrd';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_zndr ENGINE=FEDERATED CONNECTION='default/t_zndr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znelvt ENGINE=FEDERATED CONNECTION='default/t_znelvt';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znfal ENGINE=FEDERATED CONNECTION='default/t_znfal';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znfalinpsns ENGINE=FEDERATED CONNECTION='default/t_znfalinpsns';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znflk ENGINE=FEDERATED CONNECTION='default/t_znflk';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znflrs ENGINE=FEDERATED CONNECTION='default/t_znflrs';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znful ENGINE=FEDERATED CONNECTION='default/t_znful';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_zninp ENGINE=FEDERATED CONNECTION='default/t_zninp';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znital ENGINE=FEDERATED CONNECTION='default/t_znital';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znlul ENGINE=FEDERATED CONNECTION='default/t_znlul';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znmst ENGINE=FEDERATED CONNECTION='default/t_znmst';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znoccp ENGINE=FEDERATED CONNECTION='default/t_znoccp';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znoccp_lstusrevt ENGINE=FEDERATED CONNECTION='default/t_znoccp_lstusrevt';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znrc ENGINE=FEDERATED CONNECTION='default/t_znrc';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_zntapb ENGINE=FEDERATED CONNECTION='default/t_zntapb';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_zntmapb ENGINE=FEDERATED CONNECTION='default/t_zntmapb';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_zntrck ENGINE=FEDERATED CONNECTION='default/t_zntrck';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_zntrgact ENGINE=FEDERATED CONNECTION='default/t_zntrgact';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.t_znusr ENGINE=FEDERATED CONNECTION='default/t_znusr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.v_devices ENGINE=FEDERATED CONNECTION='default/v_devices';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.v_dr ENGINE=FEDERATED CONNECTION='default/v_dr';\nCREATE TABLE IF NOT EXISTS biostar_x_ac_be_136.v_elvt ENGINE=FEDERATED CONNECTION='default/v_elvt';\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/common/_bsx-sub-db-create-table-query-mssql.mdx


const _bsx_sub_db_create_table_query_mssql_frontMatter = (/* unused pure expression or super */ null && ({}));
const _bsx_sub_db_create_table_query_mssql_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _bsx_sub_db_create_table_query_mssql_toc = [];
function _bsx_sub_db_create_table_query_mssql_createMdxContent(props) {
  const _components = {
    code: "code",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Details} = _components;
  if (!Details) _bsx_sub_db_create_table_query_mssql_missingMdxReference("Details", true);
  return (0,jsx_runtime.jsxs)(Details, {
    children: [(0,jsx_runtime.jsx)("summary", {
      children: "CREATE TABLE"
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "IF OBJECT_ID(N'[dbo].[T_ACSGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ACSGR];CREATE SYNONYM [dbo].[T_ACSGR] FOR [default].[main_ac_x_215].[dbo].[T_ACSGR];\nIF OBJECT_ID(N'[dbo].[T_ACSGRLVLS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ACSGRLVLS];CREATE SYNONYM [dbo].[T_ACSGRLVLS] FOR [default].[main_ac_x_215].[dbo].[T_ACSGRLVLS];\nIF OBJECT_ID(N'[dbo].[T_ACSGRSENT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ACSGRSENT];CREATE SYNONYM [dbo].[T_ACSGRSENT] FOR [default].[main_ac_x_215].[dbo].[T_ACSGRSENT];\nIF OBJECT_ID(N'[dbo].[T_ACSGRUSS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ACSGRUSS];CREATE SYNONYM [dbo].[T_ACSGRUSS] FOR [default].[main_ac_x_215].[dbo].[T_ACSGRUSS];\nIF OBJECT_ID(N'[dbo].[T_ACSLVL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ACSLVL];CREATE SYNONYM [dbo].[T_ACSLVL] FOR [default].[main_ac_x_215].[dbo].[T_ACSLVL];\nIF OBJECT_ID(N'[dbo].[T_ACSLVLITM]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ACSLVLITM];CREATE SYNONYM [dbo].[T_ACSLVLITM] FOR [default].[main_ac_x_215].[dbo].[T_ACSLVLITM];\nIF OBJECT_ID(N'[dbo].[T_ACSLVLITMDRS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ACSLVLITMDRS];CREATE SYNONYM [dbo].[T_ACSLVLITMDRS] FOR [default].[main_ac_x_215].[dbo].[T_ACSLVLITMDRS];\nIF OBJECT_ID(N'[dbo].[T_ACSLVLITMS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ACSLVLITMS];CREATE SYNONYM [dbo].[T_ACSLVLITMS] FOR [default].[main_ac_x_215].[dbo].[T_ACSLVLITMS];\nIF OBJECT_ID(N'[dbo].[T_ACSLVLSENT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ACSLVLSENT];CREATE SYNONYM [dbo].[T_ACSLVLSENT] FOR [default].[main_ac_x_215].[dbo].[T_ACSLVLSENT];\nIF OBJECT_ID(N'[dbo].[T_AD_COLUMN]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_AD_COLUMN];CREATE SYNONYM [dbo].[T_AD_COLUMN] FOR [default].[main_ac_x_215].[dbo].[T_AD_COLUMN];\nIF OBJECT_ID(N'[dbo].[T_AD_GROUP_FILTER]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_AD_GROUP_FILTER];CREATE SYNONYM [dbo].[T_AD_GROUP_FILTER] FOR [default].[main_ac_x_215].[dbo].[T_AD_GROUP_FILTER];\nIF OBJECT_ID(N'[dbo].[T_AD_GROUP_FILTER_SETTING]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_AD_GROUP_FILTER_SETTING];CREATE SYNONYM [dbo].[T_AD_GROUP_FILTER_SETTING] FOR [default].[main_ac_x_215].[dbo].[T_AD_GROUP_FILTER_SETTING];\nIF OBJECT_ID(N'[dbo].[T_AD_USRMAPPING]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_AD_USRMAPPING];CREATE SYNONYM [dbo].[T_AD_USRMAPPING] FOR [default].[main_ac_x_215].[dbo].[T_AD_USRMAPPING];\nIF OBJECT_ID(N'[dbo].[T_ADSERVER_SETTING]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ADSERVER_SETTING];CREATE SYNONYM [dbo].[T_ADSERVER_SETTING] FOR [default].[main_ac_x_215].[dbo].[T_ADSERVER_SETTING];\nIF OBJECT_ID(N'[dbo].[T_ADT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ADT];CREATE SYNONYM [dbo].[T_ADT] FOR [default].[main_ac_x_215].[dbo].[T_ADT];\nIF OBJECT_ID(N'[dbo].[T_ADVUSRCRD]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ADVUSRCRD];CREATE SYNONYM [dbo].[T_ADVUSRCRD] FOR [default].[main_ac_x_215].[dbo].[T_ADVUSRCRD];\nIF OBJECT_ID(N'[dbo].[T_ADVUSRGRP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ADVUSRGRP];CREATE SYNONYM [dbo].[T_ADVUSRGRP] FOR [default].[main_ac_x_215].[dbo].[T_ADVUSRGRP];\nIF OBJECT_ID(N'[dbo].[T_ALMACT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ALMACT];CREATE SYNONYM [dbo].[T_ALMACT] FOR [default].[main_ac_x_215].[dbo].[T_ALMACT];\nIF OBJECT_ID(N'[dbo].[T_ALMDR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ALMDR];CREATE SYNONYM [dbo].[T_ALMDR] FOR [default].[main_ac_x_215].[dbo].[T_ALMDR];\nIF OBJECT_ID(N'[dbo].[T_ALMEML]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ALMEML];CREATE SYNONYM [dbo].[T_ALMEML] FOR [default].[main_ac_x_215].[dbo].[T_ALMEML];\nIF OBJECT_ID(N'[dbo].[T_ALMMSG]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ALMMSG];CREATE SYNONYM [dbo].[T_ALMMSG] FOR [default].[main_ac_x_215].[dbo].[T_ALMMSG];\nIF OBJECT_ID(N'[dbo].[T_ALMSET]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ALMSET];CREATE SYNONYM [dbo].[T_ALMSET] FOR [default].[main_ac_x_215].[dbo].[T_ALMSET];\nIF OBJECT_ID(N'[dbo].[T_ALMSETEVT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ALMSETEVT];CREATE SYNONYM [dbo].[T_ALMSETEVT] FOR [default].[main_ac_x_215].[dbo].[T_ALMSETEVT];\nIF OBJECT_ID(N'[dbo].[T_ALMSETOBJ]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ALMSETOBJ];CREATE SYNONYM [dbo].[T_ALMSETOBJ] FOR [default].[main_ac_x_215].[dbo].[T_ALMSETOBJ];\nIF OBJECT_ID(N'[dbo].[T_ALMSMTPSET]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ALMSMTPSET];CREATE SYNONYM [dbo].[T_ALMSMTPSET] FOR [default].[main_ac_x_215].[dbo].[T_ALMSMTPSET];\nIF OBJECT_ID(N'[dbo].[T_ALMSNDSET]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ALMSNDSET];CREATE SYNONYM [dbo].[T_ALMSNDSET] FOR [default].[main_ac_x_215].[dbo].[T_ALMSNDSET];\nIF OBJECT_ID(N'[dbo].[T_APBBPACGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_APBBPACGR];CREATE SYNONYM [dbo].[T_APBBPACGR] FOR [default].[main_ac_x_215].[dbo].[T_APBBPACGR];\nIF OBJECT_ID(N'[dbo].[T_AREA_INFO]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_AREA_INFO];CREATE SYNONYM [dbo].[T_AREA_INFO] FOR [default].[main_ac_x_215].[dbo].[T_AREA_INFO];\nIF OBJECT_ID(N'[dbo].[T_ATMSYNDEVGRS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ATMSYNDEVGRS];CREATE SYNONYM [dbo].[T_ATMSYNDEVGRS] FOR [default].[main_ac_x_215].[dbo].[T_ATMSYNDEVGRS];\nIF OBJECT_ID(N'[dbo].[T_ATMSYNDEVS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ATMSYNDEVS];CREATE SYNONYM [dbo].[T_ATMSYNDEVS] FOR [default].[main_ac_x_215].[dbo].[T_ATMSYNDEVS];\nIF OBJECT_ID(N'[dbo].[T_AUDIT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_AUDIT];CREATE SYNONYM [dbo].[T_AUDIT] FOR [default].[main_ac_x_215].[dbo].[T_AUDIT];\nIF OBJECT_ID(N'[dbo].[T_AUTHGRP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_AUTHGRP];CREATE SYNONYM [dbo].[T_AUTHGRP] FOR [default].[main_ac_x_215].[dbo].[T_AUTHGRP];\nIF OBJECT_ID(N'[dbo].[T_BLKL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_BLKL];CREATE SYNONYM [dbo].[T_BLKL] FOR [default].[main_ac_x_215].[dbo].[T_BLKL];\nIF OBJECT_ID(N'[dbo].[T_BZOUP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_BZOUP];CREATE SYNONYM [dbo].[T_BZOUP] FOR [default].[main_ac_x_215].[dbo].[T_BZOUP];\nIF OBJECT_ID(N'[dbo].[T_CRD]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_CRD];CREATE SYNONYM [dbo].[T_CRD] FOR [default].[main_ac_x_215].[dbo].[T_CRD];\nIF OBJECT_ID(N'[dbo].[T_CRDIDASM]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_CRDIDASM];CREATE SYNONYM [dbo].[T_CRDIDASM] FOR [default].[main_ac_x_215].[dbo].[T_CRDIDASM];\nIF OBJECT_ID(N'[dbo].[T_CRDISSHIS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_CRDISSHIS];CREATE SYNONYM [dbo].[T_CRDISSHIS] FOR [default].[main_ac_x_215].[dbo].[T_CRDISSHIS];\nIF OBJECT_ID(N'[dbo].[T_CRDLAY]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_CRDLAY];CREATE SYNONYM [dbo].[T_CRDLAY] FOR [default].[main_ac_x_215].[dbo].[T_CRDLAY];\nIF OBJECT_ID(N'[dbo].[T_CRDLAY_FELICA]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_CRDLAY_FELICA];CREATE SYNONYM [dbo].[T_CRDLAY_FELICA] FOR [default].[main_ac_x_215].[dbo].[T_CRDLAY_FELICA];\nIF OBJECT_ID(N'[dbo].[T_CRDMOACHIS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_CRDMOACHIS];CREATE SYNONYM [dbo].[T_CRDMOACHIS] FOR [default].[main_ac_x_215].[dbo].[T_CRDMOACHIS];\nIF OBJECT_ID(N'[dbo].[T_CRDT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_CRDT];CREATE SYNONYM [dbo].[T_CRDT] FOR [default].[main_ac_x_215].[dbo].[T_CRDT];\nIF OBJECT_ID(N'[dbo].[T_CRDTBIN]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_CRDTBIN];CREATE SYNONYM [dbo].[T_CRDTBIN] FOR [default].[main_ac_x_215].[dbo].[T_CRDTBIN];\nIF OBJECT_ID(N'[dbo].[T_CRDTYP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_CRDTYP];CREATE SYNONYM [dbo].[T_CRDTYP] FOR [default].[main_ac_x_215].[dbo].[T_CRDTYP];\nIF OBJECT_ID(N'[dbo].[T_CUSFLDTYP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_CUSFLDTYP];CREATE SYNONYM [dbo].[T_CUSFLDTYP] FOR [default].[main_ac_x_215].[dbo].[T_CUSFLDTYP];\nIF OBJECT_ID(N'[dbo].[T_CUSFLDTYP_VST]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_CUSFLDTYP_VST];CREATE SYNONYM [dbo].[T_CUSFLDTYP_VST] FOR [default].[main_ac_x_215].[dbo].[T_CUSFLDTYP_VST];\nIF OBJECT_ID(N'[dbo].[T_DASHBOARD_SETTING]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DASHBOARD_SETTING];CREATE SYNONYM [dbo].[T_DASHBOARD_SETTING] FOR [default].[main_ac_x_215].[dbo].[T_DASHBOARD_SETTING];\nIF OBJECT_ID(N'[dbo].[T_DBLMDACSGRS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DBLMDACSGRS];CREATE SYNONYM [dbo].[T_DBLMDACSGRS] FOR [default].[main_ac_x_215].[dbo].[T_DBLMDACSGRS];\nIF OBJECT_ID(N'[dbo].[T_DBLMDFLRGRS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DBLMDFLRGRS];CREATE SYNONYM [dbo].[T_DBLMDFLRGRS] FOR [default].[main_ac_x_215].[dbo].[T_DBLMDFLRGRS];\nIF OBJECT_ID(N'[dbo].[T_DEV]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEV];CREATE SYNONYM [dbo].[T_DEV] FOR [default].[main_ac_x_215].[dbo].[T_DEV];\nIF OBJECT_ID(N'[dbo].[T_DEV_FLLR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEV_FLLR];CREATE SYNONYM [dbo].[T_DEV_FLLR] FOR [default].[main_ac_x_215].[dbo].[T_DEV_FLLR];\nIF OBJECT_ID(N'[dbo].[T_DEV3RDPRNT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEV3RDPRNT];CREATE SYNONYM [dbo].[T_DEV3RDPRNT] FOR [default].[main_ac_x_215].[dbo].[T_DEV3RDPRNT];\nIF OBJECT_ID(N'[dbo].[T_DEVCAP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEVCAP];CREATE SYNONYM [dbo].[T_DEVCAP] FOR [default].[main_ac_x_215].[dbo].[T_DEVCAP];\nIF OBJECT_ID(N'[dbo].[T_DEVCAPS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEVCAPS];CREATE SYNONYM [dbo].[T_DEVCAPS] FOR [default].[main_ac_x_215].[dbo].[T_DEVCAPS];\nIF OBJECT_ID(N'[dbo].[T_DEVCAPSFRDEV]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEVCAPSFRDEV];CREATE SYNONYM [dbo].[T_DEVCAPSFRDEV] FOR [default].[main_ac_x_215].[dbo].[T_DEVCAPSFRDEV];\nIF OBJECT_ID(N'[dbo].[T_DEVFORCECMD]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEVFORCECMD];CREATE SYNONYM [dbo].[T_DEVFORCECMD] FOR [default].[main_ac_x_215].[dbo].[T_DEVFORCECMD];\nIF OBJECT_ID(N'[dbo].[T_DEVGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEVGR];CREATE SYNONYM [dbo].[T_DEVGR] FOR [default].[main_ac_x_215].[dbo].[T_DEVGR];\nIF OBJECT_ID(N'[dbo].[T_DEVINACTIVE]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEVINACTIVE];CREATE SYNONYM [dbo].[T_DEVINACTIVE] FOR [default].[main_ac_x_215].[dbo].[T_DEVINACTIVE];\nIF OBJECT_ID(N'[dbo].[T_DEVOPRMD]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEVOPRMD];CREATE SYNONYM [dbo].[T_DEVOPRMD] FOR [default].[main_ac_x_215].[dbo].[T_DEVOPRMD];\nIF OBJECT_ID(N'[dbo].[T_DEVOPRT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEVOPRT];CREATE SYNONYM [dbo].[T_DEVOPRT] FOR [default].[main_ac_x_215].[dbo].[T_DEVOPRT];\nIF OBJECT_ID(N'[dbo].[T_DEVRS4CHNS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEVRS4CHNS];CREATE SYNONYM [dbo].[T_DEVRS4CHNS] FOR [default].[main_ac_x_215].[dbo].[T_DEVRS4CHNS];\nIF OBJECT_ID(N'[dbo].[T_DEVTHM]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEVTHM];CREATE SYNONYM [dbo].[T_DEVTHM] FOR [default].[main_ac_x_215].[dbo].[T_DEVTHM];\nIF OBJECT_ID(N'[dbo].[T_DEVTPOSDP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEVTPOSDP];CREATE SYNONYM [dbo].[T_DEVTPOSDP] FOR [default].[main_ac_x_215].[dbo].[T_DEVTPOSDP];\nIF OBJECT_ID(N'[dbo].[T_DEVTYP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEVTYP];CREATE SYNONYM [dbo].[T_DEVTYP] FOR [default].[main_ac_x_215].[dbo].[T_DEVTYP];\nIF OBJECT_ID(N'[dbo].[T_DEVWGD]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DEVWGD];CREATE SYNONYM [dbo].[T_DEVWGD] FOR [default].[main_ac_x_215].[dbo].[T_DEVWGD];\nIF OBJECT_ID(N'[dbo].[T_DR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DR];CREATE SYNONYM [dbo].[T_DR] FOR [default].[main_ac_x_215].[dbo].[T_DR];\nIF OBJECT_ID(N'[dbo].[T_DR_FLR_MAP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DR_FLR_MAP];CREATE SYNONYM [dbo].[T_DR_FLR_MAP] FOR [default].[main_ac_x_215].[dbo].[T_DR_FLR_MAP];\nIF OBJECT_ID(N'[dbo].[T_DRGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DRGR];CREATE SYNONYM [dbo].[T_DRGR] FOR [default].[main_ac_x_215].[dbo].[T_DRGR];\nIF OBJECT_ID(N'[dbo].[T_DRTRGACT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DRTRGACT];CREATE SYNONYM [dbo].[T_DRTRGACT] FOR [default].[main_ac_x_215].[dbo].[T_DRTRGACT];\nIF OBJECT_ID(N'[dbo].[T_DRZN]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DRZN];CREATE SYNONYM [dbo].[T_DRZN] FOR [default].[main_ac_x_215].[dbo].[T_DRZN];\nIF OBJECT_ID(N'[dbo].[T_DST]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_DST];CREATE SYNONYM [dbo].[T_DST] FOR [default].[main_ac_x_215].[dbo].[T_DST];\nIF OBJECT_ID(N'[dbo].[T_ELVT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ELVT];CREATE SYNONYM [dbo].[T_ELVT] FOR [default].[main_ac_x_215].[dbo].[T_ELVT];\nIF OBJECT_ID(N'[dbo].[T_ELVTDEVS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ELVTDEVS];CREATE SYNONYM [dbo].[T_ELVTDEVS] FOR [default].[main_ac_x_215].[dbo].[T_ELVTDEVS];\nIF OBJECT_ID(N'[dbo].[T_ELVTGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ELVTGR];CREATE SYNONYM [dbo].[T_ELVTGR] FOR [default].[main_ac_x_215].[dbo].[T_ELVTGR];\nIF OBJECT_ID(N'[dbo].[T_ELVTTRGACT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ELVTTRGACT];CREATE SYNONYM [dbo].[T_ELVTTRGACT] FOR [default].[main_ac_x_215].[dbo].[T_ELVTTRGACT];\nIF OBJECT_ID(N'[dbo].[T_EMAIL_CONTENT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_EMAIL_CONTENT];CREATE SYNONYM [dbo].[T_EMAIL_CONTENT] FOR [default].[main_ac_x_215].[dbo].[T_EMAIL_CONTENT];\nIF OBJECT_ID(N'[dbo].[T_EMLST]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_EMLST];CREATE SYNONYM [dbo].[T_EMLST] FOR [default].[main_ac_x_215].[dbo].[T_EMLST];\nIF OBJECT_ID(N'[dbo].[T_ENCMGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ENCMGR];CREATE SYNONYM [dbo].[T_ENCMGR] FOR [default].[main_ac_x_215].[dbo].[T_ENCMGR];\nIF OBJECT_ID(N'[dbo].[T_ERLDEV]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ERLDEV];CREATE SYNONYM [dbo].[T_ERLDEV] FOR [default].[main_ac_x_215].[dbo].[T_ERLDEV];\nIF OBJECT_ID(N'[dbo].[T_ETRDEVS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ETRDEVS];CREATE SYNONYM [dbo].[T_ETRDEVS] FOR [default].[main_ac_x_215].[dbo].[T_ETRDEVS];\nIF OBJECT_ID(N'[dbo].[T_EVTFLT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_EVTFLT];CREATE SYNONYM [dbo].[T_EVTFLT] FOR [default].[main_ac_x_215].[dbo].[T_EVTFLT];\nIF OBJECT_ID(N'[dbo].[T_EVTPRIO]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_EVTPRIO];CREATE SYNONYM [dbo].[T_EVTPRIO] FOR [default].[main_ac_x_215].[dbo].[T_EVTPRIO];\nIF OBJECT_ID(N'[dbo].[T_EVTPRIOALTDEVS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_EVTPRIOALTDEVS];CREATE SYNONYM [dbo].[T_EVTPRIOALTDEVS] FOR [default].[main_ac_x_215].[dbo].[T_EVTPRIOALTDEVS];\nIF OBJECT_ID(N'[dbo].[T_EVTPRIOSND]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_EVTPRIOSND];CREATE SYNONYM [dbo].[T_EVTPRIOSND] FOR [default].[main_ac_x_215].[dbo].[T_EVTPRIOSND];\nIF OBJECT_ID(N'[dbo].[T_EVTSPC]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_EVTSPC];CREATE SYNONYM [dbo].[T_EVTSPC] FOR [default].[main_ac_x_215].[dbo].[T_EVTSPC];\nIF OBJECT_ID(N'[dbo].[T_EVTTYP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_EVTTYP];CREATE SYNONYM [dbo].[T_EVTTYP] FOR [default].[main_ac_x_215].[dbo].[T_EVTTYP];\nIF OBJECT_ID(N'[dbo].[T_EVTTYP_GROUP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_EVTTYP_GROUP];CREATE SYNONYM [dbo].[T_EVTTYP_GROUP] FOR [default].[main_ac_x_215].[dbo].[T_EVTTYP_GROUP];\nIF OBJECT_ID(N'[dbo].[T_EXDEVS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_EXDEVS];CREATE SYNONYM [dbo].[T_EXDEVS] FOR [default].[main_ac_x_215].[dbo].[T_EXDEVS];\nIF OBJECT_ID(N'[dbo].[T_EXTSYS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_EXTSYS];CREATE SYNONYM [dbo].[T_EXTSYS] FOR [default].[main_ac_x_215].[dbo].[T_EXTSYS];\nIF OBJECT_ID(N'[dbo].[T_FAILSYNCACSGRUPDATE]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FAILSYNCACSGRUPDATE];CREATE SYNONYM [dbo].[T_FAILSYNCACSGRUPDATE] FOR [default].[main_ac_x_215].[dbo].[T_FAILSYNCACSGRUPDATE];\nIF OBJECT_ID(N'[dbo].[T_FAILSYNCACSLVLUPDATE]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FAILSYNCACSLVLUPDATE];CREATE SYNONYM [dbo].[T_FAILSYNCACSLVLUPDATE] FOR [default].[main_ac_x_215].[dbo].[T_FAILSYNCACSLVLUPDATE];\nIF OBJECT_ID(N'[dbo].[T_FAILSYNCFLRLVLUPDATE]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FAILSYNCFLRLVLUPDATE];CREATE SYNONYM [dbo].[T_FAILSYNCFLRLVLUPDATE] FOR [default].[main_ac_x_215].[dbo].[T_FAILSYNCFLRLVLUPDATE];\nIF OBJECT_ID(N'[dbo].[T_FAILSYNCUSRUPDATE]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FAILSYNCUSRUPDATE];CREATE SYNONYM [dbo].[T_FAILSYNCUSRUPDATE] FOR [default].[main_ac_x_215].[dbo].[T_FAILSYNCUSRUPDATE];\nIF OBJECT_ID(N'[dbo].[T_FALDRGRS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FALDRGRS];CREATE SYNONYM [dbo].[T_FALDRGRS] FOR [default].[main_ac_x_215].[dbo].[T_FALDRGRS];\nIF OBJECT_ID(N'[dbo].[T_FALDRS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FALDRS];CREATE SYNONYM [dbo].[T_FALDRS] FOR [default].[main_ac_x_215].[dbo].[T_FALDRS];\nIF OBJECT_ID(N'[dbo].[T_FALELVTS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FALELVTS];CREATE SYNONYM [dbo].[T_FALELVTS] FOR [default].[main_ac_x_215].[dbo].[T_FALELVTS];\nIF OBJECT_ID(N'[dbo].[T_FCLTY_INFO]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FCLTY_INFO];CREATE SYNONYM [dbo].[T_FCLTY_INFO] FOR [default].[main_ac_x_215].[dbo].[T_FCLTY_INFO];\nIF OBJECT_ID(N'[dbo].[T_FCTMPL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FCTMPL];CREATE SYNONYM [dbo].[T_FCTMPL] FOR [default].[main_ac_x_215].[dbo].[T_FCTMPL];\nIF OBJECT_ID(N'[dbo].[T_FLKBPACGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FLKBPACGR];CREATE SYNONYM [dbo].[T_FLKBPACGR] FOR [default].[main_ac_x_215].[dbo].[T_FLKBPACGR];\nIF OBJECT_ID(N'[dbo].[T_FLKDRGRS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FLKDRGRS];CREATE SYNONYM [dbo].[T_FLKDRGRS] FOR [default].[main_ac_x_215].[dbo].[T_FLKDRGRS];\nIF OBJECT_ID(N'[dbo].[T_FLKDRS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FLKDRS];CREATE SYNONYM [dbo].[T_FLKDRS] FOR [default].[main_ac_x_215].[dbo].[T_FLKDRS];\nIF OBJECT_ID(N'[dbo].[T_FLKELVTS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FLKELVTS];CREATE SYNONYM [dbo].[T_FLKELVTS] FOR [default].[main_ac_x_215].[dbo].[T_FLKELVTS];\nIF OBJECT_ID(N'[dbo].[T_FLR_INFO]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FLR_INFO];CREATE SYNONYM [dbo].[T_FLR_INFO] FOR [default].[main_ac_x_215].[dbo].[T_FLR_INFO];\nIF OBJECT_ID(N'[dbo].[T_FLRGRLVLS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FLRGRLVLS];CREATE SYNONYM [dbo].[T_FLRGRLVLS] FOR [default].[main_ac_x_215].[dbo].[T_FLRGRLVLS];\nIF OBJECT_ID(N'[dbo].[T_FLRLVL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FLRLVL];CREATE SYNONYM [dbo].[T_FLRLVL] FOR [default].[main_ac_x_215].[dbo].[T_FLRLVL];\nIF OBJECT_ID(N'[dbo].[T_FLRLVLITM]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FLRLVLITM];CREATE SYNONYM [dbo].[T_FLRLVLITM] FOR [default].[main_ac_x_215].[dbo].[T_FLRLVLITM];\nIF OBJECT_ID(N'[dbo].[T_FLRLVLITMELVTS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FLRLVLITMELVTS];CREATE SYNONYM [dbo].[T_FLRLVLITMELVTS] FOR [default].[main_ac_x_215].[dbo].[T_FLRLVLITMELVTS];\nIF OBJECT_ID(N'[dbo].[T_FLRLVLITMS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FLRLVLITMS];CREATE SYNONYM [dbo].[T_FLRLVLITMS] FOR [default].[main_ac_x_215].[dbo].[T_FLRLVLITMS];\nIF OBJECT_ID(N'[dbo].[T_FLRLVLSENT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FLRLVLSENT];CREATE SYNONYM [dbo].[T_FLRLVLSENT] FOR [default].[main_ac_x_215].[dbo].[T_FLRLVLSENT];\nIF OBJECT_ID(N'[dbo].[T_FLRS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FLRS];CREATE SYNONYM [dbo].[T_FLRS] FOR [default].[main_ac_x_215].[dbo].[T_FLRS];\nIF OBJECT_ID(N'[dbo].[T_FNGPTMPL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FNGPTMPL];CREATE SYNONYM [dbo].[T_FNGPTMPL] FOR [default].[main_ac_x_215].[dbo].[T_FNGPTMPL];\nIF OBJECT_ID(N'[dbo].[T_FNGPTMPLVER]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FNGPTMPLVER];CREATE SYNONYM [dbo].[T_FNGPTMPLVER] FOR [default].[main_ac_x_215].[dbo].[T_FNGPTMPLVER];\nIF OBJECT_ID(N'[dbo].[T_FULACGRS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FULACGRS];CREATE SYNONYM [dbo].[T_FULACGRS] FOR [default].[main_ac_x_215].[dbo].[T_FULACGRS];\nIF OBJECT_ID(N'[dbo].[T_FULDRGRS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FULDRGRS];CREATE SYNONYM [dbo].[T_FULDRGRS] FOR [default].[main_ac_x_215].[dbo].[T_FULDRGRS];\nIF OBJECT_ID(N'[dbo].[T_FULDRS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FULDRS];CREATE SYNONYM [dbo].[T_FULDRS] FOR [default].[main_ac_x_215].[dbo].[T_FULDRS];\nIF OBJECT_ID(N'[dbo].[T_FULELVTS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_FULELVTS];CREATE SYNONYM [dbo].[T_FULELVTS] FOR [default].[main_ac_x_215].[dbo].[T_FULELVTS];\nIF OBJECT_ID(N'[dbo].[T_GIS_DOOR_INFO]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_GIS_DOOR_INFO];CREATE SYNONYM [dbo].[T_GIS_DOOR_INFO] FOR [default].[main_ac_x_215].[dbo].[T_GIS_DOOR_INFO];\nIF OBJECT_ID(N'[dbo].[T_GIS_VCM_INFO]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_GIS_VCM_INFO];CREATE SYNONYM [dbo].[T_GIS_VCM_INFO] FOR [default].[main_ac_x_215].[dbo].[T_GIS_VCM_INFO];\nIF OBJECT_ID(N'[dbo].[T_GRM]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_GRM];CREATE SYNONYM [dbo].[T_GRM] FOR [default].[main_ac_x_215].[dbo].[T_GRM];\nIF OBJECT_ID(N'[dbo].[T_GRMEL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_GRMEL];CREATE SYNONYM [dbo].[T_GRMEL] FOR [default].[main_ac_x_215].[dbo].[T_GRMEL];\nIF OBJECT_ID(N'[dbo].[T_GRMELTYP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_GRMELTYP];CREATE SYNONYM [dbo].[T_GRMELTYP] FOR [default].[main_ac_x_215].[dbo].[T_GRMELTYP];\nIF OBJECT_ID(N'[dbo].[T_GRMELVID]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_GRMELVID];CREATE SYNONYM [dbo].[T_GRMELVID] FOR [default].[main_ac_x_215].[dbo].[T_GRMELVID];\nIF OBJECT_ID(N'[dbo].[T_GRMGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_GRMGR];CREATE SYNONYM [dbo].[T_GRMGR] FOR [default].[main_ac_x_215].[dbo].[T_GRMGR];\nIF OBJECT_ID(N'[dbo].[T_HOL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_HOL];CREATE SYNONYM [dbo].[T_HOL] FOR [default].[main_ac_x_215].[dbo].[T_HOL];\nIF OBJECT_ID(N'[dbo].[T_HOLGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_HOLGR];CREATE SYNONYM [dbo].[T_HOLGR] FOR [default].[main_ac_x_215].[dbo].[T_HOLGR];\nIF OBJECT_ID(N'[dbo].[T_HOLSCH]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_HOLSCH];CREATE SYNONYM [dbo].[T_HOLSCH] FOR [default].[main_ac_x_215].[dbo].[T_HOLSCH];\nIF OBJECT_ID(N'[dbo].[T_HOLSCHTMPRDS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_HOLSCHTMPRDS];CREATE SYNONYM [dbo].[T_HOLSCHTMPRDS] FOR [default].[main_ac_x_215].[dbo].[T_HOLSCHTMPRDS];\nIF OBJECT_ID(N'[dbo].[T_IMGLGJB]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_IMGLGJB];CREATE SYNONYM [dbo].[T_IMGLGJB] FOR [default].[main_ac_x_215].[dbo].[T_IMGLGJB];\nIF OBJECT_ID(N'[dbo].[T_INPCFG]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_INPCFG];CREATE SYNONYM [dbo].[T_INPCFG] FOR [default].[main_ac_x_215].[dbo].[T_INPCFG];\nIF OBJECT_ID(N'[dbo].[T_INPCFGEX]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_INPCFGEX];CREATE SYNONYM [dbo].[T_INPCFGEX] FOR [default].[main_ac_x_215].[dbo].[T_INPCFGEX];\nIF OBJECT_ID(N'[dbo].[T_LEDOUP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_LEDOUP];CREATE SYNONYM [dbo].[T_LEDOUP] FOR [default].[main_ac_x_215].[dbo].[T_LEDOUP];\nIF OBJECT_ID(N'[dbo].[T_LGSERVEREVT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_LGSERVEREVT];CREATE SYNONYM [dbo].[T_LGSERVEREVT] FOR [default].[main_ac_x_215].[dbo].[T_LGSERVEREVT];\nIF OBJECT_ID(N'[dbo].[T_LGTBIDX]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_LGTBIDX];CREATE SYNONYM [dbo].[T_LGTBIDX] FOR [default].[main_ac_x_215].[dbo].[T_LGTBIDX];\nIF OBJECT_ID(N'[dbo].[T_LGUPDHIS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_LGUPDHIS];CREATE SYNONYM [dbo].[T_LGUPDHIS] FOR [default].[main_ac_x_215].[dbo].[T_LGUPDHIS];\nIF OBJECT_ID(N'[dbo].[T_LICENSES]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_LICENSES];CREATE SYNONYM [dbo].[T_LICENSES] FOR [default].[main_ac_x_215].[dbo].[T_LICENSES];\nIF OBJECT_ID(N'[dbo].[T_LSTLOG]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_LSTLOG];CREATE SYNONYM [dbo].[T_LSTLOG] FOR [default].[main_ac_x_215].[dbo].[T_LSTLOG];\nIF OBJECT_ID(N'[dbo].[T_LSTSYNSTA]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_LSTSYNSTA];CREATE SYNONYM [dbo].[T_LSTSYNSTA] FOR [default].[main_ac_x_215].[dbo].[T_LSTSYNSTA];\nIF OBJECT_ID(N'[dbo].[T_LSTUSRAUTH]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_LSTUSRAUTH];CREATE SYNONYM [dbo].[T_LSTUSRAUTH] FOR [default].[main_ac_x_215].[dbo].[T_LSTUSRAUTH];\nIF OBJECT_ID(N'[dbo].[T_LULACGRS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_LULACGRS];CREATE SYNONYM [dbo].[T_LULACGRS] FOR [default].[main_ac_x_215].[dbo].[T_LULACGRS];\nIF OBJECT_ID(N'[dbo].[T_MBLCRD]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_MBLCRD];CREATE SYNONYM [dbo].[T_MBLCRD] FOR [default].[main_ac_x_215].[dbo].[T_MBLCRD];\nIF OBJECT_ID(N'[dbo].[T_MOBILE_CREDENTIAL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_MOBILE_CREDENTIAL];CREATE SYNONYM [dbo].[T_MOBILE_CREDENTIAL] FOR [default].[main_ac_x_215].[dbo].[T_MOBILE_CREDENTIAL];\nIF OBJECT_ID(N'[dbo].[T_MOBILE_PICTURE_HASH]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_MOBILE_PICTURE_HASH];CREATE SYNONYM [dbo].[T_MOBILE_PICTURE_HASH] FOR [default].[main_ac_x_215].[dbo].[T_MOBILE_PICTURE_HASH];\nIF OBJECT_ID(N'[dbo].[T_MXDT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_MXDT];CREATE SYNONYM [dbo].[T_MXDT] FOR [default].[main_ac_x_215].[dbo].[T_MXDT];\nIF OBJECT_ID(N'[dbo].[T_NESTED_DEV]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_NESTED_DEV];CREATE SYNONYM [dbo].[T_NESTED_DEV] FOR [default].[main_ac_x_215].[dbo].[T_NESTED_DEV];\nIF OBJECT_ID(N'[dbo].[T_NESTED_DEVGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_NESTED_DEVGR];CREATE SYNONYM [dbo].[T_NESTED_DEVGR] FOR [default].[main_ac_x_215].[dbo].[T_NESTED_DEVGR];\nIF OBJECT_ID(N'[dbo].[T_NESTED_DRGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_NESTED_DRGR];CREATE SYNONYM [dbo].[T_NESTED_DRGR] FOR [default].[main_ac_x_215].[dbo].[T_NESTED_DRGR];\nIF OBJECT_ID(N'[dbo].[T_NESTED_ELVTGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_NESTED_ELVTGR];CREATE SYNONYM [dbo].[T_NESTED_ELVTGR] FOR [default].[main_ac_x_215].[dbo].[T_NESTED_ELVTGR];\nIF OBJECT_ID(N'[dbo].[T_NESTED_GRMGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_NESTED_GRMGR];CREATE SYNONYM [dbo].[T_NESTED_GRMGR] FOR [default].[main_ac_x_215].[dbo].[T_NESTED_GRMGR];\nIF OBJECT_ID(N'[dbo].[T_NESTED_USRGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_NESTED_USRGR];CREATE SYNONYM [dbo].[T_NESTED_USRGR] FOR [default].[main_ac_x_215].[dbo].[T_NESTED_USRGR];\nIF OBJECT_ID(N'[dbo].[T_NTC]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_NTC];CREATE SYNONYM [dbo].[T_NTC] FOR [default].[main_ac_x_215].[dbo].[T_NTC];\nIF OBJECT_ID(N'[dbo].[T_OCCPBPACGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_OCCPBPACGR];CREATE SYNONYM [dbo].[T_OCCPBPACGR] FOR [default].[main_ac_x_215].[dbo].[T_OCCPBPACGR];\nIF OBJECT_ID(N'[dbo].[T_OUPSIG]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_OUPSIG];CREATE SYNONYM [dbo].[T_OUPSIG] FOR [default].[main_ac_x_215].[dbo].[T_OUPSIG];\nIF OBJECT_ID(N'[dbo].[T_PERM]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_PERM];CREATE SYNONYM [dbo].[T_PERM] FOR [default].[main_ac_x_215].[dbo].[T_PERM];\nIF OBJECT_ID(N'[dbo].[T_POLYGON_INFO]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_POLYGON_INFO];CREATE SYNONYM [dbo].[T_POLYGON_INFO] FOR [default].[main_ac_x_215].[dbo].[T_POLYGON_INFO];\nIF OBJECT_ID(N'[dbo].[T_PRF]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_PRF];CREATE SYNONYM [dbo].[T_PRF] FOR [default].[main_ac_x_215].[dbo].[T_PRF];\nIF OBJECT_ID(N'[dbo].[T_QCACT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_QCACT];CREATE SYNONYM [dbo].[T_QCACT] FOR [default].[main_ac_x_215].[dbo].[T_QCACT];\nIF OBJECT_ID(N'[dbo].[T_QCACTALM]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_QCACTALM];CREATE SYNONYM [dbo].[T_QCACTALM] FOR [default].[main_ac_x_215].[dbo].[T_QCACTALM];\nIF OBJECT_ID(N'[dbo].[T_QCACTPERM]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_QCACTPERM];CREATE SYNONYM [dbo].[T_QCACTPERM] FOR [default].[main_ac_x_215].[dbo].[T_QCACTPERM];\nIF OBJECT_ID(N'[dbo].[T_REPORT_EXPORT_SETTING]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_REPORT_EXPORT_SETTING];CREATE SYNONYM [dbo].[T_REPORT_EXPORT_SETTING] FOR [default].[main_ac_x_215].[dbo].[T_REPORT_EXPORT_SETTING];\nIF OBJECT_ID(N'[dbo].[T_REPORT_PRINT_SETTING]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_REPORT_PRINT_SETTING];CREATE SYNONYM [dbo].[T_REPORT_PRINT_SETTING] FOR [default].[main_ac_x_215].[dbo].[T_REPORT_PRINT_SETTING];\nIF OBJECT_ID(N'[dbo].[T_REPORT_SCHEDULES]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_REPORT_SCHEDULES];CREATE SYNONYM [dbo].[T_REPORT_SCHEDULES] FOR [default].[main_ac_x_215].[dbo].[T_REPORT_SCHEDULES];\nIF OBJECT_ID(N'[dbo].[T_REPORT_SETTING]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_REPORT_SETTING];CREATE SYNONYM [dbo].[T_REPORT_SETTING] FOR [default].[main_ac_x_215].[dbo].[T_REPORT_SETTING];\nIF OBJECT_ID(N'[dbo].[T_REPORT_TEMPLATE]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_REPORT_TEMPLATE];CREATE SYNONYM [dbo].[T_REPORT_TEMPLATE] FOR [default].[main_ac_x_215].[dbo].[T_REPORT_TEMPLATE];\nIF OBJECT_ID(N'[dbo].[T_REPORT_TEMPLATE_GROUP_FILTER]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_REPORT_TEMPLATE_GROUP_FILTER];CREATE SYNONYM [dbo].[T_REPORT_TEMPLATE_GROUP_FILTER] FOR [default].[main_ac_x_215].[dbo].[T_REPORT_TEMPLATE_GROUP_FILTER];\nIF OBJECT_ID(N'[dbo].[T_REPORT_TEMPLATE_USER_FILTER]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_REPORT_TEMPLATE_USER_FILTER];CREATE SYNONYM [dbo].[T_REPORT_TEMPLATE_USER_FILTER] FOR [default].[main_ac_x_215].[dbo].[T_REPORT_TEMPLATE_USER_FILTER];\nIF OBJECT_ID(N'[dbo].[T_REPORTTEMPID]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_REPORTTEMPID];CREATE SYNONYM [dbo].[T_REPORTTEMPID] FOR [default].[main_ac_x_215].[dbo].[T_REPORTTEMPID];\nIF OBJECT_ID(N'[dbo].[T_REPORTTEMPID_HEADER]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_REPORTTEMPID_HEADER];CREATE SYNONYM [dbo].[T_REPORTTEMPID_HEADER] FOR [default].[main_ac_x_215].[dbo].[T_REPORTTEMPID_HEADER];\nIF OBJECT_ID(N'[dbo].[T_RMJB]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_RMJB];CREATE SYNONYM [dbo].[T_RMJB] FOR [default].[main_ac_x_215].[dbo].[T_RMJB];\nIF OBJECT_ID(N'[dbo].[T_RMJBEV]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_RMJBEV];CREATE SYNONYM [dbo].[T_RMJBEV] FOR [default].[main_ac_x_215].[dbo].[T_RMJBEV];\nIF OBJECT_ID(N'[dbo].[T_RMJBZN]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_RMJBZN];CREATE SYNONYM [dbo].[T_RMJBZN] FOR [default].[main_ac_x_215].[dbo].[T_RMJBZN];\nIF OBJECT_ID(N'[dbo].[T_SCH]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_SCH];CREATE SYNONYM [dbo].[T_SCH] FOR [default].[main_ac_x_215].[dbo].[T_SCH];\nIF OBJECT_ID(N'[dbo].[T_SCHDL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_SCHDL];CREATE SYNONYM [dbo].[T_SCHDL] FOR [default].[main_ac_x_215].[dbo].[T_SCHDL];\nIF OBJECT_ID(N'[dbo].[T_SCHDLTMPRDS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_SCHDLTMPRDS];CREATE SYNONYM [dbo].[T_SCHDLTMPRDS] FOR [default].[main_ac_x_215].[dbo].[T_SCHDLTMPRDS];\nIF OBJECT_ID(N'[dbo].[T_SHF]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_SHF];CREATE SYNONYM [dbo].[T_SHF] FOR [default].[main_ac_x_215].[dbo].[T_SHF];\nIF OBJECT_ID(N'[dbo].[T_SHFGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_SHFGR];CREATE SYNONYM [dbo].[T_SHFGR] FOR [default].[main_ac_x_215].[dbo].[T_SHFGR];\nIF OBJECT_ID(N'[dbo].[T_SHFGRSHFS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_SHFGRSHFS];CREATE SYNONYM [dbo].[T_SHFGRSHFS] FOR [default].[main_ac_x_215].[dbo].[T_SHFGRSHFS];\nIF OBJECT_ID(N'[dbo].[T_SHFGRUSS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_SHFGRUSS];CREATE SYNONYM [dbo].[T_SHFGRUSS] FOR [default].[main_ac_x_215].[dbo].[T_SHFGRUSS];\nIF OBJECT_ID(N'[dbo].[T_SHFRUL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_SHFRUL];CREATE SYNONYM [dbo].[T_SHFRUL] FOR [default].[main_ac_x_215].[dbo].[T_SHFRUL];\nIF OBJECT_ID(N'[dbo].[T_SHFTMPLSHFS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_SHFTMPLSHFS];CREATE SYNONYM [dbo].[T_SHFTMPLSHFS] FOR [default].[main_ac_x_215].[dbo].[T_SHFTMPLSHFS];\nIF OBJECT_ID(N'[dbo].[T_SND]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_SND];CREATE SYNONYM [dbo].[T_SND] FOR [default].[main_ac_x_215].[dbo].[T_SND];\nIF OBJECT_ID(N'[dbo].[T_SRVSTA]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_SRVSTA];CREATE SYNONYM [dbo].[T_SRVSTA] FOR [default].[main_ac_x_215].[dbo].[T_SRVSTA];\nIF OBJECT_ID(N'[dbo].[T_SYNCTAPB]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_SYNCTAPB];CREATE SYNONYM [dbo].[T_SYNCTAPB] FOR [default].[main_ac_x_215].[dbo].[T_SYNCTAPB];\nIF OBJECT_ID(N'[dbo].[T_SYSCFG]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_SYSCFG];CREATE SYNONYM [dbo].[T_SYSCFG] FOR [default].[main_ac_x_215].[dbo].[T_SYSCFG];\nIF OBJECT_ID(N'[dbo].[T_TAKEY]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_TAKEY];CREATE SYNONYM [dbo].[T_TAKEY] FOR [default].[main_ac_x_215].[dbo].[T_TAKEY];\nIF OBJECT_ID(N'[dbo].[T_TMAPBBPACGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_TMAPBBPACGR];CREATE SYNONYM [dbo].[T_TMAPBBPACGR] FOR [default].[main_ac_x_215].[dbo].[T_TMAPBBPACGR];\nIF OBJECT_ID(N'[dbo].[T_TMPRD]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_TMPRD];CREATE SYNONYM [dbo].[T_TMPRD] FOR [default].[main_ac_x_215].[dbo].[T_TMPRD];\nIF OBJECT_ID(N'[dbo].[T_TRGACT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_TRGACT];CREATE SYNONYM [dbo].[T_TRGACT] FOR [default].[main_ac_x_215].[dbo].[T_TRGACT];\nIF OBJECT_ID(N'[dbo].[T_USERSENT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_USERSENT];CREATE SYNONYM [dbo].[T_USERSENT] FOR [default].[main_ac_x_215].[dbo].[T_USERSENT];\nIF OBJECT_ID(N'[dbo].[T_USR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_USR];CREATE SYNONYM [dbo].[T_USR] FOR [default].[main_ac_x_215].[dbo].[T_USR];\nIF OBJECT_ID(N'[dbo].[T_USR_PHRASE]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_USR_PHRASE];CREATE SYNONYM [dbo].[T_USR_PHRASE] FOR [default].[main_ac_x_215].[dbo].[T_USR_PHRASE];\nIF OBJECT_ID(N'[dbo].[T_USRACSGRTMPL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_USRACSGRTMPL];CREATE SYNONYM [dbo].[T_USRACSGRTMPL] FOR [default].[main_ac_x_215].[dbo].[T_USRACSGRTMPL];\nIF OBJECT_ID(N'[dbo].[T_USRCRD]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_USRCRD];CREATE SYNONYM [dbo].[T_USRCRD] FOR [default].[main_ac_x_215].[dbo].[T_USRCRD];\nIF OBJECT_ID(N'[dbo].[T_USRCUSFLD]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_USRCUSFLD];CREATE SYNONYM [dbo].[T_USRCUSFLD] FOR [default].[main_ac_x_215].[dbo].[T_USRCUSFLD];\nIF OBJECT_ID(N'[dbo].[T_USRCUSFLDTMPL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_USRCUSFLDTMPL];CREATE SYNONYM [dbo].[T_USRCUSFLDTMPL] FOR [default].[main_ac_x_215].[dbo].[T_USRCUSFLDTMPL];\nIF OBJECT_ID(N'[dbo].[T_USRGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_USRGR];CREATE SYNONYM [dbo].[T_USRGR] FOR [default].[main_ac_x_215].[dbo].[T_USRGR];\nIF OBJECT_ID(N'[dbo].[T_USRGR_ORDER]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_USRGR_ORDER];CREATE SYNONYM [dbo].[T_USRGR_ORDER] FOR [default].[main_ac_x_215].[dbo].[T_USRGR_ORDER];\nIF OBJECT_ID(N'[dbo].[T_USRMSKSYN]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_USRMSKSYN];CREATE SYNONYM [dbo].[T_USRMSKSYN] FOR [default].[main_ac_x_215].[dbo].[T_USRMSKSYN];\nIF OBJECT_ID(N'[dbo].[T_USROPRMD]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_USROPRMD];CREATE SYNONYM [dbo].[T_USROPRMD] FOR [default].[main_ac_x_215].[dbo].[T_USROPRMD];\nIF OBJECT_ID(N'[dbo].[T_USRPHOTO]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_USRPHOTO];CREATE SYNONYM [dbo].[T_USRPHOTO] FOR [default].[main_ac_x_215].[dbo].[T_USRPHOTO];\nIF OBJECT_ID(N'[dbo].[T_USRTMPL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_USRTMPL];CREATE SYNONYM [dbo].[T_USRTMPL] FOR [default].[main_ac_x_215].[dbo].[T_USRTMPL];\nIF OBJECT_ID(N'[dbo].[T_VCM_FLR_MAP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_VCM_FLR_MAP];CREATE SYNONYM [dbo].[T_VCM_FLR_MAP] FOR [default].[main_ac_x_215].[dbo].[T_VCM_FLR_MAP];\nIF OBJECT_ID(N'[dbo].[T_VDEV]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_VDEV];CREATE SYNONYM [dbo].[T_VDEV] FOR [default].[main_ac_x_215].[dbo].[T_VDEV];\nIF OBJECT_ID(N'[dbo].[T_VIPPHBKS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_VIPPHBKS];CREATE SYNONYM [dbo].[T_VIPPHBKS] FOR [default].[main_ac_x_215].[dbo].[T_VIPPHBKS];\nIF OBJECT_ID(N'[dbo].[T_VISIT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_VISIT];CREATE SYNONYM [dbo].[T_VISIT] FOR [default].[main_ac_x_215].[dbo].[T_VISIT];\nIF OBJECT_ID(N'[dbo].[T_VISITACSGRMAP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_VISITACSGRMAP];CREATE SYNONYM [dbo].[T_VISITACSGRMAP] FOR [default].[main_ac_x_215].[dbo].[T_VISITACSGRMAP];\nIF OBJECT_ID(N'[dbo].[T_VISITCUSFLD]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_VISITCUSFLD];CREATE SYNONYM [dbo].[T_VISITCUSFLD] FOR [default].[main_ac_x_215].[dbo].[T_VISITCUSFLD];\nIF OBJECT_ID(N'[dbo].[T_VISITFNGPTMPL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_VISITFNGPTMPL];CREATE SYNONYM [dbo].[T_VISITFNGPTMPL] FOR [default].[main_ac_x_215].[dbo].[T_VISITFNGPTMPL];\nIF OBJECT_ID(N'[dbo].[T_VISITFNGPTMPLVER]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_VISITFNGPTMPLVER];CREATE SYNONYM [dbo].[T_VISITFNGPTMPLVER] FOR [default].[main_ac_x_215].[dbo].[T_VISITFNGPTMPLVER];\nIF OBJECT_ID(N'[dbo].[T_VISITORTERMINAL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_VISITORTERMINAL];CREATE SYNONYM [dbo].[T_VISITORTERMINAL] FOR [default].[main_ac_x_215].[dbo].[T_VISITORTERMINAL];\nIF OBJECT_ID(N'[dbo].[T_VISITORTERMINALACGROUPMAP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_VISITORTERMINALACGROUPMAP];CREATE SYNONYM [dbo].[T_VISITORTERMINALACGROUPMAP] FOR [default].[main_ac_x_215].[dbo].[T_VISITORTERMINALACGROUPMAP];\nIF OBJECT_ID(N'[dbo].[T_VISITORTERMINALREGION]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_VISITORTERMINALREGION];CREATE SYNONYM [dbo].[T_VISITORTERMINALREGION] FOR [default].[main_ac_x_215].[dbo].[T_VISITORTERMINALREGION];\nIF OBJECT_ID(N'[dbo].[T_VISITORTERMINALREGIONMAP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_VISITORTERMINALREGIONMAP];CREATE SYNONYM [dbo].[T_VISITORTERMINALREGIONMAP] FOR [default].[main_ac_x_215].[dbo].[T_VISITORTERMINALREGIONMAP];\nIF OBJECT_ID(N'[dbo].[T_VISITORTERMS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_VISITORTERMS];CREATE SYNONYM [dbo].[T_VISITORTERMS] FOR [default].[main_ac_x_215].[dbo].[T_VISITORTERMS];\nIF OBJECT_ID(N'[dbo].[T_WGDBZ]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_WGDBZ];CREATE SYNONYM [dbo].[T_WGDBZ] FOR [default].[main_ac_x_215].[dbo].[T_WGDBZ];\nIF OBJECT_ID(N'[dbo].[T_WGDFMT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_WGDFMT];CREATE SYNONYM [dbo].[T_WGDFMT] FOR [default].[main_ac_x_215].[dbo].[T_WGDFMT];\nIF OBJECT_ID(N'[dbo].[T_WGDLED]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_WGDLED];CREATE SYNONYM [dbo].[T_WGDLED] FOR [default].[main_ac_x_215].[dbo].[T_WGDLED];\nIF OBJECT_ID(N'[dbo].[T_WGDTMPR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_WGDTMPR];CREATE SYNONYM [dbo].[T_WGDTMPR] FOR [default].[main_ac_x_215].[dbo].[T_WGDTMPR];\nIF OBJECT_ID(N'[dbo].[T_WIDGET]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_WIDGET];CREATE SYNONYM [dbo].[T_WIDGET] FOR [default].[main_ac_x_215].[dbo].[T_WIDGET];\nIF OBJECT_ID(N'[dbo].[T_ZN]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZN];CREATE SYNONYM [dbo].[T_ZN] FOR [default].[main_ac_x_215].[dbo].[T_ZN];\nIF OBJECT_ID(N'[dbo].[T_ZNACSGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNACSGR];CREATE SYNONYM [dbo].[T_ZNACSGR] FOR [default].[main_ac_x_215].[dbo].[T_ZNACSGR];\nIF OBJECT_ID(N'[dbo].[T_ZNAPB]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNAPB];CREATE SYNONYM [dbo].[T_ZNAPB] FOR [default].[main_ac_x_215].[dbo].[T_ZNAPB];\nIF OBJECT_ID(N'[dbo].[T_ZNAPBUSRIO]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNAPBUSRIO];CREATE SYNONYM [dbo].[T_ZNAPBUSRIO] FOR [default].[main_ac_x_215].[dbo].[T_ZNAPBUSRIO];\nIF OBJECT_ID(N'[dbo].[T_ZNCRD]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNCRD];CREATE SYNONYM [dbo].[T_ZNCRD] FOR [default].[main_ac_x_215].[dbo].[T_ZNCRD];\nIF OBJECT_ID(N'[dbo].[T_ZNDR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNDR];CREATE SYNONYM [dbo].[T_ZNDR] FOR [default].[main_ac_x_215].[dbo].[T_ZNDR];\nIF OBJECT_ID(N'[dbo].[T_ZNELVT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNELVT];CREATE SYNONYM [dbo].[T_ZNELVT] FOR [default].[main_ac_x_215].[dbo].[T_ZNELVT];\nIF OBJECT_ID(N'[dbo].[T_ZNFAL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNFAL];CREATE SYNONYM [dbo].[T_ZNFAL] FOR [default].[main_ac_x_215].[dbo].[T_ZNFAL];\nIF OBJECT_ID(N'[dbo].[T_ZNFALINPSNS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNFALINPSNS];CREATE SYNONYM [dbo].[T_ZNFALINPSNS] FOR [default].[main_ac_x_215].[dbo].[T_ZNFALINPSNS];\nIF OBJECT_ID(N'[dbo].[T_ZNFLK]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNFLK];CREATE SYNONYM [dbo].[T_ZNFLK] FOR [default].[main_ac_x_215].[dbo].[T_ZNFLK];\nIF OBJECT_ID(N'[dbo].[T_ZNFLRS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNFLRS];CREATE SYNONYM [dbo].[T_ZNFLRS] FOR [default].[main_ac_x_215].[dbo].[T_ZNFLRS];\nIF OBJECT_ID(N'[dbo].[T_ZNFUL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNFUL];CREATE SYNONYM [dbo].[T_ZNFUL] FOR [default].[main_ac_x_215].[dbo].[T_ZNFUL];\nIF OBJECT_ID(N'[dbo].[T_ZNINP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNINP];CREATE SYNONYM [dbo].[T_ZNINP] FOR [default].[main_ac_x_215].[dbo].[T_ZNINP];\nIF OBJECT_ID(N'[dbo].[T_ZNITAL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNITAL];CREATE SYNONYM [dbo].[T_ZNITAL] FOR [default].[main_ac_x_215].[dbo].[T_ZNITAL];\nIF OBJECT_ID(N'[dbo].[T_ZNLUL]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNLUL];CREATE SYNONYM [dbo].[T_ZNLUL] FOR [default].[main_ac_x_215].[dbo].[T_ZNLUL];\nIF OBJECT_ID(N'[dbo].[T_ZNMST]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNMST];CREATE SYNONYM [dbo].[T_ZNMST] FOR [default].[main_ac_x_215].[dbo].[T_ZNMST];\nIF OBJECT_ID(N'[dbo].[T_ZNOCCP]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNOCCP];CREATE SYNONYM [dbo].[T_ZNOCCP] FOR [default].[main_ac_x_215].[dbo].[T_ZNOCCP];\nIF OBJECT_ID(N'[dbo].[T_ZNOCCP_LSTUSREVT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNOCCP_LSTUSREVT];CREATE SYNONYM [dbo].[T_ZNOCCP_LSTUSREVT] FOR [default].[main_ac_x_215].[dbo].[T_ZNOCCP_LSTUSREVT];\nIF OBJECT_ID(N'[dbo].[T_ZNRC]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNRC];CREATE SYNONYM [dbo].[T_ZNRC] FOR [default].[main_ac_x_215].[dbo].[T_ZNRC];\nIF OBJECT_ID(N'[dbo].[T_ZNRCHIS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNRCHIS];CREATE SYNONYM [dbo].[T_ZNRCHIS] FOR [default].[main_ac_x_215].[dbo].[T_ZNRCHIS];\nIF OBJECT_ID(N'[dbo].[T_ZNRCTRCK]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNRCTRCK];CREATE SYNONYM [dbo].[T_ZNRCTRCK] FOR [default].[main_ac_x_215].[dbo].[T_ZNRCTRCK];\nIF OBJECT_ID(N'[dbo].[T_ZNTAPB]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNTAPB];CREATE SYNONYM [dbo].[T_ZNTAPB] FOR [default].[main_ac_x_215].[dbo].[T_ZNTAPB];\nIF OBJECT_ID(N'[dbo].[T_ZNTMAPB]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNTMAPB];CREATE SYNONYM [dbo].[T_ZNTMAPB] FOR [default].[main_ac_x_215].[dbo].[T_ZNTMAPB];\nIF OBJECT_ID(N'[dbo].[T_ZNTRCK]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNTRCK];CREATE SYNONYM [dbo].[T_ZNTRCK] FOR [default].[main_ac_x_215].[dbo].[T_ZNTRCK];\nIF OBJECT_ID(N'[dbo].[T_ZNTRGACT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNTRGACT];CREATE SYNONYM [dbo].[T_ZNTRGACT] FOR [default].[main_ac_x_215].[dbo].[T_ZNTRGACT];\nIF OBJECT_ID(N'[dbo].[T_ZNUSR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ZNUSR];CREATE SYNONYM [dbo].[T_ZNUSR] FOR [default].[main_ac_x_215].[dbo].[T_ZNUSR];\nIF OBJECT_ID(N'[dbo].[TEMP_ACSGRUSR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[TEMP_ACSGRUSR];CREATE SYNONYM [dbo].[TEMP_ACSGRUSR] FOR [default].[main_ac_x_215].[dbo].[TEMP_ACSGRUSR];\nIF OBJECT_ID(N'[dbo].[TEMP_DOUBLEAUTHUSR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[TEMP_DOUBLEAUTHUSR];CREATE SYNONYM [dbo].[TEMP_DOUBLEAUTHUSR] FOR [default].[main_ac_x_215].[dbo].[TEMP_DOUBLEAUTHUSR];\nIF OBJECT_ID(N'[dbo].[TEMP_OPERATOR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[TEMP_OPERATOR];CREATE SYNONYM [dbo].[TEMP_OPERATOR] FOR [default].[main_ac_x_215].[dbo].[TEMP_OPERATOR];\n"
      })
    })]
  });
}
function _bsx_sub_db_create_table_query_mssql_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_bsx_sub_db_create_table_query_mssql_createMdxContent, {
      ...props
    })
  }) : _bsx_sub_db_create_table_query_mssql_createMdxContent(props);
}
function _bsx_sub_db_create_table_query_mssql_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/platform/biostar_x/add-sub-db.mdx


const add_sub_db_frontMatter = {
	id: 'add-sub-db',
	title: '보조 데이터베이스 추가하기',
	description: '커뮤니케이션 서버를 추가했을 때 메인 서버의 부하를 줄이기 위해 커뮤니케이션 서버와 연동할 보조 데이터베이스를 추가하고 연결하는 방법을 안내합니다.',
	keywords: [
		'데이터베이스',
		'추가',
		'연결'
	],
	isTranslationMissing: true
};
const add_sub_db_contentTitle = undefined;

const assets = {

};





const add_sub_db_toc = [{
  "value": "시작하기 전에",
  "id": "시작하기-전에",
  "level": 2
}, {
  "value": "등록 방법",
  "id": "등록-방법",
  "level": 3
}, {
  "value": "IP 주소로 통신 설정",
  "id": "ip-주소로-통신-설정",
  "level": 3
}, {
  "value": "보조 데이터베이스 추가",
  "id": "add-sub-db",
  "level": 2
}, {
  "value": "MariaDB",
  "id": "mariadb",
  "level": 3
}, {
  "value": "메인 데이터베이스",
  "id": "메인-데이터베이스",
  "level": 4
}, {
  "value": "보조 데이터베이스",
  "id": "보조-데이터베이스",
  "level": 4
}, {
  "value": "FederatedX 사용 여부 확인",
  "id": "federatedx-사용-여부-확인",
  "level": 4
}, {
  "value": "서버 별칭 등록",
  "id": "서버-별칭-등록",
  "level": 4
}, {
  "value": "테이블 link 설정",
  "id": "테이블-link-설정",
  "level": 4
}, ...toc, {
  "value": "Service Manager 설정",
  "id": "service-manager-설정",
  "level": 4
}, {
  "value": "SQL Server",
  "id": "sqlserver",
  "level": 3
}, {
  "value": "메인 데이터베이스 권한 부여",
  "id": "메인-데이터베이스-권한-부여",
  "level": 4
}, {
  "value": "보조 데이터베이스 권한 부여",
  "id": "보조-데이터베이스-권한-부여",
  "level": 4
}, {
  "value": "Service Manager 설정",
  "id": "service-manager-설정-1",
  "level": 4
}, {
  "value": "Linked Temp Table 쿼리문 생성",
  "id": "linked-temp-table-쿼리문-생성",
  "level": 4
}, ..._bsx_sub_db_create_table_query_mssql_toc, {
  "value": "보조 데이터베이스에 쿼리문 실행",
  "id": "보조-데이터베이스에-쿼리문-실행",
  "level": 4
}];
function add_sub_db_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Start, Step, Steps} = _components;
  if (!Cmd) add_sub_db_missingMdxReference("Cmd", true);
  if (!Image) add_sub_db_missingMdxReference("Image", true);
  if (!Start) add_sub_db_missingMdxReference("Start", true);
  if (!Step) add_sub_db_missingMdxReference("Step", true);
  if (!Steps) add_sub_db_missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "커뮤니케이션 서버를 추가했을 때 메인 서버의 부하를 줄이기 위해 커뮤니케이션 서버와 연동할 보조 데이터베이스를 추가하고 연결하는 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["보조 데이터베이스를 추가하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "멀티 커뮤니케이션 서버"
            }), " 라이선스가 필요합니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["커뮤니케이션 서버 설치에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "install-communication-server",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시작하기-전에",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MariaDB를 사용하는 환경에서 데이터베이스 간 통신할 때 IP 주소가 아닌 도메인 또는 호스트 이름을 사용한다면 다음 안내 사항을 반드시 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["IP 주소를 사용하지 않는다면 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Create user"
          }), " 또는 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Grant"
          }), " 등록이 불가능할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "도메인 또는 호스트 이름을 사용하여 통신한다면 반드시 localhost에 대해 user 및 권한 등록이 되어 있는지 확인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar X를 간편 설치 방식으로 설치했다면 루트(root) 계정이 localhost로만 user 및 권한이 등록되어 있기 때문에 해당 서버의 IP 주소나 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "127.0.0.1"
          }), "로 추가 등록해야 합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "등록-방법",
      children: "등록 방법"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["호스트가 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "127.0.0.1"
      }), "이고, User가 root인 계정에 대해서 비밀번호가 설정되어 있는지 확인하고, 설정되어 있지 않다면 반드시 비밀번호를 설정하고 권한을 부여하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["호스트가 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "127.0.0.1"
          }), "이고, User가 root인 계정에 대해서 비밀번호가 설정되어 있는지 확인하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            children: "SELECT * FROM mysql.user;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-subdb-mariadb-specific.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "빈칸이면 비밀번호가 설정되어 있지 않기 때문에 다음 항목에 있는 쿼리를 실행해서 비밀번호 추가 및 권한 부여를 반드시 진행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["호스트가 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "127.0.0.1"
          }), "이고, User가 root인 계정에 대해서 비밀번호를 설정하고 권한을 부여하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            children: "ALTER USER 'root'@'127.0.0.1' IDENTIFIED BY '<Main DB AC Schema Password>';\nGRANT ALL PRIVILEGES ON *.* TO 'root'@'127.0.0.1';\n  \nCREATE USER '<Main DB AC User>'@'127.0.0.1' IDENTIFIED BY '<Main DB AC Schema Password>';\nGRANT ALL PRIVILEGES ON *.* TO '<Main DB AC User>'@'127.0.0.1';\nCREATE USER '<Main DB AC User>'@'::1' IDENTIFIED BY '<Main DB AC Schema Password>';\nGRANT ALL PRIVILEGES ON *.* TO '<Main DB AC User>'@'::1';\n  \nCREATE USER '<Main DB TA User>'@'127.0.0.1' IDENTIFIED BY '<Main DB AC Schema Password>';\nGRANT ALL PRIVILEGES ON *.* TO '<Main DB TA User>'@'127.0.0.1';\nCREATE USER '<Main DB TA User>'@'::1' IDENTIFIED BY '<Main DB AC Schema Password>';\nGRANT ALL PRIVILEGES ON *.* TO '<Main DB TA User>'@'::1';\n  \nCREATE USER '<Main DB VE User>'@'127.0.0.1' IDENTIFIED BY '<Main DB AC Schema Password>';\nGRANT ALL PRIVILEGES ON *.* TO '<Main DB VE User>'@'127.0.0.1';\nCREATE USER '<Main DB VE User>'@'::1' IDENTIFIED BY '<Main DB AC Schema Password>';\nGRANT ALL PRIVILEGES ON *.* TO '<Main DB VE User>'@'::1';\n  \nFLUSH PRIVILEGES;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            metastring: "title='Example'",
            children: "ALTER USER 'root'@'127.0.0.1' IDENTIFIED BY 'admin1234!';\nGRANT ALL PRIVILEGES ON *.* TO 'root'@'127.0.0.1';\nFLUSH PRIVILEGES;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ip-주소로-통신-설정",
      children: "IP 주소로 통신 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래 설정을 통해 강제로 IP 주소로 통신하도록 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "를 설치한 다음 경로로 이동하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "C:\\Program Files\\BioStar X\\ta\\mariadb-11.4.4-winx64"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "my.cnf"
          }), " 파일을 권리자 권한으로 열고 [mysqld] 섹션에 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "skip-name-resolve"
          }), " 옵션을 추가하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            children: "[mysqld]\nport = 3312\ncharacter-set-server=utf8\ncollation-server=utf8_unicode_ci\nsocket = /tmp/mysql.sock\nskip-external-locking\nkey_buffer_size = 32M\nmax_allowed_packet = 64M\n...\nskip-name-resolve\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MariaDB 서비스를 재시작하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-sub-db",
      children: "보조 데이터베이스 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "보조 데이터베이스를 추가하는 방법을 안내합니다. 사용하는 데이터베이스 종류에 따라 MariaDB와 SQL Server, 두 가지 방법이 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mariadb",
      children: "MariaDB"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "메인-데이터베이스",
          children: "메인 데이터베이스"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "신규 보조 데이터베이스에서 메인 데이터베이스로 접근할 수 있도록 계정 및 권한을 부여하세요."
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            children: "CREATE USER '<Main DB AC Schema User>'@'<Sub DB IP>' IDENTIFIED BY '<Main DB AC Schema Password>';\n\nGRANT ALL PRIVILEGES ON <Main DB AC Schema>.* TO '<Main DB AC Schema User>'@'<Sub DB IP>';\nFLUSH PRIVILEGES;\n"
          })
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            metastring: "title='Example'",
            children: "CREATE USER 'biostarx_ac_user'@'192.168.12.42' IDENTIFIED BY 'password';\n\nGRANT ALL PRIVILEGES ON biostar2_ac.* TO 'biostarx_ac_user'@'192.168.12.42';\nFLUSH PRIVILEGES;\n"
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "보조-데이터베이스",
          children: "보조 데이터베이스"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "메인 데이터베이스에서 신규 보조 데이터베이스로 접근할 수 있도록 계정 및 권한을 부여하세요."
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            children: "CREATE USER '<Sub DB AC Schema User>'@'<Main DB IP>' IDENTIFIED BY '<Sub DB AC Schema Password>';\n\nGRANT ALL PRIVILEGES ON <Sub DB AC Schema>.* TO '<Sub DB AC Schema User>'@'<Main DB IP>';\nFLUSH PRIVILEGES;\n"
          })
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            metastring: "title='Example'",
            children: "CREATE USER 'biostarx_ac_user'@'192.168.12.161' IDENTIFIED BY 'password';\n\nGRANT ALL PRIVILEGES ON biostar2_ac.* TO 'biostarx_ac_user'@'192.168.12.161';\nFLUSH PRIVILEGES;\n"
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "federatedx-사용-여부-확인",
          children: "FederatedX 사용 여부 확인"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "메인 및 보조 데이터베이스에서 아래 명령어를 실행해 FederatedX 스토리지 엔진이 활성화되어 있는지 확인하세요."
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            children: "SHOW ENGINES;\n"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["쿼리 결과에 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Engine : FEDERATED, Support : YES"
          }), "라고 표시되면 이미 설치되어 있습니다. FederatedX 스토리지 엔진이 설치되어 있지 않다면 아래 쿼리를 실행하세요."]
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            children: "INSTALL PLUGIN federated SONAME 'ha_federatedx';\n"
          })
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["MariaDB를 설치한 경로 하위에서 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "lib/plugin"
            }), " 폴더에 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "ha_federatedx.dll"
            }), " 파일이 있는지 확인하세요. 일반적으로 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "C:\\Program Files\\MariaDB {version}\\lib\\plugin"
            }), " 경로에 dll 파일이 존재합니다."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "서버-별칭-등록",
          children: "서버 별칭 등록"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "보조 데이터베이스에 생성될 federatedX 테이블이 메인 데이터베이스의 원본 테이블에 접근할 수 있도록 서버 별칭(alias)을 등록하세요."
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            children: "CREATE SERVER 'default' FOREIGN DATA WRAPPER mysql OPTIONS (HOST '<Main DB IP>', PORT <Main DB PORT>, DATABASE '<Main DB AC Schema>', USER '<Main DB AC USER>', PASSWORD '<Main DB AC USER Password>');\n\n-- 정상 등록 확인\nSELECT * FROM mysql.servers;\n"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기존 등록한 서버 이름에 Host, Port, DB, User, Password에 대한 정보를 변경해야 한다면 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Alter"
          }), " 문으로 수정할 수 있습니다. 일부 정보만 변경할 수도 있습니다."]
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            children: "ALTER SERVER 'default' OPTIONS (HOST '<Main DB IP>', PORT <Main DB PORT>, DATABASE '<Main DB AC Schema>', USER '<Main DB AC USER>', PASSWORD '<Main DB AC USER Password>');\n"
          })
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            metastring: "title='Example'",
            children: "CREATE SERVER 'default' FOREIGN DATA WRAPPER mysql OPTIONS (HOST '192.168.12.161', PORT 3312, DATABASE 'biostar2_ac', USER 'biostarx_ac_user', PASSWORD 'password');\n  \nALTER SERVER 'default' OPTIONS (HOST '192.168.12.161', PORT 3312, DATABASE 'biostar2_ac', USER 'biostarx_ac_usermt__fttid__', PASSWORD 'password');\n"
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "테이블-link-설정",
          children: "테이블 link 설정"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "보조 데이터베이스에 필요한 테이블은 아래 순서대로 진행해서 메인 데이터베이스의 테이블을 보조 데이터베이스에 link 설정하세요."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["아래는 메인 데이터베이스에서 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "CREATE TABLE"
              }), " 문 쿼리 생성 쿼리입니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-sql",
                children: "select\n  concat(\n      'CREATE TABLE IF NOT EXISTS <SubDB_AC_Database_Schema>.', table_name,\n      ' ENGINE=FEDERATED ',\n      'CONNECTION=''default/', table_name, ''';'\n  ) as create_table_sql\nfrom information_schema.TABLES\nwhere TABLE_SCHEMA = '<MainDB_AC_Database_Schema>'\n    AND TABLE_TYPE = 'BASE TABLE'\n    AND NOT TABLE_NAME REGEXP '^t_lg[0-9]{6}$'\n    AND NOT TABLE_NAME REGEXP '^t_almevt[0-9]{6}$'\n    AND NOT TABLE_NAME REGEXP '^t_lgalmtrstrc[0-9]{6}$'\nORDER BY TABLE_NAME;\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: ["FederatedX 특성 상 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Table_type"
                }), "이 'BASE TABLE'으로 설정하는 것을 권장합니다. ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "VIEW type"
                }), "도 가능하지만 권장하지는 않습니다."]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["위 쿼리를 통해서 생성된 아래 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "CREATE"
              }), " 문을 보조 데이터베이스에 반드시 입력하세요."]
            }), "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "service-manager-설정",
          children: "Service Manager 설정"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Service Manager"
              }), "를 실행하세요. (", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Service Manager"
              }), ")"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "DATABASE"
              }), " 메뉴를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "+ Add Database"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "데이터베이스 추가 화면에서 각 항목을 입력하세요."
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/biostarx-subdb-sm-add-database.png",
              alone: true
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "Name"
                  }), ": 데이터베이스 이름을 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "Description"
                  }), ": 데이터베이스 설명을 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "DB Type"
                  }), ": 데이터베이스 유형을 선택하세요. (Maria, MS SQL)"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "Host"
                  }), ": 데이터베이스 서버의 호스트 이름 또는 IP 주소를 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "Port"
                  }), ": 데이터베이스 서버의 포트 번호를 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "AC"
                  }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                    children: "TA"
                  }), ": AC, TA 데이터베이스의 이름, 사용자, 비밀번호를 입력하세요."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["데이터베이스가 정상 연결되었는지 확인하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Test Connection"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["설정을 저장하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Save"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sqlserver",
      children: "SQL Server"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "메인-데이터베이스-권한-부여",
          children: "메인 데이터베이스 권한 부여"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "sysadmin 권한을 가진 계정으로 메인 데이터베이스에 아래 권한을 부여하세요."
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            children: "GRANT ALTER ANY LINKED SERVER TO [<MAIN DATABASE AC USER>];\nGRANT ALTER ANY LOGIN TO [<MAIN DATABASE AC USER>];\n"
          })
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            metastring: "title='Example'",
            children: "GRANT ALTER ANY LINKED SERVER TO [biostar_x_user];\nGRANT ALTER ANY LOGIN TO [biostar_x_user];\n"
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "보조-데이터베이스-권한-부여",
          children: "보조 데이터베이스 권한 부여"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["sysadmin 권한을 가진 계정으로 보조 데이터베이스에 테이블 및 사용자에 대한 User Mapping 연결이 필요합니다. 이 때 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "db_owner"
              }), " 역할 추가가 필요합니다."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/biostarx-subdb-user-mapping.png",
              alone: true
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "추가할 데이터베이스에 아래 권한을 부여하세요."
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-sql",
                children: "GRANT ALTER ANY LINKED SERVER TO [<SUB DATABASE AC USER>];\nGRANT ALTER ANY LOGIN TO [<SUB DATABASE AC USER>];\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-sql",
                metastring: "title='Example'",
                children: "GRANT ALTER ANY LINKED SERVER TO [biostar_x_user_sub];\nGRANT ALTER ANY LOGIN TO [biostar_x_user_sub];\n"
              })
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "service-manager-설정-1",
          children: "Service Manager 설정"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Service Manager"
          }), "를 통해서 보조 데이터베이스를 추가하세요."]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Service Manager"
              }), "를 실행하세요. (", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Service Manager"
              }), ")"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "DATABASE"
              }), " 메뉴를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "+ Add Database"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "데이터베이스 추가 화면에서 각 항목을 입력하세요."
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/biostarx-subdb-sm-add-database.png",
              alone: true
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "Name"
                  }), ": 데이터베이스 이름을 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "Description"
                  }), ": 데이터베이스 설명을 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "DB Type"
                  }), ": 데이터베이스 유형을 선택하세요. (Maria, MS SQL)"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "Host"
                  }), ": 데이터베이스 서버의 호스트 이름 또는 IP 주소를 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "Port"
                  }), ": 데이터베이스 서버의 포트 번호를 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "AC"
                  }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                    children: "TA"
                  }), ": AC, TA 데이터베이스의 이름, 사용자, 비밀번호를 입력하세요."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["데이터베이스가 정상 연결되었는지 확인하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Test Connection"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["설정을 저장하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Save"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "설정을 완료하고, 메인 데이터베이스와 보조 데이터베이스에 각각 Linked Server 설정이 자동 진행됩니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "데이터베이스 정보를 수정할 때에도 Linked Server 설정은 자동 변경됩니다. 메인 데이터베이스를 수정할 때에는 등록되어 있는 모든 보조 데이터베이스에 Linked Server 설정이 변경된 정보로 반영됩니다. 보조 데이터베이스를 수정할 때에는 메인 데이터베이스와 해당 보조 데이터베이스만 변경된 정보로 반영됩니다."
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "linked-temp-table-쿼리문-생성",
          children: "Linked Temp Table 쿼리문 생성"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "메인 데이터베이스에서 아래 쿼리 실행해서 보조 데이터베이스에 생성할 Linked Temp Table 쿼리문을 생성하세요."
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            children: "USE [<AC Schema>];\nGO\nDECLARE @LinkedServer  sysname = N'default';\nDECLARE @SourceSchema  sysname = N'dbo';\nDECLARE @TargetSchema  sysname = N'dbo';\n \nSELECT\n    'IF OBJECT_ID(N''' + QUOTENAME(@TargetSchema,'') + '.' + QUOTENAME(t.name,'') + ''', ''SN'') IS NOT NULL '\n  + 'DROP SYNONYM ' + QUOTENAME(@TargetSchema) + '.' + QUOTENAME(t.name) + ';'\n  + 'CREATE SYNONYM ' + QUOTENAME(@TargetSchema) + '.' + QUOTENAME(t.name)\n  + ' FOR ' + QUOTENAME(@LinkedServer) + '.' + QUOTENAME(DB_NAME()) + '.' + QUOTENAME(s.name) + '.' + QUOTENAME(t.name) + ';'\n  AS recreate_synonym_sql\nFROM sys.tables AS t\nJOIN sys.schemas AS s\n  ON s.schema_id = t.schema_id\nWHERE s.name = @SourceSchema\n  AND t.is_ms_shipped = 0\n  AND t.name NOT LIKE 't_lg[0-9][0-9][0-9][0-9][0-9][0-9]'\n  AND t.name NOT LIKE 't_almevt[0-9][0-9][0-9][0-9][0-9][0-9]'\n  AND t.name NOT LIKE 't_lgalmtrstrc[0-9][0-9][0-9][0-9][0-9][0-9]'\nORDER BY t.name;\n"
          })
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            metastring: "title='Example'",
            children: "-- 예시\nUSE [main_ac_x_215];\nGO\nDECLARE @LinkedServer  sysname = N'default';  -- Linked Server name set in the sub DB\nDECLARE @SourceSchema  sysname = N'dbo';      -- Schema to target in the main DB\nDECLARE @TargetSchema  sysname = N'dbo';      -- Schema to create synonyms in the sub DB (reflected in the output string)\n\nSELECT\n    'IF OBJECT_ID(N''' + QUOTENAME(@TargetSchema,'') + '.' + QUOTENAME(t.name,'') + ''', ''SN'') IS NOT NULL '\n  + 'DROP SYNONYM ' + QUOTENAME(@TargetSchema) + '.' + QUOTENAME(t.name) + ';'\n  + 'CREATE SYNONYM ' + QUOTENAME(@TargetSchema) + '.' + QUOTENAME(t.name)\n  + ' FOR ' + QUOTENAME(@LinkedServer) + '.' + QUOTENAME(DB_NAME()) + '.' + QUOTENAME(s.name) + '.' + QUOTENAME(t.name) + ';'\n  AS recreate_synonym_sql\nFROM sys.tables AS t\nJOIN sys.schemas AS s\n  ON s.schema_id = t.schema_id\nWHERE s.name = @SourceSchema\n  AND t.is_ms_shipped = 0\n  AND t.name NOT LIKE 't_lg[0-9][0-9][0-9][0-9][0-9][0-9]'\n  AND t.name NOT LIKE 't_almevt[0-9][0-9][0-9][0-9][0-9][0-9]'\n  AND t.name NOT LIKE 't_lgalmtrstrc[0-9][0-9][0-9][0-9][0-9][0-9]'\nORDER BY t.name;\n"
          })
        }), (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["위 쿼리문을 통해 생성되는 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE"
            }), " 문 예시입니다."]
          }), (0,jsx_runtime.jsx)(_bsx_sub_db_create_table_query_mssql_MDXContent, {})]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "보조-데이터베이스에-쿼리문-실행",
          children: "보조 데이터베이스에 쿼리문 실행"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["앞서 생성된 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CREATE SYNONYM"
          }), " 쿼리를 전체 복사하세요. 추가할 보조 데이터베이스 서버로 접속해서 아래와 같이 쿼리를 작성하고 실행하세요. 보조 데이터베이스의 AC 스키마 안에 Synonyms(동의어)에 저장됩니다."]
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            children: "use [<Sub DB AC Database>];\n\nIF OBJECT_ID(N'[dbo].[T_ACSGR]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ACSGR];CREATE SYNONYM [dbo].[T_ACSGR] FOR [default].[main_ac_x_215].[dbo].[T_ACSGR];\nIF OBJECT_ID(N'[dbo].[T_ACSGRLVLS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ACSGRLVLS];CREATE SYNONYM [dbo].[T_ACSGRLVLS] FOR [default].[main_ac_x_215].[dbo].[T_ACSGRLVLS];\nIF OBJECT_ID(N'[dbo].[T_ACSGRSENT]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ACSGRSENT];CREATE SYNONYM [dbo].[T_ACSGRSENT] FOR [default].[main_ac_x_215].[dbo].[T_ACSGRSENT];\nIF OBJECT_ID(N'[dbo].[T_ACSGRUSS]', 'SN') IS NOT NULL DROP SYNONYM [dbo].[T_ACSGRUSS];CREATE SYNONYM [dbo].[T_ACSGRUSS] FOR [default].[main_ac_x_215].[dbo].[T_ACSGRUSS];\n...\n"
          })
        })]
      })]
    })]
  });
}
function add_sub_db_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(add_sub_db_createMdxContent, {
      ...props
    })
  }) : add_sub_db_createMdxContent(props);
}
function add_sub_db_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
84429: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


}),

}]);