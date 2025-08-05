(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1047"], {
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
const react_1 = __importDefault(__webpack_require__(67294));
const ReferenceCodeBlock_1 = __importDefault(__webpack_require__(95665));
const CodeBlock_1 = __importDefault(__webpack_require__(62834));
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
95665: (function (__unused_webpack_module, exports, __webpack_require__) {
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
const react_1 = __importStar(__webpack_require__(67294));
const CodeBlock_1 = __importDefault(__webpack_require__(62834));
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
87594: (function (module, exports) {
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
62834: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CodeBlock)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(7227);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(67026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(84239);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(30140);
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
var ThemeClassNames = __webpack_require__(84681);
// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(87594);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(85346);
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
var dist = __webpack_require__(83229);
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
var Translate = __webpack_require__(96025);
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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