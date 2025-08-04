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
import { StatusOK, StatusFail } from '@site/src/components/Status';
import Overview from '@site/src/components/Overview';
import Separator from '@site/src/components/Separator';
import Badge from '@site/src/components/Badge';
import BugLists from '@site/src/components/BugLists';
import Jira from '@site/src/components/Jira';
import { Productpart, Callout, Item } from '@site/src/components/Productpart';
import { SpecSectioin, SpecSizeWieght, Anno } from '@site/src/components/Specs';
import Faqs from '@site/src/components/Faqs';
import { FaqsItems } from '@site/src/components/Faqs';
import Calloutlists from '@site/src/components/Calloutlists';
import DocLink from '@site/src/components/DocLink';
import YouTube from 'react-youtube';
// icon images svg
import IcLicense from '@site/static/img/menus/ico-license.svg';
import IcAdd from '@site/static/img/menus/ico-add.svg';
import IcMinus from '@site/static/img/menus/ico-minus.svg';
import IcClose from '@site/static/img/menus/ico-close.svg';
import IcCamera from '@site/static/img/menus/ico-camera.svg';
import IcUpload from '@site/static/img/menus/ico-upload.svg';
import IcTrash from '@site/static/img/menus/ico-trash.svg';
import IcDown from '@site/static/img/menus/ico-down-arrow.svg';
import IcMoreB from '@site/static/img/menus/ico-more-black.svg';
import IcMoreW from '@site/static/img/menus/ico-more-white.svg';
import IcErr from '@site/static/img/menus/ico-err.svg';
import IcNotsync from '@site/static/img/menus/ico-notsync.svg';
import IcDoorClose from '@site/static/img/menus/ico-door-close.svg';
import IcDoorOpen from '@site/static/img/menus/ico-door-open.svg';
import IcRelayLock from '@site/static/img/menus/ico-relay-lock.svg';
import IcRelayUnlock from '@site/static/img/menus/ico-relay-unlock.svg';
import IcArm from '@site/static/img/menus/ico-arms.svg';
import IcDisarm from '@site/static/img/menus/ico-disarms.svg';
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
import IcAccout from '@site/static/img/menus/ico-account.svg';
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
    StatusFail,
    Overview,
    Separator,
    Badge,
    BugLists,
    Jira,
    Productpart, Callout, Item,
    SpecSectioin, SpecSizeWieght, Anno,
    Faqs, FaqsItems, Calloutlists, DocLink, YouTube,
    IcSvTime, IcAccout, IcHelp, IcAibtn,
    IcLicense,
    IcAdd, IcMinus,
    IcClose,
    IcCamera,
    IcUpload,
    IcTrash,
    IcTrash2,
    IcDown,
    IcMoreB,
    IcMoreW,
    IcErr,
    IcNotsync,
    IcDoorClose,
    IcDoorOpen,
    IcRelayLock,
    IcRelayUnlock,
    IcArm,
    IcDisarm,
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
    IcFw2, IcBw2, IcFirst2, IcLast2, IcSet2, IcTslot, IcEraser, IcCalc, IcCopy2, IcRefresh, IcInfo, IcLogout, IcTips, IcLrot, IcRrot, IcCrop, IcFremove, IcCamrot, IcDorder, IcCurP, IcCamFail, IcCamOk
}