(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);

// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = function (module) {
	var getter = module && module.__esModule ?
		function () { return module['default']; } :
		function () { return module; };
	__webpack_require__.d(getter, { a: getter });
	return getter;
};




})();
// webpack/runtime/create_fake_namespace_object
(() => {
var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__ };
var leafPrototypes;
// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 16: return value when it's Promise-like
// mode & 8|1: behave like require
__webpack_require__.t = function(value, mode) {
	if(mode & 1) value = this(value);
	if(mode & 8) return value;
	if(typeof value === 'object' && value) {
		if((mode & 4) && value.__esModule) return value;
		if((mode & 16) && typeof value.then === 'function') return value;
	}
	var ns = Object.create(null);
	__webpack_require__.r(ns);
	var def = {};
	leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
	for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
		Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return  value[key]; } });
	}
	def['default'] = function() { return value };
	__webpack_require__.d(ns, def);
	return ns;
};
})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/ensure_chunk
(() => {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = function (chunkId) {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce(function (promises, key) {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};

})();
// webpack/runtime/esm_module_decorator
(() => {
__webpack_require__.hmd = function (module) {
    module = Object.create(module);
    if (!module.children) module.children = [];
    Object.defineProperty(module, 'exports', {
        enumerable: true,
        set: function () {
            throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
        }
    });
    return module;
};
})();
// webpack/runtime/get javascript chunk filename
(() => {
// This function allow to reference chunks
        __webpack_require__.u = function (chunkId) {
          // return url for filenames not based on template
          
          // return url for filenames based on template
          return "assets/js/" + ({"1107": "1fa8891f","1320": "ce9149a0","1387": "1371bad0","1531": "747c2147","1723": "197ee92b","1951": "3c097e0f","2053": "8d2c5feb","2143": "6a03d820","2471": "2e9131db","2868": "bd4e1fda","3097": "425e46b9","319": "cd2f9674","3206": "fbed35e5","3222": "10bd23ad","3340": "b3bb679c","3395": "df1e2c8a","3432": "5e95c892","3821": "b09a922e","4024": "89b13674","42": "88aab670","4491": "af7e7830","4610": "33e75f9d","4731": "7220320d","480": "42b2a0a0","4834": "41752823","4941": "34d03f68","4945": "7c9a920f","4952": "854cb7eb","5001": "4922af3f","5097": "61010e6f","5112": "aba21aa0","5211": "a7bd4aaa","5230": "1a4e3797","5338": "3388539a","5382": "7e7678cf","5463": "b450d2c0","5839": "22f65bba","6130": "c4f5d8e4","6141": "e2ca401e","6569": "7618520e","6596": "a4da9737","6600": "dba3fedd","6744": "adbb8a53","6960": "b3d5d852","7048": "17896441","7250": "f5b6ab79","7294": "5707466f","7319": "1cc21783","7365": "a7456010","7397": "5308dfd1","7738": "c141421f","7908": "2bae4045","7971": "dd4ec03e","8039": "fa1bc1bc","8332": "e1d3e13e","8504": "36281e77","8533": "46069a04","868": "e91ab3d2","8922": "b7329038","9203": "3708f180","9234": "000f552c","9297": "a94703ab","943": "8f4f52dc","9493": "ff083161","9865": "3a5e0c69","9923": "0d9570ff","9982": "cee6f4d2",}[chunkId] || chunkId) + "." + {"1107": "719dfc41","1320": "6c84d1ad","1381": "03042ea8","1387": "a9085a6e","1531": "fb95b4d6","1723": "c8f7ddba","1951": "5d803cb4","2053": "9c9552b9","2143": "1853fbb1","2154": "5c790776","2471": "a684477b","2626": "2a1a5f12","2868": "e0e373a8","3097": "47ecce20","319": "c6064c9c","3206": "f50dc90a","3222": "927ce342","3340": "99b23919","3395": "f6d92f14","3432": "d6448451","3821": "c1399122","3853": "a679f808","4024": "782567f5","42": "ef4709ac","4491": "4471a560","4610": "38dd6aad","4731": "69836ad5","480": "a815e154","4834": "7020d5ba","4941": "b8fa4fb5","4945": "27da78ca","4952": "f73e2776","5001": "0b62682f","5097": "eb59439b","5112": "a038e226","5158": "ac97e061","5211": "5b913ad2","5230": "a43a0d57","5338": "8b4cd10a","5382": "439715af","5463": "2c34552b","5839": "0a722617","6130": "043dc895","6141": "fc7d2546","6247": "ad8096e6","6569": "173fb0fd","6596": "302247bd","6600": "ae2bee16","6744": "5048050e","6960": "cfcbb5b6","7048": "387b0117","7250": "71fd1cce","7294": "19d5b664","7319": "b8f318d7","7365": "4bebfddf","7397": "8163d359","7738": "80c8c591","7908": "23875b34","7971": "06a25612","8039": "f54cde84","8332": "de4a0a70","8504": "b3f58faf","8533": "c3e265fd","868": "eef61e0b","8922": "bcfd6d27","9203": "0ca30b66","9234": "6ec1df25","9297": "890972a7","943": "744d9a9d","9493": "68657cf7","9607": "d96cff5f","9865": "8a65b2c4","9914": "f964e272","9923": "bfcef827","9982": "ab14c52e",}[chunkId] + ".js";
        };
      
})();
// webpack/runtime/get mini-css chunk filename
(() => {
// This function allow to reference chunks
        __webpack_require__.miniCssF = function (chunkId) {
          // return url for filenames not based on template
          
          // return url for filenames based on template
          return "" + chunkId + ".css";
        };
      
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = function () {
	return "c8d7401a8b37228f";
};

})();
// webpack/runtime/global
(() => {
__webpack_require__.g = (function () {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();

})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/load_script
(() => {
var inProgress = {};

var dataWebpackPrefix = "suprema-docs:";
// loadScript function to load a script via script tag
__webpack_require__.l = function (url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		script = document.createElement('script');
		
		script.charset = 'utf-8';
		script.timeout = 120;
		if (__webpack_require__.nc) {
			script.setAttribute("nonce", __webpack_require__.nc);
		}
		script.setAttribute("data-webpack", dataWebpackPrefix + key);
		
		script.src = url;

		
	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: 'timeout',
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
// webpack/runtime/on_chunk_loaded
(() => {
var deferred = [];
__webpack_require__.O = function (result, chunkIds, fn, priority) {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var chunkIds = deferred[i][0],
			fn = deferred[i][1],
			priority = deferred[i][2];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every(function (key) {
					return __webpack_require__.O[key](chunkIds[j]);
				})
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "/docs/en/";

})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = function () {
	return "1.2.0-alpha.0";
};

})();
// webpack/runtime/ChunkAssetRuntimeModule
(() => {
// Docusaurus function to get chunk asset
__webpack_require__.gca = function(chunkId) { chunkId = {"17896441":"7048","41752823":"4834","88aab670":"42","cd2f9674":"319","42b2a0a0":"480","e91ab3d2":"868","8f4f52dc":"943","1fa8891f":"1107","ce9149a0":"1320","1371bad0":"1387","747c2147":"1531","197ee92b":"1723","3c097e0f":"1951","8d2c5feb":"2053","6a03d820":"2143","2e9131db":"2471","bd4e1fda":"2868","425e46b9":"3097","fbed35e5":"3206","10bd23ad":"3222","b3bb679c":"3340","df1e2c8a":"3395","5e95c892":"3432","b09a922e":"3821","89b13674":"4024","af7e7830":"4491","33e75f9d":"4610","7220320d":"4731","34d03f68":"4941","7c9a920f":"4945","854cb7eb":"4952","4922af3f":"5001","61010e6f":"5097","aba21aa0":"5112","a7bd4aaa":"5211","1a4e3797":"5230","3388539a":"5338","7e7678cf":"5382","b450d2c0":"5463","22f65bba":"5839","c4f5d8e4":"6130","e2ca401e":"6141","7618520e":"6569","a4da9737":"6596","dba3fedd":"6600","adbb8a53":"6744","b3d5d852":"6960","f5b6ab79":"7250","5707466f":"7294","1cc21783":"7319","a7456010":"7365","5308dfd1":"7397","c141421f":"7738","2bae4045":"7908","dd4ec03e":"7971","fa1bc1bc":"8039","e1d3e13e":"8332","36281e77":"8504","46069a04":"8533","b7329038":"8922","3708f180":"9203","000f552c":"9234","a94703ab":"9297","ff083161":"9493","3a5e0c69":"9865","0d9570ff":"9923","cee6f4d2":"9982"}[chunkId]||chunkId; return __webpack_require__.p + __webpack_require__.u(chunkId); };
})();
// webpack/runtime/jsonp_chunk_loading
(() => {

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = {"2580": 0,"6212": 0,};
      
        __webpack_require__.f.j = function (chunkId, promises) {
          // JSONP chunk loading for javascript
var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
	? installedChunks[chunkId]
	: undefined;
if (installedChunkData !== 0) {
	// 0 means "already installed".

	// a Promise means "currently loading".
	if (installedChunkData) {
		promises.push(installedChunkData[2]);
	} else {
		if (!/^(2580|6212)$/.test(chunkId)) {
			// setup Promise in chunk cache
			var promise = new Promise(function (resolve, reject) {
				installedChunkData = installedChunks[chunkId] = [resolve, reject];
			});
			promises.push((installedChunkData[2] = promise));

			// start chunk loading
			var url = __webpack_require__.p + __webpack_require__.u(chunkId);
			// create error before stack unwound to get useful stacktrace later
			var error = new Error();
			var loadingEnded = function (event) {
				if (__webpack_require__.o(installedChunks, chunkId)) {
					installedChunkData = installedChunks[chunkId];
					if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
					if (installedChunkData) {
						var errorType =
							event && (event.type === 'load' ? 'missing' : event.type);
						var realSrc = event && event.target && event.target.src;
						error.message =
							'Loading chunk ' +
							chunkId +
							' failed.\n(' +
							errorType +
							': ' +
							realSrc +
							')';
						error.name = 'ChunkLoadError';
						error.type = errorType;
						error.request = realSrc;
						installedChunkData[1](error);
					}
				}
			};
			__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
		} else installedChunks[chunkId] = 0;

	}
}

        }
        __webpack_require__.O.j = function (chunkId) {
	return installedChunks[chunkId] === 0;
};
// install a JSONP callback for chunk loading
var webpackJsonpCallback = function (parentChunkLoadingFunction, data) {
	var chunkIds = data[0];
	var moreModules = data[1];
	var runtime = data[2];
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId,
		chunkId,
		i = 0;
	if (chunkIds.some(function (id) { return installedChunks[id] !== 0 })) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	return __webpack_require__.O(result);
};

var chunkLoadingGlobal = self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(
	null,
	chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
);

})();
/************************************************************************/
})()
;