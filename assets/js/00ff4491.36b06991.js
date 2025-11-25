"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["62478"], {
20993: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "2025년 5월 이전에 BioStar Air 출입 통제 서비스를 사용하기 시작한 고객은 현재 Suprema Pass 앱으로 새로 설계된 Airfob Space 앱을 계속 사용할 수 있습니다. 두 앱 모두 동일한 기능을 제공하며 완벽하게 호환됩니다. 기존 사용자는 전환할 필요가 없으며, 모바일 인증 정보가 두 앱 모두에서 원활하게 작동합니다."
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
4328: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_02_user_management_managing_users_mdx_00f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-02-user-management-managing-users-mdx-00f.json
var site_docs_platform_biostar_air_02_user_management_managing_users_mdx_00f_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-users","title":"사용자 관리하기","description":"BioStar Air 포털에서 사용자 관리 및 대량 작업 수행, 자격 증명(모바일 카드, RFID, 얼굴 인식, PIN, 웹 카드)을 추가 및 구성, 액세스 등급 설정, 사용자 그룹 관리, 유효 기간 구성 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/02-user-management-managing-users.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-users","permalink":"/docs/platform/biostar_air/managing-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/02-user-management-managing-users.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"managing-users","title":"사용자 관리하기","description":"BioStar Air 포털에서 사용자 관리 및 대량 작업 수행, 자격 증명(모바일 카드, RFID, 얼굴 인식, PIN, 웹 카드)을 추가 및 구성, 액세스 등급 설정, 사용자 그룹 관리, 유효 기간 구성 방법을 안내합니다.","keywords":["사용자 관리","BioStar Air","사용자 그룹","출입 권한"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"사이트 선택(Site Selector)","permalink":"/docs/platform/biostar_air/biostar-air-login"},"next":{"title":"사용자 추가하기","permalink":"/docs/platform/biostar_air/adding-individual-users"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(20993);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/02-user-management-managing-users.mdx


const frontMatter = {
	id: 'managing-users',
	title: '사용자 관리하기',
	description: 'BioStar Air 포털에서 사용자 관리 및 대량 작업 수행, 자격 증명(모바일 카드, RFID, 얼굴 인식, PIN, 웹 카드)을 추가 및 구성, 액세스 등급 설정, 사용자 그룹 관리, 유효 기간 구성 방법을 안내합니다.',
	keywords: [
		'사용자 관리',
		'BioStar Air',
		'사용자 그룹',
		'출입 권한'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*

## 사용자 정보 개요 \{#user-information-overview}

사용자 목록에서 각 사용자에 대한 필수 세부정보를 볼 수 있습니다.

* **User Type**: Regular 또는 Temporary로 구분합니다. (BioStar Air 2.6 버전에서 도입).

* **Name**: 사용자의 이름입니다.

* **Unique ID**: 각 사용자에게 할당된 고유 식별 번호입니다.

* **Card Type**: 사용자에게 발급된 크리덴셜의 유형입니다.

* **Validity**: 발급된 크리덴셜의 만료 상태입니다.

* **Status**: 사용자가 *활성화* 또는 *비활성화* 상태인지 여부입니다.

* **User Group**: 사용자가 속한 그룹입니다.

* **Access Levels**: 사용자에게 할당된 액세스 권한입니다.


## 사용자 관리 \{#managing-users}

### 일괄 작업 실행하기 \{#performing-bulk-actions}

여러 사용자에게 일괄 작업을 실행할 수 있습니다.

1. 사용자 목록에서 사용자의 체크박스를 클릭해 선택하세요.

1. 사용할 수 있는 일괄 작업을 선택하세요.

* **Activate**: 선택한 사용자를 활성화합니다.

* **Reissue**: 업데이트된 크리덴셜이 포함된 새 이메일을 보냅니다.

* **Suspend**: 사용자를 일시적으로 비활성화합니다.

* **Delete**: 사용자를 영구적으로 삭제합니다.

### 사용자 그룹 관리 \{#managing-user-groups}

사용자를 그룹에 할당할 수 있습니다.

1. 사용자 목록에서 그룹에 할당할 사용자를 선택하세요.

1. **User Group** 아이콘을 클릭하세요.

1. 원하는 그룹을 선택하고 변경 사항을 확인하세요.

### 출입 등급 설정하기 \{#setting-access-levels}

여러 사용자의 출입 등급을 구성할 수 있습니다.

1. 사용자 목록에서 출입 등급을 구성할 사용자를 선택하세요.

1. **Access Level** 아이콘을 클릭하세요.

1. 적절한 출입 등급을 선택하고 확인하세요.

### 사용자 템플릿 사용자화 \{#customizing-user-templates}

사용자 필드를 생성하거나 수정할 수 있습니다.

1. **User Template**을 클릭하세요.

1. 각 사용자의 프로필 카드에 표시될 필드를 추가하거나 수정하세요.

### 데이터 내보내기 또는 업로드 \{#exporting-and-uploading-data}

* 선택한 사용자를 내보내려면 **Export** 아이콘을 클릭하세요.

* 프로필 사진을 일괄 업로드하려면 **Image Upload**를 클릭하세요.

### 사용자 필터링 \{#filtering-users}

특정 기준에 따라 사용자를 필터링할 수 있습니다.

1. **Card Type** (예: RFID 카드), **User Status**, 또는 **User Group**과 같은 필터를 사용하세요.

1. **OK**를 클릭하여 필터를 적용하세요.

1. 필터를 제거하려면 **Clear Filters**를 클릭하고 확인하세요.


## 개별 사용자의 프로필 보기 및 수정 \{#viewing-and-editing-individual-user-profiles}

사용자의 세부 프로필에 액세스하려면:

1. 사용자 목록에서 사용자의 이름을 클릭하세요.

1. 사용자의 정보를 보고 수정하세요. 여기에는 할당된 카드 및 자격 증명이 포함됩니다.

1. 다음과 같은 작업을 수행하세요:

* **Activate**: 사용자를 활성화합니다.

* **Reissue**: 업데이트된 자격 증명을 보냅니다.

* **Suspend**: 사용자의 액세스를 일시적으로 차단합니다.

* **Delete**: 사용자를 영구적으로 제거합니다.

사용자 정보를 수정하려면 **Edit** 버튼을 클릭하세요.

## 크리덴셜 추가

**Credential Details**에서 관리자는 사용자에게 할당할 크리덴셜 유형을 결정할 수 있습니다. 각 크리덴셜 유형에는 활성화 또는 비활성화할 수 있는 토글 스위치가 있습니다.

먼저 사용자가 **Regular**인지 **Temporary**인지 선택하세요.

* **Regular** 사용자는 모든 지원되는 크리덴셜 유형을 가질 수 있습니다.

* **Temporary** 사용자는 Dynamic QR 코드 및 LinkPass를 포함한 **Web Card** 크리덴셜만 받을 수 있습니다.

### 크리덴셜 유형

* **Mobile Card**: 슈프리마 패스 모바일 크리덴셜입니다. 관리자는 카드 ID 번호를 편집할 수 있습니다.

* **RF Card**: 사용자당 최대 8개의 RFID 카드를 추가할 수 있습니다. 카드 유형(CSN / Wiegand), 카드 ID 번호 및 카드 이름을 구성하여 여러 카드를 쉽게 관리할 수 있습니다. **Scan with Reader**를 클릭하고 리더기를 선택하세요. 연결된 리더기를 사용하여 실물 RFID 카드를 스캔할 수도 있습니다.

* **Web Card**: LinkPass 또는 Dynamic QR입니다.

:::note

Dynamic QR은 사이트 설정에서 QR이 활성화된 경우에만 나타납니다.

:::

* **Face**: 얼굴 프로필 이미지를 최대 2개까지 추가할 수 있습니다. 기존 이미지를 업로드하거나 리더를 통해 등록할 수 있습니다. 또는 이메일로 링크를 보내서 사용자가 모바일 기기의 카메라를 사용해 직접 등록하는 방법도 있습니다.

* **PIN**: 4\~16자리 PIN을 설정하여 2단계 인증(2FA)의 일부로 사용할 수 있습니다.


## 출입 상세

### 크리덴셜 유효 기간 설정

시작 날짜(**필수**)와 종료 날짜(선택 사항)를 설정하세요. 시작 날짜를 설정한 후에는 일반적인 종료 날짜에 대한 단축 버튼을 사용할 수 있습니다.

> **+1D**, **+3D**, **+1W**, **+1Y**, **Manual**, 또는 **Infinite**

### 출입 등급

출입 등급은 영구 할당(크리덴셜과 함께 만료)하거나 일시적으로 할당(크리덴셜 보다 일찍 만료)할 수 있습니다.


<NextStep>
<NextItem to='adding-individual-users'>

BioStar Air에 새로운 사용자를 추가하는 방법은 다음 문서를 참고하세요.

</NextItem>
</NextStep>

*/



const toc = [..._biostarair_customer_notice/* .toc */.RM];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {DocCardList, YouTube} = _components;
  if (!DocCardList) _missingMdxReference("DocCardList", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "이 문서는 BioStar Air에서 사용자 계정을 생성하고, 다양한 크리덴셜(Mobile Card, RF Card, Web Card, Face, PIN)을 설정하며, 출입 권한과 유효 기간을 구성하는 방법을 안내합니다. 개별 사용자 관리부터 여러 사용자에 대한 일괄 작업, 사용자 그룹 및 필터링 관리까지 사용자 관리의 전반적인 작업을 다룹니다."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "사용자 관리 기능은 제공하는 다음 동영상을 통해서 더 쉽게 이해할 수 있습니다."
      }), (0,jsx_runtime.jsx)(YouTube, {
        videoId: "uhFyrQI-N5U"
      })]
    }), "\n", (0,jsx_runtime.jsx)(DocCardList, {}), "\n"]
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