import MDXComponents from '@theme-original/MDXComponents';
import Cmd from '@site/src/components/Cmd';
import Include from '@site/src/components/Include';
import Xclude from '@site/src/components/Xclude';
import { Steps, Step } from '@site/src/components/Steps';
import { Folder, File } from '@site/src/components/Files';
import Head from '@site/src/components/Head';
import Image from '@site/src/components/Image';
import DocsSidebar from '@site/src/components/Toc';
import Collection from "@site/src/components/Collection";
import Kbd from '@site/src/components/Kbd';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';
import Columns from '@site/src/components/Columns';
import Column from '@site/src/components/Column';
import { Table, Thead, Th, Tbody, Row, Td } from '@site/src/components/Table';
import { Start } from '@site/src/components/Winkey';
import { NextStep, NextItem } from '@site/src/components/NextStep';
import { Glossary, GlossaryAll } from '@site/src/components/Glossary';
import Num from '@site/src/components/Num';
import { StatusOK, StatusFail, StatusUpdating, StatusNormal } from '@site/src/components/Status';
import Overview from '@site/src/components/Overview';
import Separator from '@site/src/components/Separator';
import Badge from '@site/src/components/Badge';
import BugLists from '@site/src/components/BugLists';
import Jira from '@site/src/components/Jira';
import { Productpart, Callout, Item } from '@site/src/components/Productpart';
import { SpecSection, SpecSizeWieght, Anno } from '@site/src/components/Specs';
import Faqs from '@site/src/components/Faqs';
import { FaqsItems } from '@site/src/components/Faqs';
import Calloutlists from '@site/src/components/Calloutlists';
import DocLink from '@site/src/components/DocLink';
import Treeview from '@site/src/components/Treeview';
import YouTube from 'react-youtube';
import PageBreak from '@site/src/components/Pagebreak';
import Magnify from "@site/src/components/Magnify";
// icon images svg
import IcLicense from '@site/static/img/menus/ico-license.svg';
import IcAdd from '@site/static/img/menus/ico-add.svg';
import IcMinus from '@site/static/img/menus/ico-minus.svg';
import IcClose from '@site/static/img/menus/ico-close.svg';
import IcCamera from '@site/static/img/menus/ico-camera.svg';
import IcUpload from '@site/static/img/menus/ico-upload.svg';
import IcTrash from '@site/static/img/menus/ico-trash.svg';
import IcDown from '@site/static/img/menus/ico-down-arrow.svg';
import IcUp from '@site/static/img/menus/ico-up-arrow.svg';
import IcMoreB from '@site/static/img/menus/ico-more-black.svg';
import IcMoreW from '@site/static/img/menus/ico-more-white.svg';
import IcErr from '@site/static/img/menus/ico-err.svg';
import IcNotsync from '@site/static/img/menus/ico-notsync.svg';
import IcDoorClose from '@site/static/img/menus/ico-door-close.svg';
import IcDoorOpen from '@site/static/img/menus/ico-door-open.svg';
import IcDoorSensor from '@site/static/img/menus/ico-door-sensor.svg';
import IcRelayLock from '@site/static/img/menus/ico-relay-lock.svg';
import IcRelayUnlock from '@site/static/img/menus/ico-relay-unlock.svg';
import IcArm from '@site/static/img/menus/ico-arms.svg';
import IcDisarm from '@site/static/img/menus/ico-disarms.svg';
import IcZone from '@site/static/img/menus/ico-zone.svg';
import IcDisable from '@site/static/img/menus/ico-disable.svg';
import IcFullscreen from '@site/static/img/menus/ico-fullscreen.svg';
import IcRestorscreen from '@site/static/img/menus/ico-restorescreen.svg';
import IcPlay from '@site/static/img/menus/ico-play.svg';
import IcPause from '@site/static/img/menus/ico-pause.svg';
import IcAlarm from '@site/static/img/menus/ico-alarm.svg';
import IcFilter from '@site/static/img/menus/ico-filter.svg';
import IcFilter2 from '@site/static/img/menus/ico-filter2.svg';
import IcMove from '@site/static/img/menus/ico-move.svg';
import IcBack from '@site/static/img/menus/ico-back.svg';
import IcSvTime from '@site/static/img/menus/ico-serverTime.svg';
import IcAccount from '@site/static/img/menus/ico-account.svg';
import IcHelp from '@site/static/img/menus/ico-help.svg';
import IcAibtn from '@site/static/img/menus/ico-aibtn.svg';
import IcAdvSearch from '@site/static/img/menus/ico-adv-search.svg';
import IcSearch from '@site/static/img/menus/ico-search.svg';
import IcFw from '@site/static/img/menus/ico-move-forward.svg';
import IcBw from '@site/static/img/menus/ico-move-backward.svg';
import IcFirst from '@site/static/img/menus/ico-first-page.svg';
import IcLast from '@site/static/img/menus/ico-last-page.svg';
import IcFw2 from '@site/static/img/menus/ico-move-forward2.svg';
import IcBw2 from '@site/static/img/menus/ico-move-backward2.svg';
import IcFirst2 from '@site/static/img/menus/ico-first-page2.svg';
import IcLast2 from '@site/static/img/menus/ico-last-page2.svg';
import IcAscend from '@site/static/img/menus/ico-ascend.svg';
import IcDescend from '@site/static/img/menus/ico-descend.svg';
import IcSet from '@site/static/img/menus/ico-setting.svg';
import IcEdit from '@site/static/img/menus/ico-edit.svg';
import IcEdit2 from '@site/static/img/menus/ico-edit2.svg';
import IcEditUL from '@site/static/img/menus/ico-edit-underline.svg';
import IcTrash2 from '@site/static/img/menus/ico-trash2.svg';
import IcRepTrash from '@site/static/img/menus/ico-report-trash.svg';
import IcSet2 from '@site/static/img/menus/ico-setting2.svg';
import IcTslot from '@site/static/img/menus/ico-timeslot-add.svg';
import IcEraser from '@site/static/img/menus/ico-eraser.svg';
import IcCalc from '@site/static/img/menus/ico-calendar.svg';
import IcCopy2 from '@site/static/img/menus/ico-copy2.svg';
import IcRefresh from '@site/static/img/menus/ico-refresh.svg';
import IcInfo from '@site/static/img/menus/ico-info.svg';
import IcLogout from '@site/static/img/menus/ico-logout.svg';
import IcTips from '@site/static/img/menus/ico-tip.svg';
import IcLrot from '@site/static/img/menus/ico-left-rotation.svg';
import IcRrot from '@site/static/img/menus/ico-right-rotation.svg';
import IcCrop from '@site/static/img/menus/ico-crop.svg';
import IcFremove from '@site/static/img/menus/ico-floor-remove.svg';
import IcCamrot from '@site/static/img/menus/ico-camera-rotation.svg';
import IcDorder from '@site/static/img/menus/ico-dorder.svg';
import IcCurP from '@site/static/img/menus/ico-cur-position.svg';
import IcCamFail from '@site/static/img/menus/ico-camera-fail.svg';
import IcCamOk from '@site/static/img/menus/ico-camera-ok.svg';
import IcMapmore from '@site/static/img/menus/ico-map-more.svg';
import IcAlert from '@site/static/img/menus/ico-door-alert.svg';
import IcVidLog from '@site/static/img/menus/ico-vid-log.svg';
import IcReportVid from '@site/static/img/menus/ico-report-vidlog.svg';
import IcViewAlert from '@site/static/img/menus/ico-view-alert.svg';
import IcRepoEdit from '@site/static/img/menus/ico-report-edit.svg';
import IcZoom from '@site/static/img/menus/ico-zoom.svg';
import IcFLockDr from '@site/static/img/menus/ico-floor-locked-door.svg';
import IcFUlockDr from '@site/static/img/menus/ico-floor-unlock-door.svg';
import IcRCplay from '@site/static/img/menus/ico-app-rollcall-play.svg';
import IcRCstop from '@site/static/img/menus/ico-app-rollcall-stop.svg';
import IcRCdone from '@site/static/img/menus/ico-app-rollcall-done.svg';
import IcRCinfo from '@site/static/img/menus/ico-app-rollcall-info.svg';
import IcRCmemo from '@site/static/img/menus/ico-app-rollcall-memo.svg';
import IcImgLog from '@site/static/img/menus/ico-imagelog.svg';
import IcList from '@site/static/img/menus/ico-list.svg';
import IcTnaExpand from '@site/static/img/menus/ico-tna-expand.svg';
import IcInfinity from '@site/static/img/menus/ico-infinity.svg';
import IcAirEdit from '@site/static/img/menus/ico-air-edit.svg';
import IcAirRemove from '@site/static/img/menus/ico-air-remove.svg';
import IcAirMore from '@site/static/img/menus/ico-air-more.svg';
import IcAirUpface from '@site/static/img/menus/ico-air-upface.svg';
import IcAirGroup from '@site/static/img/menus/ico-air-group.svg';
import IcAirDef from '@site/static/img/menus/ico-air-default.svg';
import IcAirL from '@site/static/img/menus/ico-air-left.svg';
import IcAirR from '@site/static/img/menus/ico-air-right.svg';
import IcAirLock from '@site/static/img/menus/ico-air-lock.svg';
import IcAirMtag from '@site/static/img/menus/ico-air-mobile-tag.svg';
import IcAirDown from '@site/static/img/menus/ico-air-down.svg';
import IcAirFaceLink from '@site/static/img/menus/ico-air-face-link.svg';
import IcAirFilterReset from '@site/static/img/menus/ico-air-filter-reset.svg';
import IcAirUtemplate from '@site/static/img/menus/ico-air-user-template.svg';
import IcAirReport from '@site/static/img/menus/ico-air-report.svg';
import IcAirFilter from '@site/static/img/menus/ico-air-filter.svg';
import IcAirActive from '@site/static/img/menus/ico-air-active.svg';
import IcAirReissue from '@site/static/img/menus/ico-air-reissue.svg';
import IcAirSuspend from '@site/static/img/menus/ico-air-suspend.svg';
import IcAirRef from '@site/static/img/menus/ico-air-refresh.svg';
import IcAirFw from '@site/static/img/menus/ico-air-fw.svg';
import IcAirCloud from '@site/static/img/menus/ico-air-cloud.svg';
import IcAirByte from '@site/static/img/menus/ico-air-byte.svg';
import IcAirDset from '@site/static/img/menus/ico-air-setting.svg';
import IcAirUpd from '@site/static/img/menus/ico-air-update.svg';
import IcAirColumn from '@site/static/img/menus/ico-air-column-set.svg';
import IcAirSchedule from '@site/static/img/menus/ico-air-schedule.svg';
import IcAirLogfilter from '@site/static/img/menus/ico-air-log-filter.svg';
import IcAirMask from '@site/static/img/menus/ico-air-mask.svg';
import IcAirReportApp from '@site/static/img/menus/ico-air-report-app.svg';
import IcHamberg from '@site/static/img/menus/ico-sp-hamberg.svg';
export default {
    ...MDXComponents,
    Cmd,
    Include,
    Xclude,
    Steps,
    Step,
    Folder,
    File,
    Head,
    Image,
    DocsSidebar,
    Collection,
    Kbd,
    Tabs,
    TabItem,
    DocCardList,
    Columns,
    Column,
    Table,
    Thead,
    Th,
    Tbody,
    Row,
    Td,
    Start,
    NextStep,
    NextItem,
    Glossary,
    GlossaryAll,
    Num,
    StatusOK,
    StatusFail, StatusUpdating, StatusNormal,
    Overview,
    Separator,
    Badge,
    BugLists,
    Jira,
    Productpart, Callout, Item,
    SpecSection, SpecSizeWieght, Anno,
    Faqs, FaqsItems, Calloutlists, DocLink, Treeview, YouTube, PageBreak, Magnify,
    IcSvTime, IcAccount, IcHelp, IcAibtn,
    IcLicense,
    IcAdd, IcMinus,
    IcClose,
    IcCamera,
    IcUpload,
    IcTrash,
    IcTrash2,
    IcDown,
    IcUp,
    IcMoreB,
    IcMoreW,
    IcErr,
    IcNotsync,
    IcDoorClose,
    IcDoorOpen, IcDoorSensor,
    IcRelayLock,
    IcRelayUnlock,
    IcArm,
    IcDisarm, IcZone,
    IcDisable,
    IcFullscreen,
    IcRestorscreen,
    IcPlay,
    IcPause,
    IcAlarm,
    IcFilter, IcFilter2,
    IcMove,
    IcBack,
    IcAdvSearch, IcSearch,
    IcFw, IcBw, IcFirst, IcLast, IcAscend, IcDescend, IcSet, IcEdit, IcEdit2, IcEditUL,
    IcFw2, IcBw2, IcFirst2, IcLast2, IcSet2, IcTslot, IcEraser, IcCalc, IcCopy2, IcRefresh, IcInfo, IcLogout, IcTips, IcLrot, IcRrot, IcCrop, IcFremove, IcCamrot, IcDorder, IcCurP, IcCamFail, IcCamOk, IcMapmore, IcAlert, IcVidLog, IcReportVid, IcViewAlert, IcRepTrash, IcRepoEdit, IcZoom, IcFLockDr, IcFUlockDr, IcRCplay, IcRCstop, IcRCdone, IcRCinfo, IcRCmemo, IcImgLog, IcList, IcTnaExpand, IcInfinity, IcAirEdit, IcAirRemove, IcAirMore, IcAirUpface, IcAirGroup, IcAirDef, IcAirL, IcAirR, IcAirLock, IcAirMtag, IcAirDown, IcAirFaceLink, IcAirFilterReset, IcAirUtemplate, IcAirReport, IcAirFilter, IcAirActive, IcAirReissue, IcAirSuspend, IcAirRef, IcAirFw, IcAirCloud, IcAirByte, IcAirDset, IcAirUpd, IcAirColumn, IcAirSchedule, IcAirLogfilter, IcAirMask, IcAirReportApp, IcHamberg
}