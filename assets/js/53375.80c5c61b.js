"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["53375"], {
45192: (function (__unused_webpack_module, exports, __webpack_require__) {


/* unused reexport */ __webpack_require__(93940);
exports.parse = __webpack_require__(29563);


}),
29563: (function (module) {


// '<(' is process substitution operator and
// can be parsed the same as control operator
var CONTROL = '(?:' + [
	'\\|\\|',
	'\\&\\&',
	';;',
	'\\|\\&',
	'\\<\\(',
	'\\<\\<\\<',
	'>>',
	'>\\&',
	'<\\&',
	'[&;()|<>]'
].join('|') + ')';
var controlRE = new RegExp('^' + CONTROL + '$');
var META = '|&;()<> \\t';
var SINGLE_QUOTE = '"((\\\\"|[^"])*?)"';
var DOUBLE_QUOTE = '\'((\\\\\'|[^\'])*?)\'';
var hash = /^#$/;

var SQ = "'";
var DQ = '"';
var DS = '$';

var TOKEN = '';
var mult = 0x100000000; // Math.pow(16, 8);
for (var i = 0; i < 4; i++) {
	TOKEN += (mult * Math.random()).toString(16);
}
var startsWithToken = new RegExp('^' + TOKEN);

function matchAll(s, r) {
	var origIndex = r.lastIndex;

	var matches = [];
	var matchObj;

	while ((matchObj = r.exec(s))) {
		matches.push(matchObj);
		if (r.lastIndex === matchObj.index) {
			r.lastIndex += 1;
		}
	}

	r.lastIndex = origIndex;

	return matches;
}

function getVar(env, pre, key) {
	var r = typeof env === 'function' ? env(key) : env[key];
	if (typeof r === 'undefined' && key != '') {
		r = '';
	} else if (typeof r === 'undefined') {
		r = '$';
	}

	if (typeof r === 'object') {
		return pre + TOKEN + JSON.stringify(r) + TOKEN;
	}
	return pre + r;
}

function parseInternal(string, env, opts) {
	if (!opts) {
		opts = {};
	}
	var BS = opts.escape || '\\';
	var BAREWORD = '(\\' + BS + '[\'"' + META + ']|[^\\s\'"' + META + '])+';

	var chunker = new RegExp([
		'(' + CONTROL + ')', // control chars
		'(' + BAREWORD + '|' + SINGLE_QUOTE + '|' + DOUBLE_QUOTE + ')+'
	].join('|'), 'g');

	var matches = matchAll(string, chunker);

	if (matches.length === 0) {
		return [];
	}
	if (!env) {
		env = {};
	}

	var commented = false;

	return matches.map(function (match) {
		var s = match[0];
		if (!s || commented) {
			return void undefined;
		}
		if (controlRE.test(s)) {
			return { op: s };
		}

		// Hand-written scanner/parser for Bash quoting rules:
		//
		// 1. inside single quotes, all characters are printed literally.
		// 2. inside double quotes, all characters are printed literally
		//    except variables prefixed by '$' and backslashes followed by
		//    either a double quote or another backslash.
		// 3. outside of any quotes, backslashes are treated as escape
		//    characters and not printed (unless they are themselves escaped)
		// 4. quote context can switch mid-token if there is no whitespace
		//     between the two quote contexts (e.g. all'one'"token" parses as
		//     "allonetoken")
		var quote = false;
		var esc = false;
		var out = '';
		var isGlob = false;
		var i;

		function parseEnvVar() {
			i += 1;
			var varend;
			var varname;
			var char = s.charAt(i);

			if (char === '{') {
				i += 1;
				if (s.charAt(i) === '}') {
					throw new Error('Bad substitution: ' + s.slice(i - 2, i + 1));
				}
				varend = s.indexOf('}', i);
				if (varend < 0) {
					throw new Error('Bad substitution: ' + s.slice(i));
				}
				varname = s.slice(i, varend);
				i = varend;
			} else if ((/[*@#?$!_-]/).test(char)) {
				varname = char;
				i += 1;
			} else {
				var slicedFromI = s.slice(i);
				varend = slicedFromI.match(/[^\w\d_]/);
				if (!varend) {
					varname = slicedFromI;
					i = s.length;
				} else {
					varname = slicedFromI.slice(0, varend.index);
					i += varend.index - 1;
				}
			}
			return getVar(env, '', varname);
		}

		for (i = 0; i < s.length; i++) {
			var c = s.charAt(i);
			isGlob = isGlob || (!quote && (c === '*' || c === '?'));
			if (esc) {
				out += c;
				esc = false;
			} else if (quote) {
				if (c === quote) {
					quote = false;
				} else if (quote == SQ) {
					out += c;
				} else { // Double quote
					if (c === BS) {
						i += 1;
						c = s.charAt(i);
						if (c === DQ || c === BS || c === DS) {
							out += c;
						} else {
							out += BS + c;
						}
					} else if (c === DS) {
						out += parseEnvVar();
					} else {
						out += c;
					}
				}
			} else if (c === DQ || c === SQ) {
				quote = c;
			} else if (controlRE.test(c)) {
				return { op: s };
			} else if (hash.test(c)) {
				commented = true;
				var commentObj = { comment: string.slice(match.index + i + 1) };
				if (out.length) {
					return [out, commentObj];
				}
				return [commentObj];
			} else if (c === BS) {
				esc = true;
			} else if (c === DS) {
				out += parseEnvVar();
			} else {
				out += c;
			}
		}

		if (isGlob) {
			return { op: 'glob', pattern: out };
		}

		return out;
	}).reduce(function (prev, arg) { // finalize parsed arguments
		// TODO: replace this whole reduce with a concat
		return typeof arg === 'undefined' ? prev : prev.concat(arg);
	}, []);
}

module.exports = function parse(s, env, opts) {
	var mapped = parseInternal(s, env, opts);
	if (typeof env !== 'function') {
		return mapped;
	}
	return mapped.reduce(function (acc, s) {
		if (typeof s === 'object') {
			return acc.concat(s);
		}
		var xs = s.split(RegExp('(' + TOKEN + '.*?' + TOKEN + ')', 'g'));
		if (xs.length === 1) {
			return acc.concat(xs[0]);
		}
		return acc.concat(xs.filter(Boolean).map(function (x) {
			if (startsWithToken.test(x)) {
				return JSON.parse(x.split(TOKEN)[1]);
			}
			return x;
		}));
	}, []);
};


}),
93940: (function (module) {


module.exports = function quote(xs) {
	return xs.map(function (s) {
		if (s === '') {
			return '\'\'';
		}
		if (s && typeof s === 'object') {
			return s.op.replace(/(.)/g, '\\$1');
		}
		if ((/["\s\\]/).test(s) && !(/'/).test(s)) {
			return "'" + s.replace(/(['])/g, '\\$1') + "'";
		}
		if ((/["'\s]/).test(s)) {
			return '"' + s.replace(/(["\\$`!])/g, '\\$1') + '"';
		}
		return String(s).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@[\\\]^`{|}])/g, '$1\\$2');
	}).join(' ');
};


}),
63307: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ r)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/assets/keycap.ascii.js
const n = `          .:=+++++=================-
         .--#*                       :.
        .-:-**                        -.
      .:-::-+*                        =:
     .:-:::-=#                         ::
    .-:::----**                        ..
   .-:::::---=#                         ..
  :-::::::----**                         ..
.:-::::::::----*=                        ..
.-::::::::------+-                        ..
..::::::::-------=                         ..
 .:::::----------++                        ..
   .:::----------+**+*++*+*++*+++*++++++++++:.
   ------------+*+=-=======================.
   .----------+*+=========================:.
    :--------+*+=-========================.
    .=------+*+=-========================:.
     .=----+*+=-------=================+-.
     .----+*+=----------================.
     .:=-+*+=----------=-==============-
      .-+*+=----------------===========.
       .-+=------------------====-====:.`;


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ScalarAsciiArt.vue.js + 1 modules
var ScalarAsciiArt_vue = __webpack_require__(57723);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/EmptyState.vue2.js




const p = { class: "flex-center flex w-full scale-75" }, m = { class: "relative" }, d = { class: "relative -ml-12" }, h = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "EmptyState",
  setup(_) {
    return (f, a) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", p, [
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", m, [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarHotkey */.RH), {
          class: "keycap-hotkey right-14 border-transparent py-0 text-xl",
          hotkey: ""
        }),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ScalarAsciiArt_vue/* ["default"] */.A, {
          art: (0,vue_runtime_esm_bundler/* .unref */.R1)(n),
          class: "text-c-3 !leading-[6px]"
        }, null, 8, ["art"])
      ]),
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", d, [
        a[0] || (a[0] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", { class: "keycap-hotkey right-16 text-xl" }, "K", -1)),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ScalarAsciiArt_vue/* ["default"] */.A, {
          art: (0,vue_runtime_esm_bundler/* .unref */.R1)(n),
          class: "keycap-n !leading-[6px]"
        }, null, 8, ["art"])
      ])
    ]));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper = __webpack_require__(94622);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/EmptyState.vue.js

/* empty css                */

const r = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(h, [["__scopeId", "data-v-45a9fc44"]]);



}),
57723: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ i)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/ScalarAsciiArt.vue2.js

const c = 500, o = 100, k = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ScalarAsciiArt",
  props: {
    art: {},
    animate: { type: Boolean }
  },
  setup(m) {
    const p = m, e = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => p.art.split(`
`)), u = (t, l) => ({
      animationDuration: `${t * o}ms, ${c}ms`,
      animationTimingFunction: `steps(${t}), step-end`,
      animationDelay: `${l * o}ms, 0ms`,
      animationIterationCount: `1, ${((e.value?.length ?? 0) + (e.value?.[e.value?.length - 1]?.length ?? 0) + 5) * o / c}`
    });
    return (t, l) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", {
      "aria-hidden": "true",
      class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["ascii-art font-code flex flex-col items-start text-[6px] leading-[7px]", { "ascii-art-animate": t.animate }]),
      role: "presentation",
      inert: ""
    }, [
      ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(e.value, (n, s) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("span", {
        key: s,
        class: "inline-block",
        style: (0,vue_runtime_esm_bundler/* .normalizeStyle */.Tr)({ width: `calc(${n.length + 1}ch)` })
      }, [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", {
          class: "inline-block whitespace-pre overflow-hidden",
          style: (0,vue_runtime_esm_bundler/* .normalizeStyle */.Tr)(u(n.length, s))
        }, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(n), 5)
      ], 4))), 128))
    ], 2));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper = __webpack_require__(94622);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/ScalarAsciiArt.vue.js

/* empty css                    */

const i = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(k, [["__scopeId", "data-v-69ebd973"]]);



}),
14074: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (u)
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92102);
/* ESM import */var _scalar_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4859);


const u = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */.pM)({
  __name: "ViewLayout",
  setup(m) {
    const { cx: e } = (0,_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .useBindCx */.AX)();
    return (r, s) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeProps */._B)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .guardReactiveProps */.Ng)(
      (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(e)(
        "flex flex-col min-h-0 flex-1 *:border-t first:*:border-t-0 md:*:border-t-0 xl:overflow-hidden md:flex-row leading-3"
      )
    )), [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .renderSlot */.RG)(r.$slots, "default")
    ], 16));
  }
});



}),
42149: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (x)
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92102);
/* ESM import */var _virtual_plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94622);


const c = {}, s = { class: "custom-scroll flex flex-col pr-0 *:border-t *:first:border-t-0 xl:flex-row *:xl:border-t-0 *:xl:border-l *:first:xl:border-l-0" };
function n(r, f) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)("div", s, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .renderSlot */.RG)(r.$slots, "default")
  ]);
}
const x = /* @__PURE__ */ (0,_virtual_plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */.A)(c, [["render", n]]);



}),
18434: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Request_vue_m)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/EmptyState.vue.js + 2 modules
var EmptyState_vue = __webpack_require__(63307);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayout.vue.js
var ViewLayout_vue = __webpack_require__(14074);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutContent.vue.js
var ViewLayoutContent_vue = __webpack_require__(42149);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/hooks/useSidebar.js
var useSidebar = __webpack_require__(58360);
// EXTERNAL MODULE: ./node_modules/shell-quote/index.js
var shell_quote = __webpack_require__(45192);
// EXTERNAL MODULE: ./node_modules/js-base64/base64.mjs
var base64 = __webpack_require__(58389);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/libs/parse-curl.js


function P(o) {
  const e = (0,shell_quote.parse)(o).map((i) => typeof i == "object" && "op" in i && i.op === "glob" ? i.pattern.trim() : typeof i == "string" ? i.trim() : i).filter((i) => i !== ""), a = { url: "" }, t = e[Symbol.iterator]();
  let r = t.next().value;
  for (; r; )
    r === "-X" || r === "--request" ? parse_curl_p(t, a) : r === "--url" ? parse_curl_n(t, a) : r === "-H" || r === "--header" ? parse_curl_d(t, a) : r === "--data" || r === "-d" || r === "--data-raw" || r === "--data-urlencode" || r === "--data-binary" || r === "--data-ascii" ? parse_curl_y(t, a, o) : typeof r == "string" && !a.url && (r.startsWith("http") || r.startsWith("www.")) ? parse_curl_n([r][Symbol.iterator](), a) : r === "-P" ? parse_curl_f(t, a) : typeof r == "string" && r.toLowerCase().includes("content-type") ? parse_curl_m(r, a) : r === "-u" || r === "--user" ? parse_curl_l(t, a) : (r === "-b" || r === "--cookie") && parse_curl_u(t, a), r = t.next().value;
  return a;
}
function parse_curl_p(o, e) {
  e.method = o.next().value.toLowerCase();
}
function parse_curl_n(o, e) {
  const a = new URL(o.next().value.replace(/['"]/g, ""));
  e.servers = [a.origin], e.path = a.pathname !== "/" ? a.pathname : "", e.url = e.servers[0] + e.path;
  const t = parse_curl_s(a.search);
  e.queryParameters = e.queryParameters ? [...e.queryParameters, ...t] : t;
}
function parse_curl_d(o, e) {
  const a = o.next().value.split(/:(.*)/);
  e.headers = e.headers || {}, a[1] !== void 0 ? e.headers[a[0].trim()] = a[1].trim() : e.headers[a[0].trim()] = "";
}
function parse_curl_f(o, e) {
  const a = o.next().value.replace(/['"]/g, "").split("=");
  e.pathVariables = e.pathVariables || {}, a[1] !== void 0 ? e.pathVariables[a[0].trim()] = a[1].trim() : e.pathVariables[a[0].trim()] = "";
}
function parse_curl_s(o) {
  const e = [];
  return new URL(o, "http://example.com").searchParams.forEach((t, r) => {
    e.push({ key: r, value: t });
  }), e;
}
function parse_curl_m(o, e) {
  const a = o.replace(/['"]/g, "").split(/:(.+)/);
  e.headers = e.headers || {}, a[0] && (a[1] !== void 0 ? e.headers[a[0].trim()] = a[1].trim() : e.headers[a[0].trim()] = "");
}
function parse_curl_l(o, e) {
  const a = o.next().value;
  try {
    const t = (0,base64/* .encode */.lF)(a);
    e.headers = e.headers || {}, e.headers.Authorization = `Basic ${t}`;
  } catch (t) {
    console.warn("Could not base64 encode these HTTP basic auth credentials:", a, t);
  }
}
function parse_curl_u(o, e) {
  const a = o.next().value;
  e.headers = e.headers || {}, e.headers.Cookie ? e.headers.Cookie += `; ${a}` : e.headers.Cookie = a.replace(/;$/, "");
}
function parse_curl_y(o, e, a) {
  const t = o.next().value;
  if (typeof t == "string" && (t.startsWith("@") ? e.body = "" : e.body = t, !e.url || a.includes("-G"))) {
    const r = parse_curl_s(`?${e.body}`);
    e.queryParameters = e.queryParameters ? [...e.queryParameters, ...r] : r;
  }
}


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/libs/importers/curl.js

function curl_l(o) {
  try {
    return JSON.parse(o);
  } catch {
    const s = {};
    return o.split("&").forEach((a) => {
      const [r, e] = a.split("=");
      r && e && (s[decodeURIComponent(r)] = decodeURIComponent(e));
    }), s;
  }
}
function curl_C(o) {
  const s = P(o), { method: a = "get", url: r, body: e = "", headers: p = {}, servers: y, queryParameters: m = [] } = s, i = new URL(r).pathname, d = e?.includes("=") && !e.startsWith("{") ? "application/x-www-form-urlencoded" : p["Content-Type"] || "", c = e ? curl_l(e) : {}, u = [
    ...Array.isArray(m) ? m.map(({ key: n, value: t }) => ({
      name: n,
      in: "query",
      schema: { type: typeof t, examples: [t] }
    })) : [],
    ...Object.entries(p || {}).map(([n, t]) => ({
      name: n,
      in: "header",
      schema: { type: typeof t },
      example: t
    }))
  ];
  return {
    method: a,
    url: r,
    path: i,
    headers: p,
    servers: y ?? [],
    ...Object.keys(c).length > 0 && {
      requestBody: {
        content: {
          [d]: {
            schema: {
              type: "object",
              properties: Object.fromEntries(
                Object.entries(c).map(([n, t]) => [n, { type: typeof t }])
              )
            },
            example: c
          }
        }
      }
    },
    parameters: u
  };
}


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/active-entities.js + 1 modules
var active_entities = __webpack_require__(17342);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestSection.vue.js + 15 modules
var RequestSection_vue = __webpack_require__(50133);
// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs + 6 modules
var vue_router = __webpack_require__(76522);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/AddressBar/AddressBar.vue.js + 5 modules
var AddressBar_vue = __webpack_require__(66687);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/hooks/useLayout.js
var useLayout = __webpack_require__(68864);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/OpenApiClientButton.vue.js + 1 modules
var OpenApiClientButton_vue = __webpack_require__(61242);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/store.js + 10 modules
var store = __webpack_require__(99456);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/RequestSubpageHeader.vue2.js








const RequestSubpageHeader_vue2_B = { class: "lg:min-h-header t-app__top-container flex w-full flex-wrap items-center justify-center border-b p-2 pt-2 lg:p-1 lg:pt-1" }, RequestSubpageHeader_vue2_S = { class: "mb-2 flex w-1/2 flex-row items-center gap-1 lg:mb-0 lg:flex-1 lg:px-1" }, RequestSubpageHeader_vue2_$ = { class: "mb-2 flex w-1/2 flex-row items-center justify-end gap-1 lg:mb-0 lg:flex-1 lg:px-2.5" }, O = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "RequestSubpageHeader",
  props: {
    collection: {},
    operation: {},
    server: {},
    environment: {},
    envVariables: {},
    workspace: {}
  },
  emits: ["hideModal", "importCurl"],
  setup(x) {
    const { hideClientButton: u, showSidebar: d, integration: c } = (0,store/* .useWorkspace */.hA)(), { isSidebarOpen: f } = (0,useSidebar/* .useSidebar */.cL)(), { layout: n } = (0,useLayout/* .useLayout */.g)(), { currentRoute: b } = (0,vue_router/* .useRouter */.rd)();
    return (e, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", RequestSubpageHeader_vue2_B, [
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", RequestSubpageHeader_vue2_S, [
        (0,vue_runtime_esm_bundler/* .unref */.R1)(d) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", {
          key: 0,
          class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["size-8", { hidden: (0,vue_runtime_esm_bundler/* .unref */.R1)(n) === "modal" && !(0,vue_runtime_esm_bundler/* .unref */.R1)(f) }])
        }, null, 2)) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
      ]),
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)(AddressBar_vue/* ["default"] */.A, {
        collection: e.collection,
        envVariables: e.envVariables,
        environment: e.environment,
        operation: e.operation,
        server: e.server,
        workspace: e.workspace,
        onImportCurl: t[0] || (t[0] = (a) => e.$emit("importCurl", a))
      }, null, 8, ["collection", "envVariables", "environment", "operation", "server", "workspace"]),
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", RequestSubpageHeader_vue2_$, [
        (0,vue_runtime_esm_bundler/* .unref */.R1)(n) === "modal" && e.collection.documentUrl && !(0,vue_runtime_esm_bundler/* .unref */.R1)(u) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(OpenApiClientButton_vue/* ["default"] */.A), {
          key: 0,
          buttonSource: "modal",
          class: "!w-fit lg:-mr-1",
          integration: (0,vue_runtime_esm_bundler/* .unref */.R1)(c) ?? e.collection.integration ?? null,
          source: (0,vue_runtime_esm_bundler/* .unref */.R1)(b).query.source === "gitbook" ? "gitbook" : "api-reference",
          url: e.collection.documentUrl
        }, null, 8, ["integration", "source", "url"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
        (0,vue_runtime_esm_bundler/* .unref */.R1)(n) === "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("button", {
          key: 1,
          class: "app-exit-button gitbook-hidden zoomed:static zoomed:p-1 fixed top-2 right-2 rounded-full p-2",
          type: "button",
          onClick: t[1] || (t[1] = (a) => e.$emit("hideModal"))
        }, [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
            icon: "Close",
            size: "lg",
            thickness: "2"
          }),
          t[3] || (t[3] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", { class: "sr-only" }, "Close Client", -1))
        ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
        (0,vue_runtime_esm_bundler/* .unref */.R1)(n) === "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("button", {
          key: 2,
          class: "text-c-1 hover:bg-b-2 active:text-c-1 gitbook-show -mr-1.5 rounded p-2",
          type: "button",
          onClick: t[2] || (t[2] = (a) => e.$emit("hideModal"))
        }, [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
            icon: "Close",
            size: "md",
            thickness: "1.75"
          }),
          t[4] || (t[4] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", { class: "sr-only" }, "Close Client", -1))
        ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
      ])
    ]));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper = __webpack_require__(94622);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/RequestSubpageHeader.vue.js

/* empty css                          */

const RequestSubpageHeader_vue_p = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(O, [["__scopeId", "data-v-c8df97c6"]]);


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/SectionFilter.vue.js + 2 modules
var SectionFilter_vue = __webpack_require__(78262);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutSection.vue.js
var ViewLayoutSection_vue = __webpack_require__(70139);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/DataTable/DataTable.vue.js
var DataTable_vue = __webpack_require__(83638);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/DataTable/DataTableRow.vue.js
var DataTableRow_vue = __webpack_require__(83920);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/DataTable/DataTableText.vue.js
var DataTableText_vue = __webpack_require__(28969);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/HelpfulLink.vue.js

const HelpfulLink_vue_l = ["href"], HelpfulLink_vue_p = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "HelpfulLink",
  props: {
    href: {}
  },
  setup(s) {
    return (e, f) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("a", {
      class: "decoration-c-3 cursor-help underline underline-offset-2",
      href: e.href,
      rel: "noopener noreferrer",
      target: "_blank"
    }, [
      (0,vue_runtime_esm_bundler/* .renderSlot */.RG)(e.$slots, "default")
    ], 8, HelpfulLink_vue_l));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutCollapse.vue.js
var ViewLayoutCollapse_vue = __webpack_require__(26369);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/data/httpHeaders.js
const httpHeaders_e = [
  {
    name: "Accept",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept"
  },
  {
    name: "Accept-CH",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-CH"
  },
  {
    name: "Accept-CH-Lifetime",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-CH-Lifetime"
  },
  {
    name: "Accept-Charset",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset"
  },
  {
    name: "Accept-Encoding",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding"
  },
  {
    name: "Accept-Language",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language"
  },
  {
    name: "Accept-Patch",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Patch"
  },
  {
    name: "Accept-Post",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Post"
  },
  {
    name: "Accept-Ranges",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges"
  },
  {
    name: "Access-Control-Allow-Credentials",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials"
  },
  {
    name: "Access-Control-Allow-Headers",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers"
  },
  {
    name: "Access-Control-Allow-Methods",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods"
  },
  {
    name: "Access-Control-Allow-Origin",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin"
  },
  {
    name: "Access-Control-Expose-Headers",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers"
  },
  {
    name: "Access-Control-Max-Age",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age"
  },
  {
    name: "Access-Control-Request-Headers",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers"
  },
  {
    name: "Access-Control-Request-Method",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method"
  },
  {
    name: "Age",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Age"
  },
  {
    name: "Allow",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Allow"
  },
  {
    name: "Alt-Svc",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Alt-Svc"
  },
  {
    name: "Alt-Used",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Alt-Used"
  },
  {
    name: "Authorization",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization"
  },
  {
    name: "Cache-Control",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"
  },
  {
    name: "Clear-Site-Data",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data"
  },
  {
    name: "Connection",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection"
  },
  {
    name: "Content-Disposition",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"
  },
  {
    name: "Content-DPR",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-DPR"
  },
  {
    name: "Content-Encoding",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding"
  },
  {
    name: "Content-Language",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language"
  },
  {
    name: "Content-Length",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length"
  },
  {
    name: "Content-Location",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location"
  },
  {
    name: "Content-Range",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range"
  },
  {
    name: "Content-Security-Policy",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy"
  },
  {
    name: "Content-Security-Policy-Report-Only",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only"
  },
  {
    name: "Content-Type",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type"
  },
  {
    name: "Cookie",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie"
  },
  {
    name: "Critical-CH",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Critical-CH"
  },
  {
    name: "Cross-Origin-Embedder-Policy",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy"
  },
  {
    name: "Cross-Origin-Opener-Policy",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy"
  },
  {
    name: "Cross-Origin-Resource-Policy",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy"
  },
  {
    name: "Date",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date"
  },
  {
    name: "Device-Memory",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Device-Memory"
  },
  {
    name: "Digest",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Digest"
  },
  {
    name: "DNT",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT"
  },
  {
    name: "Downlink",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Downlink"
  },
  {
    name: "DPR",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DPR"
  },
  {
    name: "Early-Data",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Early-Data"
  },
  {
    name: "ECT",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ECT"
  },
  {
    name: "ETag",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"
  },
  {
    name: "Expect",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect"
  },
  {
    name: "Expect-CT",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT"
  },
  {
    name: "Expires",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires"
  },
  {
    name: "Forwarded",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded"
  },
  {
    name: "From",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/From"
  },
  {
    name: "Host",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host"
  },
  {
    name: "If-Match",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match"
  },
  {
    name: "If-Modified-Since",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since"
  },
  {
    name: "If-None-Match",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match"
  },
  {
    name: "If-Range",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Range"
  },
  {
    name: "If-Unmodified-Since",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since"
  },
  {
    name: "Keep-Alive",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Keep-Alive"
  },
  {
    name: "Large-Allocation",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Large-Allocation"
  },
  {
    name: "Last-Modified",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified"
  },
  {
    name: "Link",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link"
  },
  {
    name: "Location",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location"
  },
  {
    name: "Max-Forwards",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Max-Forwards"
  },
  {
    name: "NEL",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/NEL"
  },
  {
    name: "Origin",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin"
  },
  {
    name: "Permissions-Policy",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy"
  },
  {
    name: "Pragma",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Pragma"
  },
  {
    name: "Proxy-Authenticate",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate"
  },
  {
    name: "Proxy-Authorization",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authorization"
  },
  {
    name: "Range",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range"
  },
  {
    name: "Referer",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer"
  },
  {
    name: "Referrer-Policy",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy"
  },
  {
    name: "Retry-After",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After"
  },
  {
    name: "RTT",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/RTT"
  },
  {
    name: "Save-Data",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data"
  },
  {
    name: "Sec-CH-Prefers-Reduced-Motion",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion"
  },
  {
    name: "Sec-CH-Prefers-Reduced-Transparency",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Transparency"
  },
  {
    name: "Sec-CH-UA",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA"
  },
  {
    name: "Sec-CH-UA-Arch",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Arch"
  },
  {
    name: "Sec-CH-UA-Bitness",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Bitness"
  },
  {
    name: "Sec-CH-UA-Full-Version",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version"
  },
  {
    name: "Sec-CH-UA-Full-Version-List",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version-List"
  },
  {
    name: "Sec-CH-UA-Mobile",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Mobile"
  },
  {
    name: "Sec-CH-UA-Model",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Model"
  },
  {
    name: "Sec-CH-UA-Platform",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform"
  },
  {
    name: "Sec-CH-UA-Platform-Version",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform-Version"
  },
  {
    name: "Sec-Fetch-Dest",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest"
  },
  {
    name: "Sec-Fetch-Mode",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode"
  },
  {
    name: "Sec-Fetch-Site",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site"
  },
  {
    name: "Sec-Fetch-User",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User"
  },
  {
    name: "Sec-GPC",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-GPC"
  },
  {
    name: "Sec-Purpose",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Purpose"
  },
  {
    name: "Sec-WebSocket-Accept",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-WebSocket-Accept"
  },
  {
    name: "Server",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server"
  },
  {
    name: "Server-Timing",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing"
  },
  {
    name: "Service-Worker-Navigation-Preload",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Service-Worker-Navigation-Preload"
  },
  {
    name: "Set-Cookie",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"
  },
  {
    name: "SourceMap",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/SourceMap"
  },
  {
    name: "Strict-Transport-Security",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security"
  },
  {
    name: "TE",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/TE"
  },
  {
    name: "Timing-Allow-Origin",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Timing-Allow-Origin"
  },
  {
    name: "Tk",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Tk"
  },
  {
    name: "Trailer",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer"
  },
  {
    name: "Transfer-Encoding",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding"
  },
  {
    name: "Upgrade",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade"
  },
  {
    name: "Upgrade-Insecure-Requests",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests"
  },
  {
    name: "User-Agent",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"
  },
  {
    name: "Vary",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary"
  },
  {
    name: "Via",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Via"
  },
  {
    name: "Viewport-Width",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Viewport-Width"
  },
  {
    name: "Want-Digest",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Want-Digest"
  },
  {
    name: "Warning",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Warning"
  },
  {
    name: "Width",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Width"
  },
  {
    name: "WWW-Authenticate",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate"
  },
  {
    name: "X-Content-Type-Options",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options"
  },
  {
    name: "X-DNS-Prefetch-Control",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control"
  },
  {
    name: "Non-standard",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Non-standard"
  },
  {
    name: "X-Forwarded-For",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For"
  },
  {
    name: "Non-standard",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Non-standard"
  },
  {
    name: "X-Forwarded-Host",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host"
  },
  {
    name: "Non-standard",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Non-standard"
  },
  {
    name: "X-Forwarded-Proto",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto"
  },
  {
    name: "Non-standard",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Non-standard"
  },
  {
    name: "X-Frame-Options",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options"
  },
  {
    name: "X-XSS-Protection",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection"
  },
  {
    name: "Cf-Cache-Status",
    url: "https://developers.cloudflare.com/cache/concepts/default-cache-behavior/#cloudflare-cache-responses"
  },
  {
    name: "Cf-Ray",
    url: "https://developers.cloudflare.com/fundamentals/get-started/reference/http-request-headers/#cf-ray"
  },
  {
    name: "Report-To",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to"
  },
  {
    name: "X-Cloud-Trace-Context",
    url: "https://cloud.google.com/trace/docs/trace-context#legacy-http-header"
  },
  {
    name: "Speculation-Rules",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Speculation-Rules"
  }
];


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/DataTable/DataTableHeader.vue.js
var DataTableHeader_vue = __webpack_require__(51331);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/RequestHeaders.vue.js








const RequestHeaders_vue_h = {
  key: 0,
  class: "max-h-[calc(100%-32px)] overflow-y-auto"
}, H = {
  key: 1,
  class: "text-c-3 bg-b-1 flex min-h-12 items-center justify-center rounded border px-4 text-base"
}, z = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "RequestHeaders",
  props: {
    headers: {}
  },
  setup(C) {
    const m = (s) => httpHeaders_e.find(
      (t) => t.name.toLowerCase() === s.toLowerCase()
    );
    return (s, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayoutCollapse_vue/* ["default"] */.A, {
      class: "overflow-auto",
      defaultOpen: !1,
      itemCount: s.headers.length
    }, {
      title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...t[0] || (t[0] = [
        (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("Request Headers", -1)
      ])]),
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        s.headers.length ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", RequestHeaders_vue_h, [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTable_vue/* ["default"] */.A, {
            columns: ["minmax(auto, min-content)", "minmax(50%, 1fr)"],
            scroll: ""
          }, {
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTableRow_vue/* ["default"] */.A, { class: "sr-only !block" }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(DataTableHeader_vue/* ["default"] */.A), null, {
                    default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...t[1] || (t[1] = [
                      (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("Header Key", -1)
                    ])]),
                    _: 1
                  }),
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(DataTableHeader_vue/* ["default"] */.A), null, {
                    default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...t[2] || (t[2] = [
                      (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("Header Value", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(s.headers, (o) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(DataTableRow_vue/* ["default"] */.A, {
                key: o.name,
                class: "group/row text-c-1"
              }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTableText_vue/* ["default"] */.A, { class: "bg-b-1 sticky left-0 z-1 max-w-full group-first/row:border-t-0" }, {
                    default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                      typeof m(o.name)?.url == "string" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(HelpfulLink_vue_p, {
                        key: 0,
                        class: "decoration-c-3",
                        href: m(o.name).url
                      }, {
                        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                          (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)((0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(o.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"])) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 1 }, [
                        (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)((0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(o.name), 1)
                      ], 64))
                    ]),
                    _: 2
                  }, 1024),
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTableText_vue/* ["default"] */.A, {
                    class: "z-0 group-first/row:border-t-0",
                    text: o.value
                  }, null, 8, ["text"])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          })
        ])) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", H, " No Headers "))
      ]),
      _: 1
    }, 8, ["itemCount"]));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/hooks/useResponseBody.js + 1 modules
var useResponseBody = __webpack_require__(60089);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/views/Request/consts/mediaTypes.js
var mediaTypes = __webpack_require__(84253);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyDownload.vue.js



const ResponseBodyDownload_vue_x = ["download", "href"], ResponseBodyDownload_vue_h = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ResponseBodyDownload",
  props: {
    href: {},
    type: {},
    filename: {}
  },
  setup(s) {
    const n = s, r = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      const o = (0,mediaTypes/* .getMediaTypeConfig */.zi)(n.type ?? "")?.extension ?? ".unknown";
      return n.filename ? n.filename : `response${o}`;
    });
    return (o, e) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("a", {
      class: "text-c-3 text-xxs hover:bg-b-3 flex items-center gap-1 rounded px-1.5 py-0.5 no-underline",
      download: `${r.value}`,
      href: o.href,
      onClick: e[0] || (e[0] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)(() => {
      }, ["stop"]))
    }, [
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
        icon: "Download",
        size: "xs"
      }),
      e[1] || (e[1] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, "Download"),
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", { class: "sr-only" }, "Response Body")
      ], -1))
    ], 8, ResponseBodyDownload_vue_x));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyInfo.vue.js


const ResponseBodyInfo_vue_r = {}, ResponseBodyInfo_vue_d = { class: "flex justify-center px-2 py-3" }, ResponseBodyInfo_vue_f = { class: "text-c-3 p-2 text-sm" };
function ResponseBodyInfo_vue_l(e, _) {
  return (0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", ResponseBodyInfo_vue_d, [
    (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", ResponseBodyInfo_vue_f, [
      (0,vue_runtime_esm_bundler/* .renderSlot */.RG)(e.$slots, "default")
    ])
  ]);
}
const ResponseBodyInfo_vue_p = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(ResponseBodyInfo_vue_r, [["render", ResponseBodyInfo_vue_l]]);


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyPreview.vue2.js


const ResponseBodyPreview_vue2_c = ["src"], ResponseBodyPreview_vue2_k = ["src", "type"], ResponseBodyPreview_vue2_w = ["src", "type"], ResponseBodyPreview_vue2_B = ["data", "type"], ResponseBodyPreview_vue2_$ = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ResponseBodyPreview",
  props: {
    src: {},
    type: {},
    mode: {},
    alpha: { type: Boolean, default: !1 }
  },
  setup(u) {
    const r = (0,vue_runtime_esm_bundler/* .ref */.KR)(!1);
    return (0,vue_runtime_esm_bundler/* .watch */.wB)(
      () => u.src,
      () => r.value = !1
    ), (e, o) => !r.value && e.src ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", {
      key: 0,
      class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["flex justify-center overflow-auto rounded-b", { "bg-preview p-2": e.alpha }])
    }, [
      e.mode === "image" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("img", {
        key: 0,
        class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["h-full max-w-full", { rounded: e.alpha }]),
        src: e.src,
        onError: o[0] || (o[0] = (t) => r.value = !0)
      }, null, 42, ResponseBodyPreview_vue2_c)) : e.mode === "video" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("video", {
        key: 1,
        autoplay: "",
        controls: "",
        width: "100%",
        onError: o[1] || (o[1] = (t) => r.value = !0)
      }, [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("source", {
          src: e.src,
          type: e.type
        }, null, 8, ResponseBodyPreview_vue2_k)
      ], 32)) : e.mode === "audio" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("audio", {
        key: 2,
        class: "my-12",
        controls: "",
        onError: o[2] || (o[2] = (t) => r.value = !0)
      }, [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("source", {
          src: e.src,
          type: e.type
        }, null, 8, ResponseBodyPreview_vue2_w)
      ], 32)) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("object", {
        key: 3,
        class: "aspect-[4/3] w-full",
        data: e.src,
        type: e.type,
        onError: o[3] || (o[3] = (t) => r.value = !0)
      }, null, 40, ResponseBodyPreview_vue2_B))
    ], 2)) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ResponseBodyInfo_vue_p, { key: 1 }, {
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...o[4] || (o[4] = [
        (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("Preview unavailable", -1)
      ])]),
      _: 1
    }));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyPreview.vue.js

/* empty css                         */

const ResponseBodyPreview_vue_s = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(ResponseBodyPreview_vue2_$, [["__scopeId", "data-v-0956ad2d"]]);


// EXTERNAL MODULE: ./node_modules/@scalar/oas-utils/dist/helpers/index.js + 9 modules
var helpers = __webpack_require__(28751);
// EXTERNAL MODULE: ./node_modules/@scalar/use-codemirror/dist/index.js + 32 modules
var use_codemirror_dist = __webpack_require__(62173);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyRaw.vue2.js




const ResponseBodyRaw_vue2_b = { class: "scalar-code-block group/code-block body-raw grid min-h-0 overflow-hidden p-px outline-none has-[:focus-visible]:outline" }, ResponseBodyRaw_vue2_v = {
  class: "body-raw-scroller custom-scroll relative pr-1",
  tabindex: "0"
}, M = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ResponseBodyRaw",
  props: {
    content: {},
    language: {}
  },
  setup(s) {
    const e = s, o = (0,vue_runtime_esm_bundler/* .ref */.KR)(null), a = (0,vue_runtime_esm_bundler/* .useId */.Bi)(), { codeMirror: d } = (0,use_codemirror_dist/* .useCodeMirror */.qF)({
      codeMirrorRef: o,
      readOnly: !0,
      lineNumbers: !0,
      content: (0,vue_runtime_esm_bundler/* .toRef */.lW)(() => (0,helpers/* .prettyPrintJson */.qX)(e.content)),
      language: (0,vue_runtime_esm_bundler/* .toRef */.lW)(() => e.language),
      forceFoldGutter: !0
    }), t = () => d.value?.state.doc.toString() || "";
    return (C, h) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", ResponseBodyRaw_vue2_b, [
      t() ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarCodeBlockCopy */.Gs), {
        key: 0,
        content: t(),
        controls: (0,vue_runtime_esm_bundler/* .unref */.R1)(a),
        class: "z-context top-2 mr-2"
      }, null, 8, ["content", "controls"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", ResponseBodyRaw_vue2_v, [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
          ref_key: "codeMirrorRef",
          ref: o
        }, null, 512)
      ])
    ]));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyRaw.vue.js

/* empty css                     */

const ResponseBodyRaw_vue_s = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(M, [["__scopeId", "data-v-85d2902e"]]);


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyToggle.vue.js

const ResponseBodyToggle_vue_a = { class: "text-c-3 text-xxs -my-1 flex justify-center gap-0.5 rounded p-0.5" }, ResponseBodyToggle_vue_i = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ResponseBodyToggle",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(p) {
    return (e, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", ResponseBodyToggle_vue_a, [
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("button", {
        class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["hover:bg-b-3 rounded px-1", { "bg-b-3 text-c-1 cursor-default": e.modelValue }]),
        type: "button",
        onClick: t[0] || (t[0] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((s) => e.$emit("update:modelValue", !0), ["stop"]))
      }, " Preview ", 2),
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("button", {
        class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["hover:bg-b-3 rounded px-1", { "bg-b-3 text-c-1 cursor-default": !e.modelValue }]),
        type: "button",
        onClick: t[1] || (t[1] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((s) => e.$emit("update:modelValue", !1), ["stop"]))
      }, " Raw ", 2)
    ]));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBody.vue2.js









const D = {
  key: 0,
  class: "bg-b-1 flex max-h-[calc(100%-32px)] flex-col overflow-hidden"
}, F = { class: "box-content flex min-h-8 items-center justify-between border-y px-3" }, I = { class: "text-xxs font-code leading-3" }, ResponseBody_vue2_O = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ResponseBody",
  props: {
    title: {},
    layout: {},
    data: {},
    headers: {}
  },
  setup(w) {
    const c = w, s = (0,vue_runtime_esm_bundler/* .ref */.KR)(!0), p = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => !!(e.value?.raw && e.value.preview)
    ), g = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => s.value || !p.value), _ = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => !s.value || !p.value), { mimeType: i, attachmentFilename: x, dataUrl: o } = (0,useResponseBody/* .useResponseBody */.x)({
      data: (0,vue_runtime_esm_bundler/* .toRef */.lW)(c, "data"),
      headers: (0,vue_runtime_esm_bundler/* .toRef */.lW)(c, "headers")
    }), e = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => (0,mediaTypes/* .getMediaTypeConfig */.zi)(i.value.essence));
    return (l, u) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayoutCollapse_vue/* ["default"] */.A, {
      class: "max-h-content overflow-y-hidden",
      layout: l.layout
    }, (0,vue_runtime_esm_bundler/* .createSlots */.eX)({
      title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)((0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(l.title), 1)
      ]),
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        l.data ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", D, [
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", F, [
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", I, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)((0,vue_runtime_esm_bundler/* .unref */.R1)(i).essence), 1),
            p.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ResponseBodyToggle_vue_i, {
              key: 0,
              modelValue: s.value,
              "onUpdate:modelValue": u[0] || (u[0] = (k) => s.value = k)
            }, null, 8, ["modelValue"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
          ]),
          e.value?.raw && _.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ResponseBodyRaw_vue_s, {
            key: (0,vue_runtime_esm_bundler/* .unref */.R1)(o),
            content: l.data,
            language: e.value.language
          }, null, 8, ["content", "language"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
          e.value?.preview && g.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ResponseBodyPreview_vue_s, {
            key: (0,vue_runtime_esm_bundler/* .unref */.R1)(o),
            alpha: e.value.alpha,
            mode: e.value.preview,
            src: (0,vue_runtime_esm_bundler/* .unref */.R1)(o),
            type: (0,vue_runtime_esm_bundler/* .unref */.R1)(i).essence
          }, null, 8, ["alpha", "mode", "src", "type"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
          !e.value?.raw && !e.value?.preview ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ResponseBodyInfo_vue_p, { key: 2 }, {
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...u[1] || (u[1] = [
              (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Binary file ", -1)
            ])]),
            _: 1
          })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
        ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
      ]),
      _: 2
    }, [
      l.data && (0,vue_runtime_esm_bundler/* .unref */.R1)(o) ? {
        name: "actions",
        fn: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ResponseBodyDownload_vue_h, {
            filename: (0,vue_runtime_esm_bundler/* .unref */.R1)(x),
            href: (0,vue_runtime_esm_bundler/* .unref */.R1)(o),
            type: (0,vue_runtime_esm_bundler/* .unref */.R1)(i).essence
          }, null, 8, ["filename", "href", "type"])
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["layout"]));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBody.vue.js

/* empty css                  */

const ResponseBody_vue_e = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(ResponseBody_vue2_O, [["__scopeId", "data-v-17966bf4"]]);


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyStreaming.vue.js



const T = { class: "flex w-full items-center justify-between" }, E = {
  key: 0,
  class: "mr-2 flex items-center gap-2"
}, N = {
  key: 0,
  class: "text-red bg-b-danger sticky top-0 border-b p-2"
}, ResponseBodyStreaming_vue_V = {
  key: 1,
  class: "p-2"
}, ResponseBodyStreaming_vue_z = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ResponseBodyStreaming",
  props: {
    reader: {}
  },
  setup(f) {
    const e = (0,dist/* .useLoadingState */.R2)(), o = (0,vue_runtime_esm_bundler/* .ref */.KR)(""), a = (0,vue_runtime_esm_bundler/* .ref */.KR)(null), m = new TextDecoder(), r = (0,vue_runtime_esm_bundler/* .ref */.KR)(null), v = () => {
      r.value && (r.value.scrollTop = r.value.scrollHeight);
    };
    (0,vue_runtime_esm_bundler/* .watch */.wB)(o, () => {
      (0,vue_runtime_esm_bundler/* .nextTick */.dY)(v);
    });
    async function x() {
      try {
        for (; e.isLoading; ) {
          const { done: n, value: t } = await f.reader.read();
          if (n) {
            e.stopLoading();
            break;
          }
          t && (o.value += m.decode(t, { stream: !0 }));
        }
      } catch (n) {
        console.error("Error reading stream:", n), e.stopLoading(), a.value = n;
      } finally {
        o.value += m.decode();
      }
    }
    return (0,vue_runtime_esm_bundler/* .onMounted */.sV)(() => {
      e.startLoading(), x(), a.value = null;
    }), (0,vue_runtime_esm_bundler/* .onBeforeUnmount */.xo)(() => {
      f.reader.cancel(), e.stopLoading();
    }), (n, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayoutCollapse_vue/* ["default"] */.A, { class: "max-h-content overflow-y-hidden" }, {
      title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", T, [
          t[1] || (t[1] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", null, "Body", -1)),
          (0,vue_runtime_esm_bundler/* .unref */.R1)(e).isLoading ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", E, [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarLoading */.XI), {
              loadingState: (0,vue_runtime_esm_bundler/* .unref */.R1)(e),
              size: "xs"
            }, null, 8, ["loadingState"]),
            t[0] || (t[0] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", { class: "text-c-2" }, " Listening… ", -1))
          ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
        ])
      ]),
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
          ref_key: "contentContainer",
          ref: r,
          class: "text-xxs font-code h-full overflow-auto leading-2 whitespace-pre-wrap"
        }, [
          a.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", N, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(a.value.message), 1)) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
          o.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", ResponseBodyStreaming_vue_V, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(o.value), 1)) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
        ], 512)
      ]),
      _: 1
    }));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyVirtual.vue.js






const ResponseBodyVirtual_vue_R = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ResponseBodyVirtual",
  props: {
    content: {},
    data: {},
    headers: {}
  },
  setup(l) {
    const o = l, i = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => (0,helpers/* .formatJsonOrYamlString */.nk)(o.content)), { mimeType: m, attachmentFilename: d, dataUrl: n } = (0,useResponseBody/* .useResponseBody */.x)({
      data: (0,vue_runtime_esm_bundler/* .toRef */.lW)(o, "data"),
      headers: (0,vue_runtime_esm_bundler/* .toRef */.lW)(o, "headers")
    });
    return (w, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayoutCollapse_vue/* ["default"] */.A, { class: "!max-h-100% response-body-virtual overflow-x-auto" }, (0,vue_runtime_esm_bundler/* .createSlots */.eX)({
      title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        t[0] || (t[0] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("Body", -1))
      ]),
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        t[1] || (t[1] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", { class: "font-code text-xxs rounded-t border border-b-0 px-2.5 py-1.5" }, " This response body is massive! Syntax highlighting won't work here. ", -1)),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarVirtualText */.$M), {
          containerClass: "custom-scroll scalar-code-block border rounded-b flex flex-1 max-h-screen",
          contentClass: "language-plaintext whitespace-pre font-code text-base",
          lineHeight: 20,
          text: i.value
        }, null, 8, ["text"])
      ]),
      _: 2
    }, [
      (0,vue_runtime_esm_bundler/* .unref */.R1)(n) ? {
        name: "actions",
        fn: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ResponseBodyDownload_vue_h, {
            filename: (0,vue_runtime_esm_bundler/* .unref */.R1)(d),
            href: (0,vue_runtime_esm_bundler/* .unref */.R1)(n),
            type: (0,vue_runtime_esm_bundler/* .unref */.R1)(m).essence
          }, null, 8, ["filename", "href", "type"])
        ]),
        key: "0"
      } : void 0
    ]), 1024));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseCookies.vue.js





const ResponseCookies_vue_d = {
  key: 1,
  class: "text-c-3 bg-b-1 flex min-h-[65px] items-center justify-center border-t px-4 text-sm"
}, ResponseCookies_vue_B = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ResponseCookies",
  props: {
    cookies: {}
  },
  setup(x) {
    return (s, l) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayoutCollapse_vue/* ["default"] */.A, { defaultOpen: !1 }, {
      title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...l[0] || (l[0] = [
        (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("Cookies", -1)
      ])]),
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 0 }, [
          s.cookies.length ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(DataTable_vue/* ["default"] */.A, {
            key: 0,
            class: "flex-1",
            columns: ["", ""]
          }, {
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(s.cookies, (o) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(DataTableRow_vue/* ["default"] */.A, {
                key: o.name
              }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTableText_vue/* ["default"] */.A, {
                    text: o.name
                  }, null, 8, ["text"]),
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTableText_vue/* ["default"] */.A, {
                    text: o.value
                  }, null, 8, ["text"])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          })) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", ResponseCookies_vue_d, " No cookies "))
        ], 64))
      ]),
      _: 1
    }));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/assets/computer.ascii.js
const computer_ascii_B = `                         .,,uod8B8bou,,.
                ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
           ||||||||||||||!?TFPRBBBBBBBBBBBBBBB8m=,
           ||||   '""^^!!||||||||||TFPRBBBVT!:...!
           ||||            '""^^!!|||||?!:.......!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||,                    ||||.........\`
           |||||!!-._               ||||.......;.
           ':!|||||||||!!-._        ||||.....bBBBBWdou,.
         bBBBBB86foi!|||||||!!-..:|||!..bBBBBBBBBBBBBBBY!
         ::!?TFPRBBBBBB86foi!||||||||!!bBBBBBBBBBBBBBBY..!
         :::::::::!?TFPRBBBBBB86ftiaabBBBBBBBBBBBBBBY....!
         :::;\`"^!:;::::::!?TFPRBBBBBBBBBBBBBBBBBBBY......!
         ;::::::...''^::::::::::!?TFPRBBBBBBBBBBY........!
     .ob86foi;::::::::::::::::::::::::!?TFPRBY..........\`
    .b888888888886foi;:::::::::::::::::::::::..........\`
 .b888888888888888888886foi;::::::::::::::::..........
.b888888888888888888888888888886foi;:::::::::......\`
!Tf998888888888888888888888888888888886foi;:::....\`
  '"^!|Tf9988888888888888888888888888888888!::..\`
       '"^!|Tf998888888888888888888888889!! '\`
             '"^!|Tf9988888888888888888!!\`            iBBbo.
                  '"^!|Tf998888888889!\`             WBBBBbo.
                        '"^!|Tf9989!\`              YBBBP^'
                              '"^!\`               \`
`;


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ScalarAsciiArt.vue.js + 1 modules
var ScalarAsciiArt_vue = __webpack_require__(57723);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseEmpty.vue2.js








const W = { class: "flex-center relative flex flex-1 flex-col gap-6 p-2 capitalize" }, ResponseEmpty_vue2_$ = {
  key: 0,
  class: "scalar-version-number"
}, j = { class: "text-c-3 right-4 mt-auto flex w-full flex-col items-end gap-2 text-sm" }, U = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ResponseEmpty",
  props: {
    collection: {},
    operation: {},
    workspace: {},
    numWorkspaceRequests: {}
  },
  setup(r) {
    const { events: a, requestMutators: x } = (0,store/* .useWorkspace */.hA)(), g = (0,vue_router/* .useRoute */.lq)(), b = (0,vue_router/* .useRouter */.rd)(), { layout: n } = (0,useLayout/* .useLayout */.g)(), d = () => {
      const o = r.operation.tags?.length ? { tags: r.operation.tags[0] ? [r.operation.tags[0]] : [] } : {}, e = x.add(o, r.collection.uid);
      e && (b.push({
        name: "request",
        params: {
          workspace: r.workspace.uid,
          request: e.uid
        }
      }), (0,vue_runtime_esm_bundler/* .nextTick */.dY)(() => {
        a.hotKeys.emit({
          focusAddressBar: new KeyboardEvent("keydown", { key: "l" })
        });
      }));
    }, f = (o) => {
      o?.createNew && g.name === "request" && d();
    }, v = "2.11.0";
    return (0,vue_runtime_esm_bundler/* .onMounted */.sV)(() => a.hotKeys.on(f)), (0,vue_runtime_esm_bundler/* .onBeforeUnmount */.xo)(() => a.hotKeys.off(f)), (o, e) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", W, [
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
        class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["flex h-[calc(100%_-_50px)] flex-col items-center justify-center", {
          "hidden opacity-0": o.numWorkspaceRequests <= 1 && (0,vue_runtime_esm_bundler/* .unref */.R1)(n) !== "modal"
        }])
      }, [
        (0,vue_runtime_esm_bundler/* .unref */.R1)(n) !== "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", ResponseEmpty_vue2_$, [
          (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Scalar App V" + (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)((0,vue_runtime_esm_bundler/* .unref */.R1)(v)) + " Beta ", 1),
          e[3] || (e[3] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", { class: "mt-2" }, [
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("a", {
              href: "https://github.com/scalar/scalar/issues/2669",
              target: "_blank"
            }, " Roadmap ")
          ], -1))
        ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
        e[4] || (e[4] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("a", {
          class: "gitbook-show scalar-version-number",
          href: "https://www.scalar.com",
          target: "_blank"
        }, " Powered By Scalar.com ", -1)),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ScalarAsciiArt_vue/* ["default"] */.A, {
          art: (0,vue_runtime_esm_bundler/* .unref */.R1)(computer_ascii_B),
          class: "text-c-3"
        }, null, 8, ["art"])
      ], 2),
      (0,vue_runtime_esm_bundler/* .unref */.R1)(n) !== "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", {
        key: 0,
        class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["hidden h-[calc(100%_-_50px)] items-center justify-center pb-5", {
          "!flex opacity-100": o.numWorkspaceRequests == 1
        }])
      }, [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(EmptyState_vue/* ["default"] */.A)
      ], 2)) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", j, [
        (0,vue_runtime_esm_bundler/* .unref */.R1)(n) !== "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("button", {
          key: 0,
          class: "flex items-center gap-1.5",
          type: "button",
          onClick: e[0] || (e[0] = (k) => (0,vue_runtime_esm_bundler/* .unref */.R1)(a).commandPalette.emit())
        }, [
          e[5] || (e[5] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Get Started ", -1)),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarHotkey */.RH), { hotkey: "k" })
        ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
        (0,vue_runtime_esm_bundler/* .unref */.R1)(n) === "desktop" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("button", {
          key: 1,
          class: "flex items-center gap-1.5",
          type: "button",
          onClick: e[1] || (e[1] = (k) => d())
        }, [
          e[6] || (e[6] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" New Request ", -1)),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarHotkey */.RH), { hotkey: "N" })
        ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("button", {
          class: "flex items-center gap-1.5",
          type: "button",
          onClick: e[2] || (e[2] = (k) => (0,vue_runtime_esm_bundler/* .unref */.R1)(a).executeRequest.emit())
        }, [
          e[7] || (e[7] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Send Request ", -1)),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarHotkey */.RH), { hotkey: "↵" })
        ])
      ])
    ]));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseEmpty.vue.js

/* empty css                   */

const ResponseEmpty_vue_s = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(U, [["__scopeId", "data-v-6d2bdb61"]]);


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseHeaders.vue.js








const ResponseHeaders_vue_h = {
  key: 0,
  class: "max-h-[calc(100%-32px)] overflow-y-auto"
}, ResponseHeaders_vue_H = {
  key: 1,
  class: "text-c-3 bg-b-1 flex min-h-12 items-center justify-center rounded border px-4 text-base"
}, ResponseHeaders_vue_D = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ResponseHeaders",
  props: {
    headers: {}
  },
  setup(C) {
    const m = (s) => httpHeaders_e.find(
      (r) => r.name.toLowerCase() === s.toLowerCase()
    );
    return (s, r) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayoutCollapse_vue/* ["default"] */.A, {
      class: "overflow-auto",
      defaultOpen: !1,
      itemCount: s.headers.length
    }, {
      title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...r[0] || (r[0] = [
        (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("Response Headers", -1)
      ])]),
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        s.headers.length ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", ResponseHeaders_vue_h, [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTable_vue/* ["default"] */.A, {
            columns: ["minmax(auto, min-content)", "minmax(50%, 1fr)"],
            scroll: ""
          }, {
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTableRow_vue/* ["default"] */.A, { class: "sr-only !block" }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(DataTableHeader_vue/* ["default"] */.A), null, {
                    default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...r[1] || (r[1] = [
                      (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("Header Key", -1)
                    ])]),
                    _: 1
                  }),
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(DataTableHeader_vue/* ["default"] */.A), null, {
                    default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...r[2] || (r[2] = [
                      (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("Header Value", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(s.headers, (o) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(DataTableRow_vue/* ["default"] */.A, {
                key: o.name,
                class: "group/row text-c-1"
              }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTableText_vue/* ["default"] */.A, { class: "bg-b-1 sticky left-0 z-1 max-w-full group-first/row:border-t-0" }, {
                    default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                      typeof m(o.name)?.url == "string" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(HelpfulLink_vue_p, {
                        key: 0,
                        class: "decoration-c-3",
                        href: m(o.name).url
                      }, {
                        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                          (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)((0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(o.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"])) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 1 }, [
                        (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)((0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(o.name), 1)
                      ], 64))
                    ]),
                    _: 2
                  }, 1024),
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTableText_vue/* ["default"] */.A, {
                    class: "z-0 group-first/row:border-t-0",
                    text: o.value
                  }, null, 8, ["text"])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          })
        ])) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", ResponseHeaders_vue_H, " No Headers "))
      ]),
      _: 1
    }, 8, ["itemCount"]));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseLoadingOverlay.vue2.js



const L = {
  key: 0,
  class: "bg-b-1 z-overlay absolute inset-0 flex flex-col items-center justify-center gap-6"
}, ResponseLoadingOverlay_vue2_b = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ResponseLoadingOverlay",
  setup(S) {
    const { events: n } = (0,store/* .useWorkspace */.hA)(), t = (0,dist/* .useLoadingState */.R2)(), a = (0,vue_runtime_esm_bundler/* .ref */.KR)();
    return n.requestStatus.on((s) => {
      s === "start" ? a.value = setTimeout(() => t.startLoading(), 1e3) : (clearTimeout(a.value), a.value = void 0, t.stopLoading());
    }), (s, o) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(vue_runtime_esm_bundler/* .Transition */.eB, null, {
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .unref */.R1)(t).isLoading ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", L, [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarLoading */.XI), {
            class: "text-c-3",
            loadingState: (0,vue_runtime_esm_bundler/* .unref */.R1)(t),
            size: "3xl"
          }, null, 8, ["loadingState"]),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
            variant: "ghost",
            onClick: o[0] || (o[0] = (C) => (0,vue_runtime_esm_bundler/* .unref */.R1)(n).cancelRequest.emit())
          }, {
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...o[1] || (o[1] = [
              (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Cancel ", -1)
            ])]),
            _: 1
          })
        ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
      ]),
      _: 1
    }));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseLoadingOverlay.vue.js

/* empty css                            */

const ResponseLoadingOverlay_vue_p = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(ResponseLoadingOverlay_vue2_b, [["__scopeId", "data-v-5d3b84e1"]]);


// EXTERNAL MODULE: ./node_modules/pretty-bytes/index.js
var pretty_bytes = __webpack_require__(79598);
;// CONCATENATED MODULE: ./node_modules/parse-ms/index.js
function parseMilliseconds(milliseconds) {
	if (typeof milliseconds !== 'number') {
		throw new TypeError('Expected a number');
	}

	const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;

	return {
		days: roundTowardsZero(milliseconds / 86400000),
		hours: roundTowardsZero(milliseconds / 3600000) % 24,
		minutes: roundTowardsZero(milliseconds / 60000) % 60,
		seconds: roundTowardsZero(milliseconds / 1000) % 60,
		milliseconds: roundTowardsZero(milliseconds) % 1000,
		microseconds: roundTowardsZero(milliseconds * 1000) % 1000,
		nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1000
	};
}

;// CONCATENATED MODULE: ./node_modules/pretty-ms/index.js


const pluralize = (word, count) => count === 1 ? word : `${word}s`;

const SECOND_ROUNDING_EPSILON = 0.000_000_1;

function prettyMilliseconds(milliseconds, options = {}) {
	if (!Number.isFinite(milliseconds)) {
		throw new TypeError('Expected a finite number');
	}

	if (options.colonNotation) {
		options.compact = false;
		options.formatSubMilliseconds = false;
		options.separateMilliseconds = false;
		options.verbose = false;
	}

	if (options.compact) {
		options.secondsDecimalDigits = 0;
		options.millisecondsDecimalDigits = 0;
	}

	const result = [];

	const floorDecimals = (value, decimalDigits) => {
		const flooredInterimValue = Math.floor((value * (10 ** decimalDigits)) + SECOND_ROUNDING_EPSILON);
		const flooredValue = Math.round(flooredInterimValue) / (10 ** decimalDigits);
		return flooredValue.toFixed(decimalDigits);
	};

	const add = (value, long, short, valueString) => {
		if ((result.length === 0 || !options.colonNotation) && value === 0 && !(options.colonNotation && short === 'm')) {
			return;
		}

		valueString = (valueString || value || '0').toString();
		let prefix;
		let suffix;
		if (options.colonNotation) {
			prefix = result.length > 0 ? ':' : '';
			suffix = '';
			const wholeDigits = valueString.includes('.') ? valueString.split('.')[0].length : valueString.length;
			const minLength = result.length > 0 ? 2 : 1;
			valueString = '0'.repeat(Math.max(0, minLength - wholeDigits)) + valueString;
		} else {
			prefix = '';
			suffix = options.verbose ? ' ' + pluralize(long, value) : short;
		}

		result.push(prefix + valueString + suffix);
	};

	const parsed = parseMilliseconds(milliseconds);

	add(Math.trunc(parsed.days / 365), 'year', 'y');
	add(parsed.days % 365, 'day', 'd');
	add(parsed.hours, 'hour', 'h');
	add(parsed.minutes, 'minute', 'm');

	if (
		options.separateMilliseconds
		|| options.formatSubMilliseconds
		|| (!options.colonNotation && milliseconds < 1000)
	) {
		add(parsed.seconds, 'second', 's');
		if (options.formatSubMilliseconds) {
			add(parsed.milliseconds, 'millisecond', 'ms');
			add(parsed.microseconds, 'microsecond', 'µs');
			add(parsed.nanoseconds, 'nanosecond', 'ns');
		} else {
			const millisecondsAndBelow
				= parsed.milliseconds
				+ (parsed.microseconds / 1000)
				+ (parsed.nanoseconds / 1e6);

			const millisecondsDecimalDigits
				= typeof options.millisecondsDecimalDigits === 'number'
					? options.millisecondsDecimalDigits
					: 0;

			const roundedMiliseconds = millisecondsAndBelow >= 1
				? Math.round(millisecondsAndBelow)
				: Math.ceil(millisecondsAndBelow);

			const millisecondsString = millisecondsDecimalDigits
				? millisecondsAndBelow.toFixed(millisecondsDecimalDigits)
				: roundedMiliseconds;

			add(
				Number.parseFloat(millisecondsString),
				'millisecond',
				'ms',
				millisecondsString,
			);
		}
	} else {
		const seconds = (milliseconds / 1000) % 60;
		const secondsDecimalDigits
			= typeof options.secondsDecimalDigits === 'number'
				? options.secondsDecimalDigits
				: 1;
		const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
		const secondsString = options.keepDecimalsOnWholeSeconds
			? secondsFixed
			: secondsFixed.replace(/\.0+$/, '');
		add(Number.parseFloat(secondsString), 'second', 's', secondsString);
	}

	if (result.length === 0) {
		return '0' + (options.verbose ? ' milliseconds' : 'ms');
	}

	if (options.compact) {
		return result[0];
	}

	if (typeof options.unitCount === 'number') {
		const separator = options.colonNotation ? '' : ' ';
		return result.slice(0, Math.max(options.unitCount, 1)).join(separator);
	}

	return options.colonNotation ? result.join('') : result.join(' ');
}

;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseMetaInformation.vue.js






const ResponseMetaInformation_vue_L = { class: "text-c-1 flex gap-1.5" }, ResponseMetaInformation_vue_V = { key: 0 }, ResponseMetaInformation_vue_x = { key: 0 }, ResponseMetaInformation_vue_z = { key: 1 }, ResponseMetaInformation_vue_T = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ResponseMetaInformation",
  props: {
    response: {}
  },
  setup(k) {
    const h = k, { events: g } = (0,store/* .useWorkspace */.hA)(), l = (0,vue_runtime_esm_bundler/* .ref */.KR)(), u = (0,vue_runtime_esm_bundler/* .ref */.KR)(0);
    g.requestStatus.on((e) => {
      e === "start" ? l.value = setInterval(() => u.value += 1e3, 1e3) : (clearInterval(l.value), l.value = void 0, u.value = 0);
    });
    const i = (e) => {
      const t = Number.parseInt(
        e.headers?.["Content-Length"] || e.headers?.["content-length"] || "0",
        10
      );
      return t ? (0,pretty_bytes/* ["default"] */.A)(t) : void 0;
    }, s = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      const e = h.response.status;
      if (e)
        return helpers/* .httpStatusCodes */.Z7[e] ?? void 0;
    });
    return (e, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", ResponseMetaInformation_vue_L, [
      l.value && u.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("span", ResponseMetaInformation_vue_V, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)((0,vue_runtime_esm_bundler/* .unref */.R1)(prettyMilliseconds)(u.value)), 1)) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 1 }, [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, [
          t[0] || (t[0] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", { class: "sr-only" }, "Response Information, Duration:", -1)),
          (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" " + (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)((0,vue_runtime_esm_bundler/* .unref */.R1)(prettyMilliseconds)(e.response.duration)), 1)
        ]),
        i(e.response) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("span", ResponseMetaInformation_vue_x, [
          t[1] || (t[1] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", { class: "sr-only" }, ", Size:", -1)),
          (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" " + (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(i(e.response)), 1)
        ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
        s.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 1 }, [
          t[2] || (t[2] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", { class: "sr-only" }, ", Status:", -1)),
          s.value.url ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(HelpfulLink_vue_p, {
            key: 0,
            class: "flex items-center gap-1.5",
            href: s.value.url
          }, {
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)((0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(e.response.status) + " " + (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(s.value.name) + " ", 1),
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", {
                class: "block h-1.5 w-1.5 rounded-full",
                style: (0,vue_runtime_esm_bundler/* .normalizeStyle */.Tr)({ backgroundColor: s.value.color })
              }, null, 4)
            ]),
            _: 1
          }, 8, ["href"])) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("span", ResponseMetaInformation_vue_z, [
            (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)((0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(e.response.status) + " " + (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(s.value.name) + " ", 1),
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", {
              class: "block h-1.5 w-1.5 rounded-full",
              style: (0,vue_runtime_esm_bundler/* .normalizeStyle */.Tr)({ backgroundColor: s.value.color })
            }, null, 4)
          ]))
        ], 64)) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
      ], 64))
    ]));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/plugins/hooks/usePluginManager.js
var usePluginManager = __webpack_require__(29223);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseSection.vue2.js








/* empty css                         */






const Z = { class: "flex h-8 flex-1 items-center" }, G = ["id", "role"], ResponseSection_vue2_b = 2e5, ce = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ResponseSection",
  props: {
    collection: {},
    operation: {},
    workspace: {},
    numWorkspaceRequests: {},
    response: {},
    requestResult: {}
  },
  setup(l) {
    const A = (0,usePluginManager/* .usePluginManager */.u)().getViewComponents("response.section"), c = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      const e = l.response?.headers;
      return e ? Object.keys(e).map((a) => ({
        name: a,
        value: e[a] ?? "",
        required: !1
      })) : [];
    }), B = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => l.response?.cookieHeaderKeys.flatMap((e) => {
        const a = l.response?.headers?.[e];
        return a ? {
          name: e,
          value: a,
          required: !1
        } : [];
      }) ?? []
    ), g = ["Cookies", "Headers", "Body"], s = (0,vue_runtime_esm_bundler/* .ref */.KR)("All"), v = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => ["All", ...g]), r = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => Object.fromEntries(
        v.value.map((e) => [e, (0,vue_runtime_esm_bundler/* .useId */.Bi)()])
      )
    ), R = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      if (!l.response || !("size" in l.response))
        return !1;
      const e = l.response.headers?.["content-type"] || l.response.headers?.["Content-Type"];
      return !e || (l.response.size ?? 0) <= ResponseSection_vue2_b || e.includes("text/html") ? !1 : [
        // Text types
        "text/",
        // JSON types
        "application/json",
        "application/ld+json",
        "application/problem+json",
        "application/vnd.api+json",
        // XML types
        "application/xml",
        "application/atom+xml",
        "application/rss+xml",
        "application/problem+xml",
        // Other structured text
        "application/javascript",
        "application/ecmascript",
        "application/x-yaml",
        "application/yaml",
        // Source code
        "application/x-httpd-php",
        "application/x-sh",
        "application/x-perl",
        "application/x-python",
        "application/x-ruby",
        "application/x-java-source",
        // Form data
        "application/x-www-form-urlencoded"
      ].some((C) => e.includes(C)) && (l.response.size ?? 0) > ResponseSection_vue2_b;
    }), q = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => l.requestResult?.request.parameters.headers.filter((e) => e.enabled).map((e) => ({
        name: e.key,
        value: e.value,
        required: !0
      })) ?? []
    );
    return (e, a) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayoutSection_vue/* ["default"] */.A, { "aria-label": "Response" }, {
      title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", Z, [
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
            "aria-live": "polite",
            class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["flex items-center", { "animate-response-heading": e.response }])
          }, [
            a[1] || (a[1] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", { class: "response-heading pointer-events-none absolute" }, " Response ", -1)),
            e.response ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ResponseMetaInformation_vue_T, {
              key: 0,
              class: "animate-response-children",
              response: e.response
            }, null, 8, ["response"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
          ], 2),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(SectionFilter_vue/* ["default"] */.A, {
            modelValue: s.value,
            "onUpdate:modelValue": a[0] || (a[0] = (t) => s.value = t),
            filterIds: r.value,
            filters: v.value
          }, null, 8, ["modelValue", "filterIds", "filters"])
        ])
      ]),
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
          id: r.value.All,
          class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["custom-scroll response-section-content relative grid h-full justify-stretch", {
            "content-start": e.response
          }]),
          role: s.value === "All" && e.response ? "tabpanel" : "none"
        }, [
          e.response ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 1 }, [
            s.value === "All" || s.value === "Cookies" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ResponseCookies_vue_B, {
              key: 0,
              class: "response-section-content-cookies",
              id: r.value.Cookies,
              cookies: B.value,
              role: s.value === "All" ? "none" : "tabpanel"
            }, null, 8, ["id", "cookies", "role"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
            s.value === "All" || s.value === "Headers" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(z, {
              key: 1,
              class: "response-section-content-headers",
              id: r.value.Headers,
              headers: q.value,
              role: s.value === "All" ? "none" : "tabpanel"
            }, null, 8, ["id", "headers", "role"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
            s.value === "All" || s.value === "Headers" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ResponseHeaders_vue_D, {
              key: 2,
              class: "response-section-content-headers",
              id: r.value.Headers,
              headers: c.value,
              role: s.value === "All" ? "none" : "tabpanel"
            }, null, 8, ["id", "headers", "role"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
            ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)((0,vue_runtime_esm_bundler/* .unref */.R1)(A), (t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarErrorBoundary */.XO), {
              key: t.component
            }, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                (0,vue_runtime_esm_bundler/* .withDirectives */.bo)(((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .resolveDynamicComponent */.$y)(t.component), (0,vue_runtime_esm_bundler/* .mergeProps */.v6)({ ref_for: !0 }, t.props ?? {}), null, 16)), [
                  [vue_runtime_esm_bundler/* .vShow */.aG, s.value === "All" || s.value === t.title]
                ])
              ]),
              _: 2
            }, 1024))), 128)),
            s.value === "All" || s.value === "Body" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 3 }, [
              "reader" in e.response ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ResponseBodyStreaming_vue_z, {
                key: 0,
                class: "response-section-content-body",
                id: r.value.Body,
                reader: e.response.reader
              }, null, 8, ["id", "reader"])) : R.value && typeof e.response?.data == "string" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ResponseBodyVirtual_vue_R, {
                key: 1,
                id: r.value.Body,
                content: e.response.data,
                data: e.response?.data,
                headers: c.value,
                role: s.value === "All" ? "none" : "tabpanel"
              }, null, 8, ["id", "content", "data", "headers", "role"])) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ResponseBody_vue_e, {
                key: 2,
                class: "response-section-content-body",
                id: r.value.Body,
                layout: "client",
                active: !0,
                data: e.response?.data,
                headers: c.value,
                role: s.value === "All" ? "none" : "tabpanel",
                title: "Body"
              }, null, 8, ["id", "data", "headers", "role"]))
            ], 64)) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
          ], 64)) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ResponseEmpty_vue_s, {
            key: 0,
            collection: e.collection,
            operation: e.operation,
            workspace: e.workspace,
            numWorkspaceRequests: e.numWorkspaceRequests
          }, null, 8, ["collection", "operation", "workspace", "numWorkspaceRequests"])),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ResponseLoadingOverlay_vue_p)
        ], 10, G)
      ]),
      _: 1
    }));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseSection.vue.js

/* empty css                     */

const ResponseSection_vue_s = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(ce, [["__scopeId", "data-v-7138ed84"]]);


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/Request.vue2.js












const Request_vue2_O = { class: "flex h-full" }, Request_vue2_T = {
  key: 0,
  class: "flex h-full flex-1 flex-col"
}, re = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "Request",
  props: {
    invalidParams: {},
    selectedSecuritySchemeUids: {},
    requestResult: {}
  },
  emits: ["newTab"],
  setup($) {
    const { events: b } = (0,store/* .useWorkspace */.hA)(), { isSidebarOpen: s } = (0,useSidebar/* .useSidebar */.cL)(), R = (0,store/* .useWorkspace */.hA)(), { layout: q } = (0,useLayout/* .useLayout */.g)(), {
      activeCollection: t,
      activeExample: c,
      activeRequest: a,
      activeWorkspace: l,
      activeServer: u,
      activeEnvVariables: p,
      activeEnvironment: d,
      activeWorkspaceRequests: h
    } = (0,active_entities/* .useActiveEntities */.JC)(), { modalState: x, requestHistory: C } = R, V = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => [...C].reverse().find((o) => o.request.uid === c.value?.uid)
    );
    function w(o) {
      b.commandPalette.emit({
        commandName: "Import from cURL",
        metaData: {
          parsedCurl: curl_C(o),
          collectionUid: t.value?.uid
        }
      });
    }
    return (o, i) => (0,vue_runtime_esm_bundler/* .unref */.R1)(t) && (0,vue_runtime_esm_bundler/* .unref */.R1)(l) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", {
      key: 0,
      class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["bg-b-1 relative z-0 flex h-full flex-1 flex-col overflow-hidden pt-0", {
        "!mr-0 !mb-0 !border-0": (0,vue_runtime_esm_bundler/* .unref */.R1)(q) === "modal"
      }])
    }, [
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", Request_vue2_O, [
        (0,vue_runtime_esm_bundler/* .unref */.R1)(a) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", Request_vue2_T, [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(RequestSubpageHeader_vue_p, {
            modelValue: (0,vue_runtime_esm_bundler/* .unref */.R1)(s),
            "onUpdate:modelValue": i[0] || (i[0] = (_) => (0,vue_runtime_esm_bundler/* .isRef */.i9)(s) ? s.value = _ : null),
            collection: (0,vue_runtime_esm_bundler/* .unref */.R1)(t),
            envVariables: (0,vue_runtime_esm_bundler/* .unref */.R1)(p),
            environment: (0,vue_runtime_esm_bundler/* .unref */.R1)(d),
            operation: (0,vue_runtime_esm_bundler/* .unref */.R1)(a),
            server: (0,vue_runtime_esm_bundler/* .unref */.R1)(u),
            workspace: (0,vue_runtime_esm_bundler/* .unref */.R1)(l),
            onHideModal: i[1] || (i[1] = () => (0,vue_runtime_esm_bundler/* .unref */.R1)(x).hide()),
            onImportCurl: w
          }, null, 8, ["modelValue", "collection", "envVariables", "environment", "operation", "server", "workspace"]),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ViewLayout_vue/* ["default"] */.A, null, {
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              (0,vue_runtime_esm_bundler/* .unref */.R1)(c) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayoutContent_vue/* ["default"] */.A, {
                key: 0,
                class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["flex-1", [(0,vue_runtime_esm_bundler/* .unref */.R1)(s) ? "sidebar-active-hide-layout" : ""]])
              }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)(RequestSection_vue/* ["default"] */.A, {
                    collection: (0,vue_runtime_esm_bundler/* .unref */.R1)(t),
                    envVariables: (0,vue_runtime_esm_bundler/* .unref */.R1)(p),
                    environment: (0,vue_runtime_esm_bundler/* .unref */.R1)(d),
                    example: (0,vue_runtime_esm_bundler/* .unref */.R1)(c),
                    invalidParams: o.invalidParams,
                    operation: (0,vue_runtime_esm_bundler/* .unref */.R1)(a),
                    selectedSecuritySchemeUids: o.selectedSecuritySchemeUids,
                    server: (0,vue_runtime_esm_bundler/* .unref */.R1)(u),
                    workspace: (0,vue_runtime_esm_bundler/* .unref */.R1)(l)
                  }, null, 8, ["collection", "envVariables", "environment", "example", "invalidParams", "operation", "selectedSecuritySchemeUids", "server", "workspace"]),
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ResponseSection_vue_s, {
                    collection: (0,vue_runtime_esm_bundler/* .unref */.R1)(t),
                    numWorkspaceRequests: (0,vue_runtime_esm_bundler/* .unref */.R1)(h).length,
                    operation: (0,vue_runtime_esm_bundler/* .unref */.R1)(a),
                    requestResult: o.requestResult,
                    response: V.value?.response,
                    workspace: (0,vue_runtime_esm_bundler/* .unref */.R1)(l)
                  }, null, 8, ["collection", "numWorkspaceRequests", "operation", "requestResult", "response", "workspace"])
                ]),
                _: 1
              }, 8, ["class"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
            ]),
            _: 1
          })
        ])) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(EmptyState_vue/* ["default"] */.A, { key: 1 }))
      ])
    ], 2)) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(EmptyState_vue/* ["default"] */.A, { key: 1 }));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/Request.vue.js

/* empty css             */

const Request_vue_m = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(re, [["__scopeId", "data-v-57ae0d10"]]);



}),
84253: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  _5: () => (o),
  zi: () => (t)
});
const i = {
  "application/epub+zip": { extension: ".epub" },
  "application/gzip": { extension: ".gz" },
  "application/java-archive": { extension: ".jar" },
  "application/javascript": { extension: ".js", raw: !0 },
  "application/json": { extension: ".json", raw: !0, language: "json" },
  "application/ld+json": { extension: ".jsonld", raw: !0, language: "json" },
  "application/problem+json": {
    extension: ".json",
    raw: !0,
    language: "json"
  },
  "application/vnd.api+json": { extension: ".json", raw: !0, language: "json" },
  "application/dns-json": { extension: ".json", raw: !0, language: "json" },
  "application/msword": { extension: ".doc" },
  "application/octet-stream": { extension: ".bin" },
  "application/ogg": { extension: ".ogx" },
  "application/pdf": { extension: ".pdf", preview: "object" },
  "application/rtf": { extension: ".rtf", raw: !0 },
  "application/vnd.amazon.ebook": { extension: ".azw" },
  "application/vnd.apple.installer+xml": {
    extension: ".mpkg",
    raw: !0,
    language: "xml"
  },
  "application/vnd.mozilla.xul+xml": {
    extension: ".xul",
    raw: !0,
    language: "xml"
  },
  "application/vnd.ms-excel": { extension: ".xls" },
  "application/vnd.ms-fontobject": { extension: ".eot" },
  "application/vnd.ms-powerpoint": { extension: ".ppt" },
  "application/vnd.oasis.opendocument.presentation": { extension: ".odp" },
  "application/vnd.oasis.opendocument.spreadsheet": { extension: ".ods" },
  "application/vnd.oasis.opendocument.text": { extension: ".odt" },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    extension: ".pptx"
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    extension: ".xlsx"
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    extension: ".docx"
  },
  "application/vnd.rar": { extension: ".rar" },
  "application/vnd.visio": { extension: ".vsd" },
  "application/x-7z-compressed": { extension: ".7z" },
  "application/x-abiword": { extension: ".abw" },
  "application/x-bzip": { extension: ".bz" },
  "application/x-bzip2": { extension: ".bz2" },
  "application/x-cdf": { extension: ".cda" },
  "application/x-csh": { extension: ".csh" },
  "application/x-freearc": { extension: ".arc" },
  "application/x-httpd-php": { extension: ".php", raw: !0 },
  "application/x-sh": { extension: ".sh", raw: !0 },
  "application/x-tar": { extension: ".tar" },
  "application/xhtml+xml": { extension: ".xhtml", raw: !0, language: "html" },
  "application/xml": { extension: ".xml", raw: !0, language: "xml" },
  "application/yaml": { extension: ".yaml", raw: !0, language: "yaml" },
  "application/zip": { extension: ".zip" },
  "audio/aac": { extension: ".aac" },
  "audio/midi": { extension: ".midi" },
  "audio/mpeg": { extension: ".mp3", preview: "audio" },
  "audio/ogg": { extension: ".oga" },
  "audio/wav": { extension: ".wav" },
  "audio/webm": { extension: ".weba" },
  "font/otf": { extension: ".otf" },
  "font/ttf": { extension: ".ttf" },
  "font/woff": { extension: ".woff" },
  "font/woff2": { extension: ".woff2" },
  "image/apng": { extension: ".apng", preview: "image", alpha: !0 },
  "image/avif": { extension: ".avif", preview: "image" },
  "image/bmp": { extension: ".bmp", preview: "image" },
  "image/gif": { extension: ".gif", preview: "image", alpha: !0 },
  "image/jpeg": { extension: ".jpg", preview: "image" },
  "image/png": { extension: ".png", preview: "image", alpha: !0 },
  "image/svg+xml": {
    extension: ".svg",
    raw: !0,
    language: "xml",
    preview: "image",
    alpha: !0
  },
  "image/tiff": { extension: ".tiff" },
  "image/vnd.microsoft.icon": { extension: ".ico", preview: "image" },
  "image/webp": { extension: ".webp", preview: "image", alpha: !0 },
  "text/calendar": { extension: ".ics", raw: !0 },
  "text/css": { extension: ".css", raw: !0, language: "css" },
  "text/csv": { extension: ".csv", raw: !0 },
  "text/html": {
    extension: ".html",
    raw: !0,
    language: "html",
    preview: "object"
  },
  "text/javascript": { extension: ".js", raw: !0 },
  "text/plain": { extension: ".txt", raw: !0 },
  "text/xml": { extension: ".xml", raw: !0, language: "xml" },
  "text/yaml": { extension: ".yaml", raw: !0, language: "yaml" },
  "video/3gpp": { extension: ".3gp" },
  "audio/3gpp": { extension: ".3gp" },
  "video/3gpp2": { extension: ".3g2" },
  "audio/3gpp2": { extension: ".3g2" },
  "video/mp2t": { extension: ".ts" },
  "video/mp4": { extension: ".mp4", preview: "video" },
  "video/mpeg": { extension: ".mpeg" },
  "video/ogg": { extension: ".ogv" },
  "video/webm": { extension: ".webm", preview: "video" },
  "video/x-msvideo": { extension: ".avi" }
}, a = Object.entries(i).filter(([, e]) => e?.raw).map(([e]) => e);
function t(e) {
  const n = i[e];
  if (n)
    return n;
  if (e.endsWith("+json"))
    return {
      extension: ".json",
      raw: !0,
      language: "json"
    };
}
function o(e) {
  return !!t(e)?.raw;
}



}),

}]);