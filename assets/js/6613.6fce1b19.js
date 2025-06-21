(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6613"], {
1841: (function (module, exports, __webpack_require__) {
"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(7294));
const ReferenceCodeBlock_1 = __importDefault(__webpack_require__(5665));
const CodeBlock_1 = __importDefault(__webpack_require__(2834));
const componentWrapper = (Component) => {
    const WrappedComponent = (props) => {
        var _a;
        if (props.reference || ((_a = props.metastring) === null || _a === void 0 ? void 0 : _a.split(' ').includes('reference'))) {
            return (react_1.default.createElement(ReferenceCodeBlock_1.default, { ...props }));
        }
        return react_1.default.createElement(CodeBlock_1.default, { ...props });
    };
    return WrappedComponent;
};
module.exports = componentWrapper(CodeBlock_1.default);
//# sourceMappingURL=index.js.map

}),
5665: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.codeReducer = exports.parseCustomization = exports.parseReference = void 0;
const react_1 = __importStar(__webpack_require__(7294));
const CodeBlock_1 = __importDefault(__webpack_require__(2834));
const DEFAULT_LINK_TEXT = 'See full example on GitHub';
const initialFetchResultState = {
    code: 'loading...',
    error: null,
    loading: null,
};
const noteStyle = {
    fontSize: '.9em',
    fontWeight: 600,
    color: '#0E75DD',
    textAlign: 'center',
    paddingBottom: '13px',
    textDecoration: 'underline',
};
/**
 * parses GitHub reference
 * @param {string} ref url to github file
 */
function parseReference(ref) {
    const fullUrl = ref.slice(ref.indexOf('https'), -1);
    const [url, loc] = fullUrl.split('#');
    /**
     * webpack causes failures when it tries to render this page
     */
    const global = globalThis || {};
    if (!global.URL) {
        // @ts-ignore
        global.URL = URL;
    }
    const [org, repo, blob, branch, ...pathSeg] = new global.URL(url).pathname.split('/').slice(1);
    const [fromLine, toLine] = loc
        ? loc.split('-').map((lineNr) => parseInt(lineNr.slice(1), 10) - 1)
        : [0, Infinity];
    return {
        url: `https://raw.githubusercontent.com/${org}/${repo}/${branch}/${pathSeg.join('/')}`,
        fromLine,
        toLine,
        title: pathSeg.join('/')
    };
}
exports.parseReference = parseReference;
function parseCustomization(metastring) {
    var _a, _b, _c, _d;
    const refTitle = (_b = (_a = metastring === null || metastring === void 0 ? void 0 : metastring.match(/title="(?<title>.*?)"/)) === null || _a === void 0 ? void 0 : _a.groups) === null || _b === void 0 ? void 0 : _b.title;
    const refLinkMatch = metastring === null || metastring === void 0 ? void 0 : metastring.match(/referenceLinkText="(?<referenceLinkText>.*?)"/);
    const refLinkText = (_d = (_c = refLinkMatch === null || refLinkMatch === void 0 ? void 0 : refLinkMatch.groups) === null || _c === void 0 ? void 0 : _c.referenceLinkText) !== null && _d !== void 0 ? _d : DEFAULT_LINK_TEXT;
    const customStylingMatch = metastring === null || metastring === void 0 ? void 0 : metastring.match(/customStyling/);
    const refUseCustomStyling = (customStylingMatch === null || customStylingMatch === void 0 ? void 0 : customStylingMatch.length) === 1;
    const refNoteStyling = (customStylingMatch === null || customStylingMatch === void 0 ? void 0 : customStylingMatch.length) === 1 ? {} : noteStyle;
    return {
        title: refTitle,
        linkText: refLinkText,
        noteStyling: refNoteStyling,
        useCustomStyling: refUseCustomStyling
    };
}
exports.parseCustomization = parseCustomization;
async function fetchCode({ url, fromLine, toLine }, fetchResultStateDispatcher) {
    let res;
    try {
        res = await fetch(url);
    }
    catch (err) {
        return fetchResultStateDispatcher({ type: 'error', value: err });
    }
    if (res.status !== 200) {
        const error = await res.text();
        return fetchResultStateDispatcher({ type: 'error', value: error });
    }
    const body = (await res.text()).split('\n').slice(fromLine, (toLine || fromLine) + 1);
    const preceedingSpace = body.reduce((prev, line) => {
        if (line.length === 0) {
            return prev;
        }
        const spaces = line.match(/^\s+/);
        if (spaces) {
            return Math.min(prev, spaces[0].length);
        }
        return 0;
    }, Infinity);
    return fetchResultStateDispatcher({
        type: 'loaded',
        value: body.map((line) => line.slice(preceedingSpace)).join('\n')
    });
}
function codeReducer(prevState, { type, value }) {
    switch (type) {
        case 'reset': {
            return initialFetchResultState;
        }
        case 'loading': {
            return { ...prevState, loading: true };
        }
        case 'loaded': {
            return { ...prevState, code: value, loading: false };
        }
        case 'error': {
            return { ...prevState, error: value, loading: false };
        }
        default:
            return prevState;
    }
}
exports.codeReducer = codeReducer;
function ReferenceCode(props) {
    const [fetchResultState, fetchResultStateDispatcher] = (0, react_1.useReducer)(codeReducer, initialFetchResultState);
    const codeSnippetDetails = parseReference(props.children);
    if (fetchResultState.loading !== false) {
        fetchCode(codeSnippetDetails, fetchResultStateDispatcher);
    }
    const parsedCustomization = parseCustomization(props.metastring);
    const customProps = {
        ...props,
        metastring: parsedCustomization.title
            ? ` title="${parsedCustomization.title}"`
            : ` title="${codeSnippetDetails.title}"`,
        children: initialFetchResultState.code,
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(CodeBlock_1.default, { ...customProps }, fetchResultState.code),
        react_1.default.createElement("div", { style: parsedCustomization.noteStyling, className: parsedCustomization.useCustomStyling ? 'github-codeblock-reference-link' : '' },
            react_1.default.createElement("a", { href: props.children, target: "_blank" }, parsedCustomization.linkText))));
}
exports["default"] = ReferenceCode;
//# sourceMappingURL=index.js.map

}),
7594: (function (module, exports) {
/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


}),
3712: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  b: () => (DocProvider),
  k: () => (useDoc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* ESM import */var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5346);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


const Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);
/**
 * Note: we don't use `PropDoc` as context value on purpose. Metadata is
 * currently stored inside the MDX component, but we may want to change that in
 * the future. This layer is a good opportunity to decouple storage from
 * consuming API, potentially allowing us to provide metadata as both props and
 * route context without duplicating the chunks in the future.
 */ function useContextValue(content) {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            metadata: content.metadata,
            frontMatter: content.frontMatter,
            assets: content.assets,
            contentTitle: content.contentTitle,
            toc: content.toc
        }), [
        content
    ]);
}
/**
 * This is a very thin layer around the `content` received from the MDX loader.
 * It provides metadata about the doc to the children tree.
 */ function DocProvider(param) {
    let { children, content } = param;
    const contextValue = useContextValue(content);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {
        value: contextValue,
        children: children
    });
}
/**
 * Returns the data of the currently browsed doc. Gives access to the doc's MDX
 * Component, front matter, metadata, TOC, etc. When swizzling a low-level
 * component (e.g. the "Edit this page" link) and you need some extra metadata,
 * you don't have to drill the props all the way through the component tree:
 * simply use this hook instead.
 */ function useDoc() {
    const doc = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);
    if (doc === null) {
        throw new _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .ReactContextError */.i6('DocProvider');
    }
    return doc;
}


}),
2488: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  o: () => (useBreadcrumbsStructuredData)
});
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2933);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function useBreadcrumbsStructuredData(param) {
    let { breadcrumbs } = param;
    const { siteConfig } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */.Z)();
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs// We filter breadcrumb items without links, they are not allowed
        // See also https://github.com/facebook/docusaurus/issues/9319#issuecomment-2643560845
        .filter((breadcrumb)=>breadcrumb.href).map((breadcrumb, index)=>({
                '@type': 'ListItem',
                position: index + 1,
                name: breadcrumb.label,
                item: `${siteConfig.url}${breadcrumb.href}`
            }))
    };
}


}),
2834: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CodeBlock)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(7227);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(7026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(4239);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(140);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

/**
 * Returns a color-mode-dependent Prism theme: whatever the user specified in
 * the config. Falls back to `palenight`.
 */ function usePrismTheme() {
    const { prism } = (0,useThemeConfig/* useThemeConfig */.L)();
    const { colorMode } = (0,contexts_colorMode/* useColorMode */.I)();
    const lightModeTheme = prism.theme;
    const darkModeTheme = prism.darkTheme || lightModeTheme;
    const prismTheme = colorMode === 'dark' ? darkModeTheme : lightModeTheme;
    return prismTheme;
} //# sourceMappingURL=usePrismTheme.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(4681);
// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(7594);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(5346);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const codeBlockTitleRegex = /title=(?<quote>["'])(?<title>.*?)\1/;
const metastringLinesRangeRegex = /\{(?<range>[\d,-]+)\}/;
// Supported types of highlight comments
const popularCommentPatterns = {
    js: {
        start: '\\/\\/',
        end: ''
    },
    jsBlock: {
        start: '\\/\\*',
        end: '\\*\\/'
    },
    jsx: {
        start: '\\{\\s*\\/\\*',
        end: '\\*\\/\\s*\\}'
    },
    bash: {
        start: '#',
        end: ''
    },
    html: {
        start: '<!--',
        end: '-->'
    }
};
const commentPatterns = {
    ...popularCommentPatterns,
    // minor comment styles
    lua: {
        start: '--',
        end: ''
    },
    wasm: {
        start: '\\;\\;',
        end: ''
    },
    tex: {
        start: '%',
        end: ''
    },
    vb: {
        start: "['\u2018\u2019]",
        end: ''
    },
    vbnet: {
        start: "(?:_\\s*)?['\u2018\u2019]",
        end: ''
    },
    rem: {
        start: '[Rr][Ee][Mm]\\b',
        end: ''
    },
    f90: {
        start: '!',
        end: ''
    },
    ml: {
        start: '\\(\\*',
        end: '\\*\\)'
    },
    cobol: {
        start: '\\*>',
        end: ''
    }
};
const popularCommentTypes = Object.keys(popularCommentPatterns);
function getCommentPattern(languages, magicCommentDirectives) {
    // To be more reliable, the opening and closing comment must match
    const commentPattern = languages.map((lang)=>{
        const { start, end } = commentPatterns[lang];
        return `(?:${start}\\s*(${magicCommentDirectives.flatMap((d)=>[
                d.line,
                d.block?.start,
                d.block?.end
            ].filter(Boolean)).join('|')})\\s*${end})`;
    }).join('|');
    // White space is allowed, but otherwise it should be on it's own line
    return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);
}
/**
 * Select comment styles based on language
 */ function getAllMagicCommentDirectiveStyles(lang, magicCommentDirectives) {
    switch(lang){
        case 'js':
        case 'javascript':
        case 'ts':
        case 'typescript':
            return getCommentPattern([
                'js',
                'jsBlock'
            ], magicCommentDirectives);
        case 'jsx':
        case 'tsx':
            return getCommentPattern([
                'js',
                'jsBlock',
                'jsx'
            ], magicCommentDirectives);
        case 'html':
            return getCommentPattern([
                'js',
                'jsBlock',
                'html'
            ], magicCommentDirectives);
        case 'python':
        case 'py':
        case 'bash':
            return getCommentPattern([
                'bash'
            ], magicCommentDirectives);
        case 'markdown':
        case 'md':
            // Text uses HTML, front matter uses bash
            return getCommentPattern([
                'html',
                'jsx',
                'bash'
            ], magicCommentDirectives);
        case 'tex':
        case 'latex':
        case 'matlab':
            return getCommentPattern([
                'tex'
            ], magicCommentDirectives);
        case 'lua':
        case 'haskell':
            return getCommentPattern([
                'lua'
            ], magicCommentDirectives);
        case 'sql':
            return getCommentPattern([
                'lua',
                'jsBlock'
            ], magicCommentDirectives);
        case 'wasm':
            return getCommentPattern([
                'wasm'
            ], magicCommentDirectives);
        case 'vb':
        case 'vba':
        case 'visual-basic':
            return getCommentPattern([
                'vb',
                'rem'
            ], magicCommentDirectives);
        case 'vbnet':
            return getCommentPattern([
                'vbnet',
                'rem'
            ], magicCommentDirectives);
        case 'batch':
            return getCommentPattern([
                'rem'
            ], magicCommentDirectives);
        case 'basic':
            return getCommentPattern([
                'rem',
                'f90'
            ], magicCommentDirectives);
        case 'fsharp':
            return getCommentPattern([
                'js',
                'ml'
            ], magicCommentDirectives);
        case 'ocaml':
        case 'sml':
            return getCommentPattern([
                'ml'
            ], magicCommentDirectives);
        case 'fortran':
            return getCommentPattern([
                'f90'
            ], magicCommentDirectives);
        case 'cobol':
            return getCommentPattern([
                'cobol'
            ], magicCommentDirectives);
        default:
            // All popular comment types
            return getCommentPattern(popularCommentTypes, magicCommentDirectives);
    }
}
function parseCodeBlockTitle(metastring) {
    return metastring?.match(codeBlockTitleRegex)?.groups.title ?? '';
}
function getMetaLineNumbersStart(metastring) {
    const showLineNumbersMeta = metastring?.split(' ').find((str)=>str.startsWith('showLineNumbers'));
    if (showLineNumbersMeta) {
        if (showLineNumbersMeta.startsWith('showLineNumbers=')) {
            const value = showLineNumbersMeta.replace('showLineNumbers=', '');
            return parseInt(value, 10);
        }
        return 1;
    }
    return undefined;
}
function getLineNumbersStart(param) {
    let { showLineNumbers, metastring } = param;
    const defaultStart = 1;
    if (typeof showLineNumbers === 'boolean') {
        return showLineNumbers ? defaultStart : undefined;
    }
    if (typeof showLineNumbers === 'number') {
        return showLineNumbers;
    }
    return getMetaLineNumbersStart(metastring);
}
// TODO Docusaurus v4: remove, only kept for internal retro-compatibility
//  See https://github.com/facebook/docusaurus/pull/11153
function containsLineNumbers(metastring) {
    return Boolean(metastring?.includes('showLineNumbers'));
}
function parseCodeLinesFromMetastring(code, param) {
    let { metastring, magicComments } = param;
    // Highlighted lines specified in props: don't parse the content
    if (metastring && metastringLinesRangeRegex.test(metastring)) {
        const linesRange = metastring.match(metastringLinesRangeRegex).groups.range;
        if (magicComments.length === 0) {
            throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${metastring}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);
        }
        const metastringRangeClassName = magicComments[0].className;
        const lines = parse_numeric_range_default()(linesRange).filter((n)=>n > 0).map((n)=>[
                n - 1,
                [
                    metastringRangeClassName
                ]
            ]);
        return {
            lineClassNames: Object.fromEntries(lines),
            code
        };
    }
    return null;
}
function parseCodeLinesFromContent(code, params) {
    const { language, magicComments } = params;
    if (language === undefined) {
        return {
            lineClassNames: {},
            code
        };
    }
    const directiveRegex = getAllMagicCommentDirectiveStyles(language, magicComments);
    // Go through line by line
    const lines = code.split(/\r?\n/);
    const blocks = Object.fromEntries(magicComments.map((d)=>[
            d.className,
            {
                start: 0,
                range: ''
            }
        ]));
    const lineToClassName = Object.fromEntries(magicComments.filter((d)=>d.line).map((param)=>{
        let { className, line } = param;
        return [
            line,
            className
        ];
    }));
    const blockStartToClassName = Object.fromEntries(magicComments.filter((d)=>d.block).map((param)=>{
        let { className, block } = param;
        return [
            block.start,
            className
        ];
    }));
    const blockEndToClassName = Object.fromEntries(magicComments.filter((d)=>d.block).map((param)=>{
        let { className, block } = param;
        return [
            block.end,
            className
        ];
    }));
    for(let lineNumber = 0; lineNumber < lines.length;){
        const line = lines[lineNumber];
        const match = line.match(directiveRegex);
        if (!match) {
            // Lines without directives are unchanged
            lineNumber += 1;
            continue;
        }
        const directive = match.slice(1).find((item)=>item !== undefined);
        if (lineToClassName[directive]) {
            blocks[lineToClassName[directive]].range += `${lineNumber},`;
        } else if (blockStartToClassName[directive]) {
            blocks[blockStartToClassName[directive]].start = lineNumber;
        } else if (blockEndToClassName[directive]) {
            blocks[blockEndToClassName[directive]].range += `${blocks[blockEndToClassName[directive]].start}-${lineNumber - 1},`;
        }
        lines.splice(lineNumber, 1);
    }
    const lineClassNames = {};
    Object.entries(blocks).forEach((param)=>{
        let [className, { range }] = param;
        parse_numeric_range_default()(range).forEach((l)=>{
            lineClassNames[l] ??= [];
            lineClassNames[l].push(className);
        });
    });
    return {
        code: lines.join('\n'),
        lineClassNames
    };
}
/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 */ function parseLines(code, params) {
    // Historical behavior: we remove last line break
    const newCode = code.replace(/\r?\n$/, '');
    // Historical behavior: we try one strategy after the other
    // we don't support mixing metastring ranges + magic comments
    return parseCodeLinesFromMetastring(newCode, {
        ...params
    }) ?? parseCodeLinesFromContent(newCode, {
        ...params
    });
}
/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */ function parseClassNameLanguage(className) {
    if (!className) {
        return undefined;
    }
    const languageClassName = className.split(' ').find((str)=>str.startsWith('language-'));
    return languageClassName?.replace(/language-/, '');
}
// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language) {
    return language?.toLowerCase();
}
function getLanguage(params) {
    return normalizeLanguage(params.language ?? parseClassNameLanguage(params.className) ?? params.defaultLanguage) ?? 'text'; // There's always a language, required by Prism;
}
/**
 * This ensures that we always have the code block language as className
 * For MDX code blocks this is provided automatically by MDX
 * For JSX code blocks, the language gets added by this function
 * This ensures both cases lead to a consistent HTML output
 */ function ensureLanguageClassName(param) {
    let { className, language } = param;
    return (0,clsx/* default */.Z)(className, language && !className?.includes(`language-${language}`) && `language-${language}`);
}
function createCodeBlockMetadata(params) {
    const language = getLanguage({
        language: params.language,
        defaultLanguage: params.defaultLanguage,
        className: params.className
    });
    const { lineClassNames, code } = parseLines(params.code, {
        metastring: params.metastring,
        magicComments: params.magicComments,
        language
    });
    const className = ensureLanguageClassName({
        className: params.className,
        language
    });
    const title = parseCodeBlockTitle(params.metastring) || params.title;
    const lineNumbersStart = getLineNumbersStart({
        showLineNumbers: params.showLineNumbers,
        metastring: params.metastring
    });
    return {
        codeInput: params.code,
        code,
        className,
        language,
        title,
        lineNumbersStart,
        lineClassNames
    };
}
function getPrismCssVariables(prismTheme) {
    const mapping = {
        color: '--prism-color',
        backgroundColor: '--prism-background-color'
    };
    const properties = {};
    Object.entries(prismTheme.plain).forEach((param)=>{
        let [key, value] = param;
        const varName = mapping[key];
        if (varName && typeof value === 'string') {
            properties[varName] = value;
        }
    });
    return properties;
}
const CodeBlockContext = /*#__PURE__*/ (0,react.createContext)(null);
function CodeBlockContextProvider(param) {
    let { metadata, wordWrap, children } = param;
    // Should we optimize this in 2 contexts?
    // Unlike metadata, wordWrap is stateful and likely to trigger re-renders
    const value = (0,react.useMemo)(()=>{
        return {
            metadata,
            wordWrap
        };
    }, [
        metadata,
        wordWrap
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockContext.Provider, {
        value: value,
        children: children
    });
}
function useCodeBlockContext() {
    const value = (0,react.useContext)(CodeBlockContext);
    if (value === null) {
        throw new reactUtils/* ReactContextError */.i6('CodeBlockContextProvider');
    }
    return value;
} //# sourceMappingURL=codeBlockUtils.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"codeBlockContainer":"codeBlockContainer_Ckt0"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function CodeBlockContainer(param) {
    let { as: As, ...props } = param;
    const prismTheme = usePrismTheme();
    const prismCssVariables = getPrismCssVariables(prismTheme);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(As, {
        ...props,
        style: prismCssVariables,
        className: (0,clsx/* default */.Z)(props.className, styles_module.codeBlockContainer, ThemeClassNames/* ThemeClassNames,common,codeBlock */.k.common.codeBlock)
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Content_styles_module = ({"codeBlock":"codeBlock_bY9V","codeBlockStandalone":"codeBlockStandalone_MEMb","codeBlockLines":"codeBlockLines_e6Vv","codeBlockLinesWithNumbering":"codeBlockLinesWithNumbering_o6Pm"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/Element.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// TODO Docusaurus v4: move this component at the root?
// This component only handles a rare edge-case: <pre><MyComp/></pre> in MDX
// <pre> tags in markdown map to CodeBlocks. They may contain JSX children.
// When children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockContainer, {
        as: "pre",
        tabIndex: 0,
        className: (0,clsx/* default */.Z)(Content_styles_module.codeBlockStandalone, 'thin-scrollbar', className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
            className: Content_styles_module.codeBlockLines,
            children: children
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useMutationObserver.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

const DefaultOptions = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
};
function useMutationObserver(target, callback) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : DefaultOptions;
    const stableCallback = (0,reactUtils/* useEvent */.zX)(callback);
    // MutationObserver options are not nested much
    // so this should be to memo options in 99%
    // TODO handle options.attributeFilter array
    const stableOptions = (0,reactUtils/* useShallowMemoObject */.Ql)(options);
    (0,react.useEffect)(()=>{
        const observer = new MutationObserver(stableCallback);
        if (target) {
            observer.observe(target, stableOptions);
        }
        return ()=>observer.disconnect();
    }, [
        target,
        stableCallback,
        stableOptions
    ]);
} //# sourceMappingURL=useMutationObserver.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useCodeWordWrap.js


// Callback fires when the "hidden" attribute of a tabpanel changes
// See https://github.com/facebook/docusaurus/pull/7485
function useTabBecameVisibleCallback(codeBlockRef, callback) {
    const [hiddenTabElement, setHiddenTabElement] = (0,react.useState)();
    const updateHiddenTabElement = (0,react.useCallback)(()=>{
        // No need to observe non-hidden tabs
        // + we want to force a re-render when a tab becomes visible
        setHiddenTabElement(codeBlockRef.current?.closest('[role=tabpanel][hidden]'));
    }, [
        codeBlockRef,
        setHiddenTabElement
    ]);
    (0,react.useEffect)(()=>{
        updateHiddenTabElement();
    }, [
        updateHiddenTabElement
    ]);
    useMutationObserver(hiddenTabElement, (mutations)=>{
        mutations.forEach((mutation)=>{
            if (mutation.type === 'attributes' && mutation.attributeName === 'hidden') {
                callback();
                updateHiddenTabElement();
            }
        });
    }, {
        attributes: true,
        characterData: false,
        childList: false,
        subtree: false
    });
}
function useCodeWordWrap() {
    const [isEnabled, setIsEnabled] = (0,react.useState)(false);
    const [isCodeScrollable, setIsCodeScrollable] = (0,react.useState)(false);
    const codeBlockRef = (0,react.useRef)(null);
    const toggle = (0,react.useCallback)(()=>{
        const codeElement = codeBlockRef.current.querySelector('code');
        if (isEnabled) {
            codeElement.removeAttribute('style');
        } else {
            codeElement.style.whiteSpace = 'pre-wrap';
            // When code wrap is enabled, we want to avoid a scrollbar in any case
            // Ensure that very very long words/strings/tokens still wrap
            codeElement.style.overflowWrap = 'anywhere';
        }
        setIsEnabled((value)=>!value);
    }, [
        codeBlockRef,
        isEnabled
    ]);
    const updateCodeIsScrollable = (0,react.useCallback)(()=>{
        const { scrollWidth, clientWidth } = codeBlockRef.current;
        const isScrollable = scrollWidth > clientWidth || codeBlockRef.current.querySelector('code').hasAttribute('style');
        setIsCodeScrollable(isScrollable);
    }, [
        codeBlockRef
    ]);
    useTabBecameVisibleCallback(codeBlockRef, updateCodeIsScrollable);
    (0,react.useEffect)(()=>{
        updateCodeIsScrollable();
    }, [
        isEnabled,
        updateCodeIsScrollable
    ]);
    (0,react.useEffect)(()=>{
        window.addEventListener('resize', updateCodeIsScrollable, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('resize', updateCodeIsScrollable);
        };
    }, [
        updateCodeIsScrollable
    ]);
    return {
        codeBlockRef,
        isEnabled,
        isCodeScrollable,
        toggle
    };
} //# sourceMappingURL=useCodeWordWrap.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Title/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Just a pass-through component that users can swizzle and customize
function CodeBlockTitle(param) {
    let { children } = param;
    return children;
}

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.mjs
var dist = __webpack_require__(3229);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/Token/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// Pass-through components that users can swizzle and customize
function CodeBlockLineToken(param) {
    let { line, token, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        ...props
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Line_styles_module = ({"codeLine":"codeLine_lJS_","codeLineNumber":"codeLineNumber_Tfdd","codeLineContent":"codeLineContent_feaV"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// Replaces '\n' by ''
// Historical code, not sure why we even need this :/
function fixLineBreak(line) {
    const singleLineBreakToken = line.length === 1 && line[0].content === '\n' ? line[0] : undefined;
    if (singleLineBreakToken) {
        return [
            {
                ...singleLineBreakToken,
                content: ''
            }
        ];
    }
    return line;
}
function CodeBlockLine(param) {
    let { line: lineProp, classNames, showLineNumbers, getLineProps, getTokenProps } = param;
    const line = fixLineBreak(lineProp);
    const lineProps = getLineProps({
        line,
        className: (0,clsx/* default */.Z)(classNames, showLineNumbers && Line_styles_module.codeLine)
    });
    const lineTokens = line.map((token, key)=>{
        const tokenProps = getTokenProps({
            token
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockLineToken, {
            ...tokenProps,
            line: line,
            token: token,
            children: tokenProps.children
        }, key);
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        ...lineProps,
        children: [
            showLineNumbers ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: Line_styles_module.codeLineNumber
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: Line_styles_module.codeLineContent,
                        children: lineTokens
                    })
                ]
            }) : lineTokens,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







// TODO Docusaurus v4: remove useless forwardRef
const Pre = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
        ref: ref,
        /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */ tabIndex: 0,
        ...props,
        className: (0,clsx/* default */.Z)(props.className, Content_styles_module.codeBlock, 'thin-scrollbar')
    });
});
function Code(props) {
    const { metadata } = useCodeBlockContext();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
        ...props,
        className: (0,clsx/* default */.Z)(props.className, Content_styles_module.codeBlockLines, metadata.lineNumbersStart !== undefined && Content_styles_module.codeBlockLinesWithNumbering),
        style: {
            ...props.style,
            counterReset: metadata.lineNumbersStart === undefined ? undefined : `line-count ${metadata.lineNumbersStart - 1}`
        }
    });
}
function CodeBlockContent(param) {
    let { className: classNameProp } = param;
    const { metadata, wordWrap } = useCodeBlockContext();
    const prismTheme = usePrismTheme();
    const { code, language, lineNumbersStart, lineClassNames } = metadata;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Highlight */.y$, {
        theme: prismTheme,
        code: code,
        language: language,
        children: (param)=>{
            let { className, style, tokens: lines, getLineProps, getTokenProps } = param;
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Pre, {
                ref: wordWrap.codeBlockRef,
                className: (0,clsx/* default */.Z)(classNameProp, className),
                style: style,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Code, {
                    children: lines.map((line, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockLine, {
                            line: line,
                            getLineProps: getLineProps,
                            getTokenProps: getTokenProps,
                            classNames: lineClassNames[i],
                            showLineNumbers: lineNumbersStart !== undefined
                        }, i))
                })
            });
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/BrowserOnly.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


// Similar comp to the one described here:
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
function BrowserOnly(param) {
    let { children, fallback } = param;
    const isBrowser = (0,useIsBrowser/* default */.Z)();
    if (isBrowser) {
        if (typeof children !== 'function' && "production" === 'development') {}
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: children?.()
        });
    }
    return fallback ?? null;
}

;// CONCATENATED MODULE: ./node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(text) {
    let { target = document.body } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (typeof text !== 'string') {
        throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof text}\`.`);
    }
    const element = document.createElement('textarea');
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    // Prevent keyboard from showing on mobile
    element.setAttribute('readonly', '');
    element.style.contain = 'strict';
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    element.style.fontSize = '12pt'; // Prevent zooming on iOS
    const selection = document.getSelection();
    const originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);
    target.append(element);
    element.select();
    // Explicit selection workaround for iOS
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    let isSuccess = false;
    try {
        isSuccess = document.execCommand('copy');
    } catch  {}
    element.remove();
    if (originalRange) {
        selection.removeAllRanges();
        selection.addRange(originalRange);
    }
    // Get the focus back on the previously focused element, if any
    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
    }
    return isSuccess;
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(6025);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/Button/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function CodeBlockButton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        type: "button",
        ...props,
        className: (0,clsx/* default */.Z)('clean-btn', className)
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Copy/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function IconCopy(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "currentColor",
            d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Success/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function IconSuccess(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "currentColor",
            d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/CopyButton/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const CopyButton_styles_module = ({"copyButtonCopied":"copyButtonCopied_Vdqa","copyButtonIcons":"copyButtonIcons_IEyt","copyButtonIcon":"copyButtonIcon_TrPX","copyButtonSuccessIcon":"copyButtonSuccessIcon_cVMy"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/CopyButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 









function CopyButton_title() {
    return (0,Translate/* translate */.I)({
        id: 'theme.CodeBlock.copy',
        message: 'Copy',
        description: 'The copy button label on code blocks'
    });
}
function ariaLabel(isCopied) {
    return isCopied ? (0,Translate/* translate */.I)({
        id: 'theme.CodeBlock.copied',
        message: 'Copied',
        description: 'The copied button label on code blocks'
    }) : (0,Translate/* translate */.I)({
        id: 'theme.CodeBlock.copyButtonAriaLabel',
        message: 'Copy code to clipboard',
        description: 'The ARIA label for copy code blocks button'
    });
}
function useCopyButton() {
    const { metadata: { code } } = useCodeBlockContext();
    const [isCopied, setIsCopied] = (0,react.useState)(false);
    const copyTimeout = (0,react.useRef)(undefined);
    const copyCode = (0,react.useCallback)(()=>{
        copyTextToClipboard(code);
        setIsCopied(true);
        copyTimeout.current = window.setTimeout(()=>{
            setIsCopied(false);
        }, 1000);
    }, [
        code
    ]);
    (0,react.useEffect)(()=>()=>window.clearTimeout(copyTimeout.current), []);
    return {
        copyCode,
        isCopied
    };
}
function CopyButton(param) {
    let { className } = param;
    const { copyCode, isCopied } = useCopyButton();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockButton, {
        "aria-label": ariaLabel(isCopied),
        title: CopyButton_title(),
        className: (0,clsx/* default */.Z)(className, CopyButton_styles_module.copyButton, isCopied && CopyButton_styles_module.copyButtonCopied),
        onClick: copyCode,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
            className: CopyButton_styles_module.copyButtonIcons,
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconCopy, {
                    className: CopyButton_styles_module.copyButtonIcon
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconSuccess, {
                    className: CopyButton_styles_module.copyButtonSuccessIcon
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/WordWrap/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function IconWordWrap(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "currentColor",
            d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/WordWrapButton/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const WordWrapButton_styles_module = ({"wordWrapButtonIcon":"wordWrapButtonIcon_b1P5","wordWrapButtonEnabled":"wordWrapButtonEnabled_uzNF"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/WordWrapButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function WordWrapButton(param) {
    let { className } = param;
    const { wordWrap } = useCodeBlockContext();
    const canShowButton = wordWrap.isEnabled || wordWrap.isCodeScrollable;
    if (!canShowButton) {
        return false;
    }
    const title = (0,Translate/* translate */.I)({
        id: 'theme.CodeBlock.wordWrapToggle',
        message: 'Toggle word wrap',
        description: 'The title attribute for toggle word wrapping button of code block lines'
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockButton, {
        onClick: ()=>wordWrap.toggle(),
        className: (0,clsx/* default */.Z)(className, wordWrap.isEnabled && WordWrapButton_styles_module.wordWrapButtonEnabled),
        "aria-label": title,
        title: title,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconWordWrap, {
            className: WordWrapButton_styles_module.wordWrapButtonIcon,
            "aria-hidden": "true"
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Buttons_styles_module = ({"buttonGroup":"buttonGroup_M5ko"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






// Code block buttons are not server-rendered on purpose
// Adding them to the initial HTML is useless and expensive (due to JSX SVG)
// They are hidden by default and require React  to become interactive
function CodeBlockButtons(param) {
    let { className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(BrowserOnly, {
        children: ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,clsx/* default */.Z)(className, Buttons_styles_module.buttonGroup),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WordWrapButton, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton, {})
                ]
            })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Layout/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Layout_styles_module = ({"codeBlockContent":"codeBlockContent_QJqH","codeBlockTitle":"codeBlockTitle_OeMC","codeBlock":"codeBlock_a8dz"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 








function CodeBlockLayout(param) {
    let { className } = param;
    const { metadata } = useCodeBlockContext();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CodeBlockContainer, {
        as: "div",
        className: (0,clsx/* default */.Z)(className, metadata.className),
        children: [
            metadata.title && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: Layout_styles_module.codeBlockTitle,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockTitle, {
                    children: metadata.title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: Layout_styles_module.codeBlockContent,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockContent, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockButtons, {})
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/String.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function useCodeBlockMetadata(props) {
    const { prism } = (0,useThemeConfig/* useThemeConfig */.L)();
    return createCodeBlockMetadata({
        code: props.children,
        className: props.className,
        metastring: props.metastring,
        magicComments: prism.magicComments,
        defaultLanguage: prism.defaultLanguage,
        language: props.language,
        title: props.title,
        showLineNumbers: props.showLineNumbers
    });
}
// TODO Docusaurus v4: move this component at the root?
function CodeBlockString(props) {
    const metadata = useCodeBlockMetadata(props);
    const wordWrap = useCodeWordWrap();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockContextProvider, {
        metadata: metadata,
        wordWrap: wordWrap,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockLayout, {})
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




/**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */ function maybeStringifyChildren(children) {
    if (react.Children.toArray(children).some((el)=>/*#__PURE__*/ (0,react.isValidElement)(el))) {
        return children;
    }
    // The children is now guaranteed to be one/more plain strings
    return Array.isArray(children) ? children.join('') : children;
}
function CodeBlock(param) {
    let { children: rawChildren, ...props } = param;
    // The Prism theme on SSR is always the default theme but the site theme can
    // be in a different mode. React hydration doesn't update DOM styles that come
    // from SSR. Hence force a re-render after mounting to apply the current
    // relevant styles.
    const isBrowser = (0,useIsBrowser/* default */.Z)();
    const children = maybeStringifyChildren(rawChildren);
    const CodeBlockComp = typeof children === 'string' ? CodeBlockString : CodeBlockJSX;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockComp, {
        ...props,
        children: children
    }, String(isBrowser));
}


}),
5427: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ContentVisibility)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(7026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(4819);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/translations/contentVisibilityTranslations.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function UnlistedBannerTitle() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.contentVisibility.unlistedBanner.title",
        description: "The unlisted content banner title",
        children: "Unlisted page"
    });
}
function UnlistedBannerMessage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.contentVisibility.unlistedBanner.message",
        description: "The unlisted content banner message",
        children: "This page is unlisted. Search engines will not index it, and only users having a direct link can access it."
    });
}
// TODO Docusaurus v4 breaking change (since it's v3 public theme-common API :/)
//  Move this to theme/ContentVisibility/Unlisted
function UnlistedMetadata() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Head/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
            name: "robots",
            content: "noindex, nofollow"
        })
    });
}
function DraftBannerTitle() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.contentVisibility.draftBanner.title",
        description: "The draft content banner title",
        children: "Draft page"
    });
}
function DraftBannerMessage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.contentVisibility.draftBanner.message",
        description: "The draft content banner message",
        children: "This page is a draft. It will only be visible in dev and be excluded from the production build."
    });
} //# sourceMappingURL=contentVisibilityTranslations.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(4681);
// EXTERNAL MODULE: ./src/theme/Admonition/index.js + 14 modules
var Admonition = __webpack_require__(9954);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/Draft/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function Draft(param) {
    let { className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Admonition/* default */.Z, {
        type: "caution",
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(DraftBannerTitle, {}),
        className: (0,clsx/* default */.Z)(className, ThemeClassNames/* ThemeClassNames,common,draftBanner */.k.common.draftBanner),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DraftBannerMessage, {})
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/Unlisted/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function UnlistedBanner(param) {
    let { className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Admonition/* default */.Z, {
        type: "caution",
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlistedBannerTitle, {}),
        className: (0,clsx/* default */.Z)(className, ThemeClassNames/* ThemeClassNames,common,unlistedBanner */.k.common.unlistedBanner),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlistedBannerMessage, {})
    });
}
function Unlisted(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlistedMetadata, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlistedBanner, {
                ...props
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function ContentVisibility(param) {
    let { metadata } = param;
    const { unlisted, frontMatter } = metadata;
    // Reading draft/unlisted status from frontMatter is useful to display
    // the banners in dev mode (in dev, metadata.unlisted is always false)
    // See https://github.com/facebook/docusaurus/issues/8285
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            (unlisted || frontMatter.unlisted) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Unlisted, {}),
            frontMatter.draft && /*#__PURE__*/ (0,jsx_runtime.jsx)(Draft, {})
        ]
    });
}


}),
6639: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocCardList)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(7026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js
var docsUtils = __webpack_require__(9369);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(3012);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(3115);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(3150);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(4403);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"cardContainer":"cardContainer_fWXF","cardTitle":"cardTitle_rnsV","cardDescription":"cardDescription_PWke"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 









function useCategoryItemsPlural() {
    const { selectMessage } = (0,usePluralForm/* usePluralForm */.c)();
    return (count)=>selectMessage(count, (0,Translate/* translate */.I)({
            message: '1 item|{count} items',
            id: 'theme.docs.DocCard.categoryDescription.plurals',
            description: 'The default description for a category card in the generated index about how many items this category includes'
        }, {
            count
        }));
}
function CardContainer(param) {
    let { className, href, children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        href: href,
        className: (0,clsx/* default */.Z)('card padding--lg', styles_module.cardContainer, className),
        children: children
    });
}
function CardLayout(param) {
    let { className, href, icon, title, description } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContainer, {
        href: href,
        className: className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Heading/* default */.Z, {
                as: "h2",
                className: (0,clsx/* default */.Z)('text--truncate', styles_module.cardTitle),
                title: title,
                children: [
                    icon,
                    " ",
                    title
                ]
            }),
            description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: (0,clsx/* default */.Z)('text--truncate', styles_module.cardDescription),
                title: description,
                children: description
            })
        ]
    });
}
function CardCategory(param) {
    let { item } = param;
    const href = (0,docsUtils/* findFirstSidebarItemLink */.LM)(item);
    const categoryItemsPlural = useCategoryItemsPlural();
    // Unexpected: categories that don't have a link have been filtered upfront
    if (!href) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLayout, {
        className: item.className,
        href: href,
        icon: "\uD83D\uDDC3\uFE0F",
        title: item.label,
        description: item.description ?? categoryItemsPlural(item.items.length)
    });
}
function CardLink(param) {
    let { item } = param;
    const icon = (0,isInternalUrl/* default */.Z)(item.href) ? "\uD83D\uDCC4\uFE0F" : "\uD83D\uDD17";
    const doc = (0,docsUtils/* useDocById */.xz)(item.docId ?? undefined);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLayout, {
        className: item.className,
        href: item.href,
        icon: icon,
        title: item.label,
        description: item.description ?? doc?.description
    });
}
function DocCard(param) {
    let { item } = param;
    switch(item.type){
        case 'link':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLink, {
                item: item
            });
        case 'category':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardCategory, {
                item: item
            });
        default:
            throw new Error(`unknown item type ${JSON.stringify(item)}`);
    }
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const DocCardList_styles_module = ({"docCardListItem":"docCardListItem_W1sv"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function DocCardListForCurrentSidebarCategory(param) {
    let { className } = param;
    const items = (0,docsUtils/* useCurrentSidebarSiblings */.Ok)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCardList, {
        items: items,
        className: className
    });
}
function DocCardListItem(param) {
    let { item } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("article", {
        className: (0,clsx/* default */.Z)(DocCardList_styles_module.docCardListItem, 'col col--6'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCard, {
            item: item
        })
    });
}
function DocCardList(props) {
    const { items, className } = props;
    if (!items) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCardListForCurrentSidebarCategory, {
            ...props
        });
    }
    const filteredItems = (0,docsUtils/* filterDocCardListItems */.MN)(items);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: (0,clsx/* default */.Z)('row', className),
        children: filteredItems.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(DocCardListItem, {
                item: item
            }, index))
    });
}


}),
7222: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocItemFooter)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(7026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(4681);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__(3712);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(3012);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function Tag(param) {
    let { permalink, label, count, description } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
        rel: "tag",
        href: permalink,
        title: description,
        className: (0,clsx/* default */.Z)(styles_module.tag, count ? styles_module.tagWithCount : styles_module.tagRegular),
        children: [
            label,
            count && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: count
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const TagsListInline_styles_module = ({"tags":"tags_jXut","tag":"tag_QGVx"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function TagsListInline(param) {
    let { tags } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
                    id: "theme.tags.tagsListLabel",
                    description: "The label alongside a tag list",
                    children: "Tags:"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: (0,clsx/* default */.Z)(TagsListInline_styles_module.tags, 'padding--none', 'margin-left--sm'),
                children: tags.map((tag)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        className: TagsListInline_styles_module.tag,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tag, {
                            ...tag
                        })
                    }, tag.permalink))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Edit_styles_module = ({"iconEdit":"iconEdit_Z9Sw"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function IconEdit(param) {
    let { className, ...restProps } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        fill: "currentColor",
        height: "20",
        width: "20",
        viewBox: "0 0 40 40",
        className: (0,clsx/* default */.Z)(Edit_styles_module.iconEdit, className),
        "aria-hidden": "true",
        ...restProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"
            })
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function EditThisPage(param) {
    let { editUrl } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
        to: editUrl,
        className: ThemeClassNames/* ThemeClassNames,common,editThisPage */.k.common.editThisPage,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconEdit, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
                id: "theme.common.editThisPage",
                description: "The link label to edit the current page",
                children: "Edit this page"
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2933);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/IntlUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function useCalendar() {
    const { i18n: { currentLocale, localeConfigs } } = (0,useDocusaurusContext/* default */.Z)();
    return localeConfigs[currentLocale].calendar;
}
function useDateTimeFormat() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* default */.Z)();
    const calendar = useCalendar();
    return new Intl.DateTimeFormat(currentLocale, {
        calendar,
        ...options
    });
} //# sourceMappingURL=IntlUtils.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function LastUpdatedAtDate(param) {
    let { lastUpdatedAt } = param;
    const atDate = new Date(lastUpdatedAt);
    const dateTimeFormat = useDateTimeFormat({
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC'
    });
    const formattedLastUpdatedAt = dateTimeFormat.format(atDate);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.lastUpdated.atDate",
        description: "The words used to describe on which date a page has been last updated",
        values: {
            date: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("time", {
                    dateTime: atDate.toISOString(),
                    itemProp: "dateModified",
                    children: formattedLastUpdatedAt
                })
            })
        },
        children: ' on {date}'
    });
}
function LastUpdatedByUser(param) {
    let { lastUpdatedBy } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.lastUpdated.byUser",
        description: "The words used to describe by who the page has been last updated",
        values: {
            user: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                children: lastUpdatedBy
            })
        },
        children: ' by {user}'
    });
}
function LastUpdated(param) {
    let { lastUpdatedAt, lastUpdatedBy } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        className: ThemeClassNames/* ThemeClassNames,common,lastUpdated */.k.common.lastUpdated,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
                id: "theme.lastUpdated.lastUpdatedAtBy",
                description: "The sentence used to display when a page has been last updated, and by who",
                values: {
                    atDate: lastUpdatedAt ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LastUpdatedAtDate, {
                        lastUpdatedAt: lastUpdatedAt
                    }) : '',
                    byUser: lastUpdatedBy ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LastUpdatedByUser, {
                        lastUpdatedBy: lastUpdatedBy
                    }) : ''
                },
                children: 'Last updated{atDate}{byUser}'
            }),
             false && /*#__PURE__*/ 0
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const EditMetaRow_styles_module = ({"lastUpdated":"lastUpdated_JAkA"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function EditMetaRow(param) {
    let { className, editUrl, lastUpdatedAt, lastUpdatedBy } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.Z)('row', className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "col",
                children: editUrl && /*#__PURE__*/ (0,jsx_runtime.jsx)(EditThisPage, {
                    editUrl: editUrl
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (0,clsx/* default */.Z)('col', EditMetaRow_styles_module.lastUpdated),
                children: (lastUpdatedAt || lastUpdatedBy) && /*#__PURE__*/ (0,jsx_runtime.jsx)(LastUpdated, {
                    lastUpdatedAt: lastUpdatedAt,
                    lastUpdatedBy: lastUpdatedBy
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocItemFooter() {
    const { metadata } = (0,doc/* useDoc */.k)();
    const { editUrl, lastUpdatedAt, lastUpdatedBy, tags } = metadata;
    const canDisplayTagsRow = tags.length > 0;
    const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
    const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
    if (!canDisplayFooter) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docFooter */.k.docs.docFooter, 'docusaurus-mt-lg'),
        children: [
            canDisplayTagsRow && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (0,clsx/* default */.Z)('row margin-top--sm', ThemeClassNames/* ThemeClassNames,docs,docFooterTagsRow */.k.docs.docFooterTagsRow),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "col",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsListInline, {
                        tags: tags
                    })
                })
            }),
            canDisplayEditMetaRow && /*#__PURE__*/ (0,jsx_runtime.jsx)(EditMetaRow, {
                className: (0,clsx/* default */.Z)('margin-top--sm', ThemeClassNames/* ThemeClassNames,docs,docFooterEditMetaRow */.k.docs.docFooterEditMetaRow),
                editUrl: editUrl,
                lastUpdatedAt: lastUpdatedAt,
                lastUpdatedBy: lastUpdatedBy
            })
        ]
    });
}


}),
2223: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocItemPaginator)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__(3712);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(7026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(3012);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function PaginatorNavLink(props) {
    const { permalink, title, subLabel, isNext } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
        className: (0,clsx/* default */.Z)('pagination-nav__link', isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'),
        to: permalink,
        children: [
            subLabel && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "pagination-nav__sublabel",
                children: subLabel
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "pagination-nav__label",
                children: title
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocPaginator(props) {
    const { className, previous, next } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        className: (0,clsx/* default */.Z)(className, 'pagination-nav'),
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.paginator.navAriaLabel',
            message: 'Docs pages',
            description: 'The ARIA label for the docs pagination'
        }),
        children: [
            previous && /*#__PURE__*/ (0,jsx_runtime.jsx)(PaginatorNavLink, {
                ...previous,
                subLabel: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
                    id: "theme.docs.paginator.previous",
                    description: "The label used to navigate to the previous doc",
                    children: "Previous"
                })
            }),
            next && /*#__PURE__*/ (0,jsx_runtime.jsx)(PaginatorNavLink, {
                ...next,
                subLabel: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
                    id: "theme.docs.paginator.next",
                    description: "The label used to navigate to the next doc",
                    children: "Next"
                }),
                isNext: true
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Paginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



/**
 * This extra component is needed, because <DocPaginator> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */ function DocItemPaginator() {
    const { metadata } = (0,doc/* useDoc */.k)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocPaginator, {
        className: "docusaurus-mt-lg",
        previous: metadata.previous,
        next: metadata.next
    });
}


}),
9809: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocItemTOCDesktop)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(4681);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__(3712);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(7026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(6365);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tableOfContents":"tableOfContents_bqdL","docItemContainer":"docItemContainer_F8PC"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';
function TOC(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* default */.Z)(styles_module.tableOfContents, 'thin-scrollbar', className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCItems/* default */.Z, {
            ...props,
            linkClassName: LINK_CLASS_NAME,
            linkActiveClassName: LINK_ACTIVE_CLASS_NAME
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocItemTOCDesktop() {
    const { toc, frontMatter } = (0,doc/* useDoc */.k)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TOC, {
        toc: toc,
        minHeadingLevel: frontMatter.toc_min_heading_level,
        maxHeadingLevel: frontMatter.toc_max_heading_level,
        className: ThemeClassNames/* ThemeClassNames,docs,docTocDesktop */.k.docs.docTocDesktop
    });
}


}),
97: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocItemTOCMobile)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(7026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(4681);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__(3712);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/index.js + 3 modules
var TOCCollapsible = __webpack_require__(5434);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tocMobile":"tocMobile_ITEo"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocItemTOCMobile() {
    const { toc, frontMatter } = (0,doc/* useDoc */.k)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCCollapsible/* default */.Z, {
        toc: toc,
        minHeadingLevel: frontMatter.toc_min_heading_level,
        maxHeadingLevel: frontMatter.toc_max_heading_level,
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docTocMobile */.k.docs.docTocMobile, styles_module.tocMobile)
    });
}


}),
2963: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(9741);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__(3712);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Metadata/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocItemMetadata() {
    const { metadata, frontMatter, assets } = (0,doc/* useDoc */.k)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.d, {
        title: metadata.title,
        description: metadata.description,
        keywords: frontMatter.keywords,
        image: assets.image ?? frontMatter.image
    });
}

// EXTERNAL MODULE: ./src/theme/DocItem/Layout/index.js + 11 modules
var Layout = __webpack_require__(7028);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function DocItem(props) {
    const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
    const MDXComponent = props.content;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(doc/* DocProvider */.b, {
        content: props.content,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.FG, {
            className: docHtmlClassName,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DocItemMetadata, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXComponent, {})
                })
            ]
        })
    });
}


}),
6035: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Z: () => (DocVersionBadge)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7026);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6025);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4681);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8529);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function DocVersionBadge(param) {
    let { className } = param;
    const versionMetadata = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useDocsVersion */.E)();
    if (versionMetadata.badge) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z)(className, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ThemeClassNames.docs.docVersionBadge */.k.docs.docVersionBadge, 'badge badge--secondary'),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
                id: "theme.docs.versionBadge.label",
                values: {
                    versionLabel: versionMetadata.label
                },
                children: 'Version: {versionLabel}'
            })
        });
    }
    return null;
}


}),
9580: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Z: () => (DocVersionBanner)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7026);
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2933);
/* ESM import */var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3012);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6025);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8057);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4681);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3896);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8529);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 








function UnreleasedVersionLabel(param) {
    let { siteTitle, versionMetadata } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z, {
        id: "theme.docs.versions.unreleasedVersionLabel",
        description: "The label used to tell the user that he's browsing an unreleased doc version",
        values: {
            siteTitle,
            versionLabel: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
                children: versionMetadata.label
            })
        },
        children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.'
    });
}
function UnmaintainedVersionLabel(param) {
    let { siteTitle, versionMetadata } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z, {
        id: "theme.docs.versions.unmaintainedVersionLabel",
        description: "The label used to tell the user that he's browsing an unmaintained doc version",
        values: {
            siteTitle,
            versionLabel: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
                children: versionMetadata.label
            })
        },
        children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.'
    });
}
const BannerLabelComponents = {
    unreleased: UnreleasedVersionLabel,
    unmaintained: UnmaintainedVersionLabel
};
function BannerLabel(props) {
    const BannerLabelComponent = BannerLabelComponents[props.versionMetadata.banner];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BannerLabelComponent, {
        ...props
    });
}
function LatestVersionSuggestionLabel(param) {
    let { versionLabel, to, onClick } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z, {
        id: "theme.docs.versions.latestVersionSuggestionLabel",
        description: "The label used to tell the user to check the latest version",
        values: {
            versionLabel,
            latestVersionLink: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z, {
                    to: to,
                    onClick: onClick,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z, {
                        id: "theme.docs.versions.latestVersionLinkLabel",
                        description: "The label used for the latest version suggestion link label",
                        children: "latest version"
                    })
                })
            })
        },
        children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).'
    });
}
function DocVersionBannerEnabled(param) {
    let { className, versionMetadata } = param;
    const { siteConfig: { title: siteTitle } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z)();
    const { pluginId } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .useActivePlugin */.gA)({
        failfast: true
    });
    const getVersionMainDoc = (version)=>version.docs.find((doc)=>doc.id === version.mainDocId);
    const { savePreferredVersionName } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__/* .useDocsPreferredVersion */.J)(pluginId);
    const { latestDocSuggestion, latestVersionSuggestion } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .useDocVersionSuggestions */.Jo)(pluginId);
    // Try to link to same doc in latest version (not always possible), falling
    // back to main doc of latest version
    const latestVersionSuggestedDoc = latestDocSuggestion ?? getVersionMainDoc(latestVersionSuggestion);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */.Z)(className, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .ThemeClassNames.docs.docVersionBanner */.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'),
        role: "alert",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BannerLabel, {
                    siteTitle: siteTitle,
                    versionMetadata: versionMetadata
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "margin-top--md",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LatestVersionSuggestionLabel, {
                    versionLabel: latestVersionSuggestion.label,
                    to: latestVersionSuggestedDoc.path,
                    onClick: ()=>savePreferredVersionName(latestVersionSuggestion.name)
                })
            })
        ]
    });
}
function DocVersionBanner(param) {
    let { className } = param;
    const versionMetadata = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_9__/* .useDocsVersion */.E)();
    if (versionMetadata.banner) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocVersionBannerEnabled, {
            className: className,
            versionMetadata: versionMetadata
        });
    }
    return null;
}


}),
4244: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Z: () => (IconHome)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function IconHome(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
            fill: "currentColor"
        })
    });
}


}),
6190: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ MDXComponents)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(4819);
// EXTERNAL MODULE: ./node_modules/@saucelabs/theme-github-codeblock/build/theme/CodeBlock/index.js
var CodeBlock = __webpack_require__(1841);
var CodeBlock_default = /*#__PURE__*/__webpack_require__.n(CodeBlock);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// Simple component used to render inline code blocks
// its purpose is to be swizzled and customized
// MDX 1 used to have a inlineCode comp, see https://mdxjs.com/migrating/v2/
function CodeInline(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
        ...props
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Code.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function shouldBeInline(props) {
    return(// empty code blocks have no props.children,
    // see https://github.com/facebook/docusaurus/pull/9704
    typeof props.children !== 'undefined' && react.Children.toArray(props.children).every((el)=>typeof el === 'string' && !el.includes('\n')));
}
function MDXCode(props) {
    return shouldBeInline(props) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeInline, {
        ...props
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)((CodeBlock_default()), {
        ...props
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(3012);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/A.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function MDXA(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        ...props
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Pre.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function MDXPre(props) {
    // With MDX 2, this element is only used for fenced code blocks
    // It always receives a MDXComponents/Code as children
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    });
}

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(7026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBrokenLinks.js + 1 modules
var useBrokenLinks = __webpack_require__(1065);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(7227);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(7455);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function isInSummary(node) {
    if (!node) {
        return false;
    }
    return node.tagName === 'SUMMARY' || isInSummary(node.parentElement);
}
function hasParent(node, parent) {
    if (!node) {
        return false;
    }
    return node === parent || hasParent(node.parentElement, parent);
}
/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */ function Details(param) {
    let { summary, children, ...props } = param;
    (0,useBrokenLinks/* default */.Z)().collectAnchor(props.id);
    const isBrowser = (0,useIsBrowser/* default */.Z)();
    const detailsRef = (0,react.useRef)(null);
    const { collapsed, setCollapsed } = (0,Collapsible/* useCollapsible */.u)({
        initialState: !props.open
    });
    // Use a separate state for the actual details prop, because it must be set
    // only after animation completes, otherwise close animations won't work
    const [open, setOpen] = (0,react.useState)(props.open);
    const summaryElement = /*#__PURE__*/ react.isValidElement(summary) ? summary : /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
        children: summary ?? 'Details'
    });
    return(// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
        ...props,
        ref: detailsRef,
        open: open,
        "data-collapsed": collapsed,
        className: (0,clsx/* default */.Z)(styles_module.details, isBrowser && styles_module.isBrowser, props.className),
        onMouseDown: (e)=>{
            const target = e.target;
            // Prevent a double-click to highlight summary text
            if (isInSummary(target) && e.detail > 1) {
                e.preventDefault();
            }
        },
        onClick: (e)=>{
            e.stopPropagation(); // For isolation of multiple nested details/summary
            const target = e.target;
            const shouldToggle = isInSummary(target) && hasParent(target, detailsRef.current);
            if (!shouldToggle) {
                return;
            }
            e.preventDefault();
            if (collapsed) {
                setCollapsed(false);
                setOpen(true);
            } else {
                setCollapsed(true);
            // Don't do this, it breaks close animation!
            // setOpen(false);
            }
        },
        children: [
            summaryElement,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapsible/* Collapsible */.z, {
                lazy: false,
                collapsed: collapsed,
                onCollapseTransitionEnd: (newCollapsed)=>{
                    setCollapsed(newCollapsed);
                    setOpen(!newCollapsed);
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: styles_module.collapsibleContent,
                    children: children
                })
            })
        ]
    }));
} //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Details_styles_module = ({"details":"details_b_Ee"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses = 'alert alert--info';
function Details_Details(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Details, {
        ...props,
        className: (0,clsx/* default */.Z)(InfimaClasses, Details_styles_module.details, props.className)
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Details.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function MDXDetails(props) {
    const items = react.Children.toArray(props.children);
    // Split summary item from the rest to pass it as a separate prop to the
    // Details theme component
    const summary = items.find((item)=>/*#__PURE__*/ react.isValidElement(item) && item.type === 'summary');
    const children = /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: items.filter((item)=>item !== summary)
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Details_Details, {
        ...props,
        summary: summary,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(4403);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Heading.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function MDXHeading(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
        ...props
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Ul_styles_module = ({"containsTaskList":"containsTaskList_mC6p"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function transformUlClassName(className) {
    // Fix https://github.com/facebook/docusaurus/issues/9098
    if (typeof className === 'undefined') {
        return undefined;
    }
    return (0,clsx/* default */.Z)(className, // This class is set globally by GitHub/MDX. We keep the global class, and
    // add another class to get a task list without the default ul styling
    // See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
    className?.includes('contains-task-list') && Ul_styles_module.containsTaskList);
}
function MDXUl(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        ...props,
        className: transformUlClassName(props.className)
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Li.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function MDXLi(props) {
    // MDX Footnotes have ids such as <li id="user-content-fn-1-953011">
    (0,useBrokenLinks/* default */.Z)().collectAnchor(props.id);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        ...props
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Img_styles_module = ({"img":"img_ev3q"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function transformImgClassName(className) {
    return (0,clsx/* default */.Z)(className, Img_styles_module.img);
}
function MDXImg(props) {
    return(// eslint-disable-next-line jsx-a11y/alt-text
    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
        decoding: "async",
        loading: "lazy",
        ...props,
        className: transformImgClassName(props.className)
    }));
}

// EXTERNAL MODULE: ./src/theme/Admonition/index.js + 14 modules
var Admonition = __webpack_require__(9954);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Noop.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* ESM default export */ const Noop = ((()=>null));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 












const MDXComponents_MDXComponents = {
    Head: Head/* default */.Z,
    details: MDXDetails,
    Details: MDXDetails,
    code: MDXCode,
    a: MDXA,
    pre: MDXPre,
    ul: MDXUl,
    li: MDXLi,
    img: MDXImg,
    h1: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MDXHeading, {
            as: "h1",
            ...props
        }),
    h2: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MDXHeading, {
            as: "h2",
            ...props
        }),
    h3: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MDXHeading, {
            as: "h3",
            ...props
        }),
    h4: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MDXHeading, {
            as: "h4",
            ...props
        }),
    h5: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MDXHeading, {
            as: "h5",
            ...props
        }),
    h6: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MDXHeading, {
            as: "h6",
            ...props
        }),
    admonition: Admonition/* default */.Z,
    mermaid: Noop
};
/* ESM default export */ const MDXComponents = (MDXComponents_MDXComponents);


}),
5939: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXContent)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65);
/* ESM import */var _theme_MDXComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6625);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function MDXContent(param) {
    let { children } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .MDXProvider */.Z, {
        components: _theme_MDXComponents__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z,
        children: children
    });
}


}),
5434: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TOCCollapsible)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(7026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(7455);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(6365);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(6025);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tocCollapsibleButton":"tocCollapsibleButton_TO0P","tocCollapsibleButtonExpanded":"tocCollapsibleButtonExpanded_MG3E"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function TOCCollapsibleCollapseButton(param) {
    let { collapsed, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        type: "button",
        ...props,
        className: (0,clsx/* default */.Z)('clean-btn', styles_module.tocCollapsibleButton, !collapsed && styles_module.tocCollapsibleButtonExpanded, props.className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
            id: "theme.TOCCollapsible.toggleButtonLabel",
            description: "The label used by the button on the collapsible TOC component",
            children: "On this page"
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const TOCCollapsible_styles_module = ({"tocCollapsible":"tocCollapsible_ETCw","tocCollapsibleContent":"tocCollapsibleContent_vkbj","tocCollapsibleExpanded":"tocCollapsibleExpanded_sAul"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function TOCCollapsible(param) {
    let { toc, className, minHeadingLevel, maxHeadingLevel } = param;
    const { collapsed, toggleCollapsed } = (0,Collapsible/* useCollapsible */.u)({
        initialState: true
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.Z)(TOCCollapsible_styles_module.tocCollapsible, !collapsed && TOCCollapsible_styles_module.tocCollapsibleExpanded, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCCollapsibleCollapseButton, {
                collapsed: collapsed,
                onClick: toggleCollapsed
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapsible/* Collapsible */.z, {
                lazy: true,
                className: TOCCollapsible_styles_module.tocCollapsibleContent,
                collapsed: collapsed,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCItems/* default */.Z, {
                    toc: toc,
                    minHeadingLevel: minHeadingLevel,
                    maxHeadingLevel: maxHeadingLevel
                })
            })
        ]
    });
}


}),
6365: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TOCItems)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(140);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function treeifyTOC(flatTOC) {
    const headings = flatTOC.map((heading)=>({
            ...heading,
            parentIndex: -1,
            children: []
        }));
    // Keep track of which previous index would be the current heading's direct
    // parent. Each entry <i> is the last index of the `headings` array at heading
    // level <i>. We will modify these indices as we iterate through all headings.
    // e.g. if an ### H3 was last seen at index 2, then prevIndexForLevel[3] === 2
    // indices 0 and 1 will remain unused.
    const prevIndexForLevel = Array(7).fill(-1);
    headings.forEach((curr, currIndex)=>{
        // Take the last seen index for each ancestor level. the highest index will
        // be the direct ancestor of the current heading.
        const ancestorLevelIndexes = prevIndexForLevel.slice(2, curr.level);
        curr.parentIndex = Math.max(...ancestorLevelIndexes);
        // Mark that curr.level was last seen at the current index.
        prevIndexForLevel[curr.level] = currIndex;
    });
    const rootNodes = [];
    // For a given parentIndex, add each Node into that parent's `children` array
    headings.forEach((heading)=>{
        const { parentIndex, ...rest } = heading;
        if (parentIndex >= 0) {
            headings[parentIndex].children.push(rest);
        } else {
            rootNodes.push(rest);
        }
    });
    return rootNodes;
}
/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect. Memoized for performance.
 */ function useTreeifiedTOC(toc) {
    return useMemo(()=>treeifyTOC(toc), [
        toc
    ]);
}
function filterTOC(param) {
    let { toc, minHeadingLevel, maxHeadingLevel } = param;
    function isValid(item) {
        return item.level >= minHeadingLevel && item.level <= maxHeadingLevel;
    }
    return toc.flatMap((item)=>{
        const filteredChildren = filterTOC({
            toc: item.children,
            minHeadingLevel,
            maxHeadingLevel
        });
        if (isValid(item)) {
            return [
                {
                    ...item,
                    children: filteredChildren
                }
            ];
        }
        return filteredChildren;
    });
}
/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect, applying the `minHeadingLevel` and `maxHeadingLevel`.
 * Memoized for performance.
 *
 * **Important**: this is not the same as `useTreeifiedTOC(toc.filter(...))`,
 * because we have to filter the TOC after it has been treeified. This is mostly
 * to ensure that weird TOC structures preserve their semantics. For example, an
 * h3-h2-h4 sequence should not be treeified as an "h3 > h4" hierarchy with
 * min=3, max=4, but should rather be "[h3, h4]" (since the h2 heading has split
 * the two headings and they are not parent-children)
 */ function useFilteredAndTreeifiedTOC(param) {
    let { toc, minHeadingLevel, maxHeadingLevel } = param;
    return (0,react.useMemo)(()=>filterTOC({
            toc: treeifyTOC(toc),
            minHeadingLevel,
            maxHeadingLevel
        }), [
        toc,
        minHeadingLevel,
        maxHeadingLevel
    ]);
} //# sourceMappingURL=tocUtils.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// TODO make the hardcoded theme-classic classnames configurable (or add them
// to ThemeClassNames?)
/**
 * If the anchor has no height and is just a "marker" in the DOM; we'll use the
 * parent (normally the link text) rect boundaries instead
 */ function getVisibleBoundingClientRect(element) {
    const rect = element.getBoundingClientRect();
    const hasNoHeight = rect.top === rect.bottom;
    if (hasNoHeight) {
        return getVisibleBoundingClientRect(element.parentNode);
    }
    return rect;
}
/**
 * Considering we divide viewport into 2 zones of each 50vh, this returns true
 * if an element is in the first zone (i.e., appear in viewport, near the top)
 */ function isInViewportTopHalf(boundingRect) {
    return boundingRect.top > 0 && boundingRect.bottom < window.innerHeight / 2;
}
function getAnchors(param) {
    let { minHeadingLevel, maxHeadingLevel } = param;
    const selectors = [];
    for(let i = minHeadingLevel; i <= maxHeadingLevel; i += 1){
        selectors.push(`h${i}.anchor`);
    }
    return Array.from(document.querySelectorAll(selectors.join()));
}
function getActiveAnchor(anchors, param) {
    let { anchorTopOffset } = param;
    // Naming is hard: The "nextVisibleAnchor" is the first anchor that appear
    // under the viewport top boundary. It does not mean this anchor is visible
    // yet, but if user continues scrolling down, it will be the first to become
    // visible
    const nextVisibleAnchor = anchors.find((anchor)=>{
        const boundingRect = getVisibleBoundingClientRect(anchor);
        return boundingRect.top >= anchorTopOffset;
    });
    if (nextVisibleAnchor) {
        const boundingRect = getVisibleBoundingClientRect(nextVisibleAnchor);
        // If anchor is in the top half of the viewport: it is the one we consider
        // "active" (unless it's too close to the top and and soon to be scrolled
        // outside viewport)
        if (isInViewportTopHalf(boundingRect)) {
            return nextVisibleAnchor;
        }
        // If anchor is in the bottom half of the viewport, or under the viewport,
        // we consider the active anchor is the previous one. This is because the
        // main text appearing in the user screen mostly belong to the previous
        // anchor. Returns null for the first anchor, see
        // https://github.com/facebook/docusaurus/issues/5318
        return anchors[anchors.indexOf(nextVisibleAnchor) - 1] ?? null;
    }
    // No anchor under viewport top (i.e. we are at the bottom of the page),
    // highlight the last anchor found
    return anchors[anchors.length - 1] ?? null;
}
function getLinkAnchorValue(link) {
    return decodeURIComponent(link.href.substring(link.href.indexOf('#') + 1));
}
function getLinks(linkClassName) {
    return Array.from(document.getElementsByClassName(linkClassName));
}
function getNavbarHeight() {
    // Not ideal to obtain actual height this way
    // Using TS ! (not ?) because otherwise a bad selector would be un-noticed
    return document.querySelector('.navbar').clientHeight;
}
function useAnchorTopOffsetRef() {
    const anchorTopOffsetRef = (0,react.useRef)(0);
    const { navbar: { hideOnScroll } } = (0,useThemeConfig/* useThemeConfig */.L)();
    (0,react.useEffect)(()=>{
        anchorTopOffsetRef.current = hideOnScroll ? 0 : getNavbarHeight();
    }, [
        hideOnScroll
    ]);
    return anchorTopOffsetRef;
}
/**
 * Side-effect that applies the active class name to the TOC heading that the
 * user is currently viewing. Disabled when `config` is undefined.
 */ function useTOCHighlight(config) {
    const lastActiveLinkRef = (0,react.useRef)(undefined);
    const anchorTopOffsetRef = useAnchorTopOffsetRef();
    (0,react.useEffect)(()=>{
        if (!config) {
            // No-op, highlighting is disabled
            return ()=>{};
        }
        const { linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel } = config;
        function updateLinkActiveClass(link, active) {
            if (active) {
                if (lastActiveLinkRef.current && lastActiveLinkRef.current !== link) {
                    lastActiveLinkRef.current.classList.remove(linkActiveClassName);
                }
                link.classList.add(linkActiveClassName);
                lastActiveLinkRef.current = link;
            // link.scrollIntoView({block: 'nearest'});
            } else {
                link.classList.remove(linkActiveClassName);
            }
        }
        function updateActiveLink() {
            const links = getLinks(linkClassName);
            const anchors = getAnchors({
                minHeadingLevel,
                maxHeadingLevel
            });
            const activeAnchor = getActiveAnchor(anchors, {
                anchorTopOffset: anchorTopOffsetRef.current
            });
            const activeLink = links.find((link)=>activeAnchor && activeAnchor.id === getLinkAnchorValue(link));
            links.forEach((link)=>{
                updateLinkActiveClass(link, link === activeLink);
            });
        }
        document.addEventListener('scroll', updateActiveLink);
        document.addEventListener('resize', updateActiveLink);
        updateActiveLink();
        return ()=>{
            document.removeEventListener('scroll', updateActiveLink);
            document.removeEventListener('resize', updateActiveLink);
        };
    }, [
        config,
        anchorTopOffsetRef
    ]);
} //# sourceMappingURL=useTOCHighlight.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(3012);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/Tree.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


// Recursive component rendering the toc tree
function TOCItemTree(param) {
    let { toc, className, linkClassName, isChild } = param;
    if (!toc.length) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        className: isChild ? undefined : className,
        children: toc.map((heading)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        to: `#${heading.id}`,
                        className: linkClassName ?? undefined,
                        // Developer provided the HTML, so assume it's safe.
                        dangerouslySetInnerHTML: {
                            __html: heading.value
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCItemTree, {
                        isChild: true,
                        toc: heading.children,
                        className: className,
                        linkClassName: linkClassName
                    })
                ]
            }, heading.id))
    });
}
// Memo only the tree root is enough
/* ESM default export */ const Tree = (/*#__PURE__*/react.memo(TOCItemTree));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function TOCItems(param) {
    let { toc, className = 'table-of-contents table-of-contents__left-border', linkClassName = 'table-of-contents__link', linkActiveClassName = undefined, minHeadingLevel: minHeadingLevelOption, maxHeadingLevel: maxHeadingLevelOption, ...props } = param;
    const themeConfig = (0,useThemeConfig/* useThemeConfig */.L)();
    const minHeadingLevel = minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
    const maxHeadingLevel = maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;
    const tocTree = useFilteredAndTreeifiedTOC({
        toc,
        minHeadingLevel,
        maxHeadingLevel
    });
    const tocHighlightConfig = (0,react.useMemo)(()=>{
        if (linkClassName && linkActiveClassName) {
            return {
                linkClassName,
                linkActiveClassName,
                minHeadingLevel,
                maxHeadingLevel
            };
        }
        return undefined;
    }, [
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel
    ]);
    useTOCHighlight(tocHighlightConfig);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tree, {
        toc: tocTree,
        className: className,
        linkClassName: linkClassName,
        ...props
    });
}


}),
5525: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(7026);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function TabItem(param) {
    let { children, hidden, className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "tabpanel",
        className: (0,clsx/* default */.Z)(styles_module.tabItem, className),
        hidden,
        children: children
    });
}


}),
1116: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  X: () => (processAdmonitionProps)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children) {
    const items = react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children);
    const mdxAdmonitionTitleWrapper = items.find((item)=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(item) && item.type === 'mdxAdmonitionTitle');
    const rest = items.filter((item)=>item !== mdxAdmonitionTitleWrapper);
    const mdxAdmonitionTitle = mdxAdmonitionTitleWrapper?.props.children;
    return {
        mdxAdmonitionTitle,
        rest: rest.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: rest
        }) : null
    };
}
function processAdmonitionProps(props) {
    const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(props.children);
    const title = props.title ?? mdxAdmonitionTitle;
    return {
        ...props,
        // Do not return "title: undefined" prop
        // this might create unwanted props overrides when merging props
        // For example: {...default,...props}
        ...title && {
            title
        },
        children: rest
    };
} //# sourceMappingURL=admonitionUtils.js.map


}),
3057: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Y: () => (useTabs),
  h: () => (sanitizeTabsChildren)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* ESM import */var _docusaurus_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6550);
/* ESM import */var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2000);
/* ESM import */var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4520);
/* ESM import */var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8341);
/* ESM import */var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6009);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp) {
    const { props } = comp;
    return !!props && typeof props === 'object' && 'value' in props;
}
function sanitizeTabsChildren(children) {
    return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child)=>child !== '\n').map((child)=>{
        if (!child || /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child) && isTabItem(child)) {
            return child;
        }
        // child.type.name will give non-sensical values in prod because of
        // minification, but we assume it won't throw in prod.
        throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
        typeof child.type === 'string' ? child.type : child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);
    })?.filter(Boolean) ?? [];
}
function extractChildrenTabValues(children) {
    return sanitizeTabsChildren(children).map((param)=>{
        let { props: { value, label, attributes, default: isDefault } } = param;
        return {
            value,
            label,
            attributes,
            default: isDefault
        };
    });
}
function ensureNoDuplicateValue(values) {
    const dup = (0,_index__WEBPACK_IMPORTED_MODULE_2__/* .duplicates */.lx)(values, (a, b)=>a.value === b.value);
    if (dup.length > 0) {
        throw new Error(`Docusaurus error: Duplicate values "${dup.map((a)=>a.value).join(', ')}" found in <Tabs>. Every value needs to be unique.`);
    }
}
function useTabValues(props) {
    const { values: valuesProp, children } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const values = valuesProp ?? extractChildrenTabValues(children);
        ensureNoDuplicateValue(values);
        return values;
    }, [
        valuesProp,
        children
    ]);
}
function isValidValue(param) {
    let { value, tabValues } = param;
    return tabValues.some((a)=>a.value === value);
}
function getInitialStateValue(param) {
    let { defaultValue, tabValues } = param;
    if (tabValues.length === 0) {
        throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');
    }
    if (defaultValue) {
        // Warn user about passing incorrect defaultValue as prop.
        if (!isValidValue({
            value: defaultValue,
            tabValues
        })) {
            throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map((a)=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);
        }
        return defaultValue;
    }
    const defaultTabValue = tabValues.find((tabValue)=>tabValue.default) ?? tabValues[0];
    if (!defaultTabValue) {
        throw new Error('Unexpected error: 0 tabValues');
    }
    return defaultTabValue.value;
}
function getStorageKey(groupId) {
    if (!groupId) {
        return null;
    }
    return `docusaurus.tab.${groupId}`;
}
function getQueryStringKey(param) {
    let { queryString = false, groupId } = param;
    if (typeof queryString === 'string') {
        return queryString;
    }
    if (queryString === false) {
        return null;
    }
    if (queryString === true && !groupId) {
        throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);
    }
    return groupId ?? null;
}
function useTabQueryString(param) {
    let { queryString = false, groupId } = param;
    const history = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .useHistory */.k6)();
    const key = getQueryStringKey({
        queryString,
        groupId
    });
    const value = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .useQueryStringValue */._X)(key);
    const setValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        const searchParams = new URLSearchParams(history.location.search);
        searchParams.set(key, newValue);
        history.replace({
            ...history.location,
            search: searchParams.toString()
        });
    }, [
        key,
        history
    ]);
    return [
        value,
        setValue
    ];
}
function useTabStorage(param) {
    let { groupId } = param;
    const key = getStorageKey(groupId);
    const [value, storageSlot] = (0,_index__WEBPACK_IMPORTED_MODULE_5__/* .useStorageSlot */.Nk)(key);
    const setValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        storageSlot.set(newValue);
    }, [
        key,
        storageSlot
    ]);
    return [
        value,
        setValue
    ];
}
function useTabs(props) {
    const { defaultValue, queryString = false, groupId } = props;
    const tabValues = useTabValues(props);
    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>getInitialStateValue({
            defaultValue,
            tabValues
        }));
    const [queryStringValue, setQueryString] = useTabQueryString({
        queryString,
        groupId
    });
    const [storageValue, setStorageValue] = useTabStorage({
        groupId
    });
    // We sync valid querystring/storage value to state on change + hydration
    const valueToSync = (()=>{
        const value = queryStringValue ?? storageValue;
        if (!isValidValue({
            value,
            tabValues
        })) {
            return null;
        }
        return value;
    })();
    // Sync in a layout/sync effect is important, for useScrollPositionBlocker
    // See https://github.com/facebook/docusaurus/issues/8625
    (0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */.Z)(()=>{
        if (valueToSync) {
            setSelectedValue(valueToSync);
        }
    }, [
        valueToSync
    ]);
    const selectValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValue)=>{
        if (!isValidValue({
            value: newValue,
            tabValues
        })) {
            throw new Error(`Can't select invalid tab value=${newValue}`);
        }
        setSelectedValue(newValue);
        setQueryString(newValue);
        setStorageValue(newValue);
    }, [
        setQueryString,
        setStorageValue,
        tabValues
    ]);
    return {
        selectedValue,
        selectValue,
        tabValues
    };
} //# sourceMappingURL=tabsUtils.js.map


}),
3115: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  c: () => (usePluralForm)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2933);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://x.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms = [
    'zero',
    'one',
    'two',
    'few',
    'many',
    'other'
];
function sortPluralForms(pluralForms) {
    return OrderedPluralForms.filter((pf)=>pluralForms.includes(pf));
}
// Hardcoded english/fallback implementation
const EnglishPluralForms = {
    locale: 'en',
    pluralForms: sortPluralForms([
        'one',
        'other'
    ]),
    select: (count)=>count === 1 ? 'one' : 'other'
};
function createLocalePluralForms(locale) {
    const pluralRules = new Intl.PluralRules(locale);
    return {
        locale,
        pluralForms: sortPluralForms(pluralRules.resolvedOptions().pluralCategories),
        select: (count)=>pluralRules.select(count)
    };
}
/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */ function useLocalePluralForms() {
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */.Z)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        try {
            return createLocalePluralForms(currentLocale);
        } catch (err) {
            console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);
            return EnglishPluralForms;
        }
    }, [
        currentLocale
    ]);
}
function selectPluralMessage(pluralMessages, count, localePluralForms) {
    const separator = '|';
    const parts = pluralMessages.split(separator);
    if (parts.length === 1) {
        return parts[0];
    }
    if (parts.length > localePluralForms.pluralForms.length) {
        console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(',')}), but the message contains ${parts.length}: ${pluralMessages}`);
    }
    const pluralForm = localePluralForms.select(count);
    const pluralFormIndex = localePluralForms.pluralForms.indexOf(pluralForm);
    // In case of not enough plural form messages, we take the last one (other)
    // instead of returning undefined
    return parts[Math.min(pluralFormIndex, parts.length - 1)];
}
/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */ function usePluralForm() {
    const localePluralForm = useLocalePluralForms();
    return {
        selectMessage: (count, pluralMessages)=>selectPluralMessage(pluralMessages, count, localePluralForm)
    };
} //# sourceMappingURL=usePluralForm.js.map


}),
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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