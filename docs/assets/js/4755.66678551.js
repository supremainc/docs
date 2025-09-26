"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4755"], {
34153: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ autocomplete_autocomplete)
});

;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/debounce.js
function debounce(fn, time) {
  var timerId = undefined;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(function () {
      return fn.apply(void 0, args);
    }, time);
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/safelyRunOnBrowser.js
/**
 * Safely runs code meant for browser environments only.
 */
function safelyRunOnBrowser(callback) {
  if (typeof window !== 'undefined') {
    return callback({
      window: window
    });
  }
  return undefined;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/createRef.js
function createRef(initialValue) {
  return {
    current: initialValue
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/isEqual.js
function isPrimitive(obj) {
  return obj !== Object(obj);
}
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (isPrimitive(first) || isPrimitive(second) || typeof first === 'function' || typeof second === 'function') {
    return first === second;
  }
  if (Object.keys(first).length !== Object.keys(second).length) {
    return false;
  }
  for (var _i = 0, _Object$keys = Object.keys(first); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    if (!(key in second)) {
      return false;
    }
    if (!isEqual(first[key], second[key])) {
      return false;
    }
  }
  return true;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/noop.js
var noop_noop = function noop() {};
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createClickedEvent.js
function createClickedEvent(_ref) {
  var item = _ref.item,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  return {
    index: item.__autocomplete_indexName,
    items: [item],
    positions: [1 + items.findIndex(function (x) {
      return x.objectID === item.objectID;
    })],
    queryID: item.__autocomplete_queryID,
    algoliaSource: ['autocomplete']
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/isModernInsightsClient.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Determines if a given insights `client` supports the optional call to `init`
 * and the ability to set credentials via extra parameters when sending events.
 */
function isModernInsightsClient(client) {
  var _split$map = (client.version || '').split('.').map(Number),
    _split$map2 = _slicedToArray(_split$map, 2),
    major = _split$map2[0],
    minor = _split$map2[1];

  /* eslint-disable @typescript-eslint/camelcase */
  var v3 = major >= 3;
  var v2_4 = major === 2 && minor >= 4;
  var v1_10 = major === 1 && minor >= 10;
  return v3 || v2_4 || v1_10;
  /* eslint-enable @typescript-eslint/camelcase */
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createSearchInsightsApi.js
var _excluded = ["items"],
  _excluded2 = ["items"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || createSearchInsightsApi_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function createSearchInsightsApi_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return createSearchInsightsApi_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return createSearchInsightsApi_arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return createSearchInsightsApi_arrayLikeToArray(arr); }
function createSearchInsightsApi_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function chunk(item) {
  var chunkSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  var chunks = [];
  for (var i = 0; i < item.objectIDs.length; i += chunkSize) {
    chunks.push(_objectSpread(_objectSpread({}, item), {}, {
      objectIDs: item.objectIDs.slice(i, i + chunkSize)
    }));
  }
  return chunks;
}
function mapToInsightsParamsApi(params) {
  return params.map(function (_ref) {
    var items = _ref.items,
      param = _objectWithoutProperties(_ref, _excluded);
    return _objectSpread(_objectSpread({}, param), {}, {
      objectIDs: (items === null || items === void 0 ? void 0 : items.map(function (_ref2) {
        var objectID = _ref2.objectID;
        return objectID;
      })) || param.objectIDs
    });
  });
}
function createSearchInsightsApi(searchInsights) {
  var canSendHeaders = isModernInsightsClient(searchInsights);
  function sendToInsights(method, payloads, items) {
    if (canSendHeaders && typeof items !== 'undefined') {
      var _items$0$__autocomple = items[0].__autocomplete_algoliaCredentials,
        appId = _items$0$__autocomple.appId,
        apiKey = _items$0$__autocomple.apiKey;
      var headers = {
        'X-Algolia-Application-Id': appId,
        'X-Algolia-API-Key': apiKey
      };
      searchInsights.apply(void 0, [method].concat(_toConsumableArray(payloads), [{
        headers: headers
      }]));
    } else {
      searchInsights.apply(void 0, [method].concat(_toConsumableArray(payloads)));
    }
  }
  return {
    /**
     * Initializes Insights with Algolia credentials.
     */
    init: function init(appId, apiKey) {
      searchInsights('init', {
        appId: appId,
        apiKey: apiKey
      });
    },
    /**
     * Sets the authenticated user token to attach to events.
     * Unsets the authenticated token by passing `undefined`.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/set-authenticated-user-token/
     */
    setAuthenticatedUserToken: function setAuthenticatedUserToken(authenticatedUserToken) {
      searchInsights('setAuthenticatedUserToken', authenticatedUserToken);
    },
    /**
     * Sets the user token to attach to events.
     */
    setUserToken: function setUserToken(userToken) {
      searchInsights('setUserToken', userToken);
    },
    /**
     * Sends click events to capture a query and its clicked items and positions.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/clicked-object-ids-after-search/
     */
    clickedObjectIDsAfterSearch: function clickedObjectIDsAfterSearch() {
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }
      if (params.length > 0) {
        sendToInsights('clickedObjectIDsAfterSearch', mapToInsightsParamsApi(params), params[0].items);
      }
    },
    /**
     * Sends click events to capture clicked items.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/clicked-object-ids/
     */
    clickedObjectIDs: function clickedObjectIDs() {
      for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
      }
      if (params.length > 0) {
        sendToInsights('clickedObjectIDs', mapToInsightsParamsApi(params), params[0].items);
      }
    },
    /**
     * Sends click events to capture the filters a user clicks on.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/clicked-filters/
     */
    clickedFilters: function clickedFilters() {
      for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
      }
      if (params.length > 0) {
        searchInsights.apply(void 0, ['clickedFilters'].concat(params));
      }
    },
    /**
     * Sends conversion events to capture a query and its clicked items.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/converted-object-ids-after-search/
     */
    convertedObjectIDsAfterSearch: function convertedObjectIDsAfterSearch() {
      for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        params[_key4] = arguments[_key4];
      }
      if (params.length > 0) {
        sendToInsights('convertedObjectIDsAfterSearch', mapToInsightsParamsApi(params), params[0].items);
      }
    },
    /**
     * Sends conversion events to capture clicked items.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/converted-object-ids/
     */
    convertedObjectIDs: function convertedObjectIDs() {
      for (var _len5 = arguments.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        params[_key5] = arguments[_key5];
      }
      if (params.length > 0) {
        sendToInsights('convertedObjectIDs', mapToInsightsParamsApi(params), params[0].items);
      }
    },
    /**
     * Sends conversion events to capture the filters a user uses when converting.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/converted-filters/
     */
    convertedFilters: function convertedFilters() {
      for (var _len6 = arguments.length, params = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        params[_key6] = arguments[_key6];
      }
      if (params.length > 0) {
        searchInsights.apply(void 0, ['convertedFilters'].concat(params));
      }
    },
    /**
     * Sends view events to capture clicked items.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/viewed-object-ids/
     */
    viewedObjectIDs: function viewedObjectIDs() {
      for (var _len7 = arguments.length, params = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        params[_key7] = arguments[_key7];
      }
      if (params.length > 0) {
        params.reduce(function (acc, _ref3) {
          var items = _ref3.items,
            param = _objectWithoutProperties(_ref3, _excluded2);
          return [].concat(_toConsumableArray(acc), _toConsumableArray(chunk(_objectSpread(_objectSpread({}, param), {}, {
            objectIDs: (items === null || items === void 0 ? void 0 : items.map(function (_ref4) {
              var objectID = _ref4.objectID;
              return objectID;
            })) || param.objectIDs
          })).map(function (payload) {
            return {
              items: items,
              payload: payload
            };
          })));
        }, []).forEach(function (_ref5) {
          var items = _ref5.items,
            payload = _ref5.payload;
          return sendToInsights('viewedObjectIDs', [payload], items);
        });
      }
    },
    /**
     * Sends view events to capture the filters a user uses when viewing.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/viewed-filters/
     */
    viewedFilters: function viewedFilters() {
      for (var _len8 = arguments.length, params = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        params[_key8] = arguments[_key8];
      }
      if (params.length > 0) {
        searchInsights.apply(void 0, ['viewedFilters'].concat(params));
      }
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createViewedEvents.js
function createViewedEvents(_ref) {
  var items = _ref.items;
  var itemsByIndexName = items.reduce(function (acc, current) {
    var _acc$current$__autoco;
    acc[current.__autocomplete_indexName] = ((_acc$current$__autoco = acc[current.__autocomplete_indexName]) !== null && _acc$current$__autoco !== void 0 ? _acc$current$__autoco : []).concat(current);
    return acc;
  }, {});
  return Object.keys(itemsByIndexName).map(function (indexName) {
    var items = itemsByIndexName[indexName];
    return {
      index: indexName,
      items: items,
      algoliaSource: ['autocomplete']
    };
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/isAlgoliaInsightsHit.js
function isAlgoliaInsightsHit(hit) {
  return hit.objectID && hit.__autocomplete_indexName && hit.__autocomplete_queryID;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createAlgoliaInsightsPlugin.js
function createAlgoliaInsightsPlugin_typeof(obj) { "@babel/helpers - typeof"; return createAlgoliaInsightsPlugin_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, createAlgoliaInsightsPlugin_typeof(obj); }
function createAlgoliaInsightsPlugin_toConsumableArray(arr) { return createAlgoliaInsightsPlugin_arrayWithoutHoles(arr) || createAlgoliaInsightsPlugin_iterableToArray(arr) || createAlgoliaInsightsPlugin_unsupportedIterableToArray(arr) || createAlgoliaInsightsPlugin_nonIterableSpread(); }
function createAlgoliaInsightsPlugin_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function createAlgoliaInsightsPlugin_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return createAlgoliaInsightsPlugin_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return createAlgoliaInsightsPlugin_arrayLikeToArray(o, minLen); }
function createAlgoliaInsightsPlugin_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function createAlgoliaInsightsPlugin_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return createAlgoliaInsightsPlugin_arrayLikeToArray(arr); }
function createAlgoliaInsightsPlugin_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createAlgoliaInsightsPlugin_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function createAlgoliaInsightsPlugin_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? createAlgoliaInsightsPlugin_ownKeys(Object(source), !0).forEach(function (key) { createAlgoliaInsightsPlugin_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : createAlgoliaInsightsPlugin_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createAlgoliaInsightsPlugin_defineProperty(obj, key, value) { key = createAlgoliaInsightsPlugin_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function createAlgoliaInsightsPlugin_toPropertyKey(arg) { var key = createAlgoliaInsightsPlugin_toPrimitive(arg, "string"); return createAlgoliaInsightsPlugin_typeof(key) === "symbol" ? key : String(key); }
function createAlgoliaInsightsPlugin_toPrimitive(input, hint) { if (createAlgoliaInsightsPlugin_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (createAlgoliaInsightsPlugin_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var VIEW_EVENT_DELAY = 400;
var ALGOLIA_INSIGHTS_VERSION = '2.15.0';
var ALGOLIA_INSIGHTS_SRC = "https://cdn.jsdelivr.net/npm/search-insights@".concat(ALGOLIA_INSIGHTS_VERSION, "/dist/search-insights.min.js");
var sendViewedObjectIDs = debounce(function (_ref) {
  var onItemsChange = _ref.onItemsChange,
    items = _ref.items,
    insights = _ref.insights,
    state = _ref.state;
  onItemsChange({
    insights: insights,
    insightsEvents: createViewedEvents({
      items: items
    }).map(function (event) {
      return createAlgoliaInsightsPlugin_objectSpread({
        eventName: 'Items Viewed'
      }, event);
    }),
    state: state
  });
}, VIEW_EVENT_DELAY);
function createAlgoliaInsightsPlugin(options) {
  var _getOptions = getOptions(options),
    providedInsightsClient = _getOptions.insightsClient,
    insightsInitParams = _getOptions.insightsInitParams,
    onItemsChange = _getOptions.onItemsChange,
    onSelectEvent = _getOptions.onSelect,
    onActiveEvent = _getOptions.onActive,
    __autocomplete_clickAnalytics = _getOptions.__autocomplete_clickAnalytics;
  var insightsClient = providedInsightsClient;
  if (!providedInsightsClient) {
    safelyRunOnBrowser(function (_ref2) {
      var window = _ref2.window;
      var pointer = window.AlgoliaAnalyticsObject || 'aa';
      if (typeof pointer === 'string') {
        insightsClient = window[pointer];
      }
      if (!insightsClient) {
        window.AlgoliaAnalyticsObject = pointer;
        if (!window[pointer]) {
          window[pointer] = function () {
            if (!window[pointer].queue) {
              window[pointer].queue = [];
            }
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            window[pointer].queue.push(args);
          };
        }
        window[pointer].version = ALGOLIA_INSIGHTS_VERSION;
        insightsClient = window[pointer];
        loadInsights(window);
      }
    });
  }

  // We return an empty plugin if `insightsClient` is still undefined at
  // this stage, which can happen in server environments.
  if (!insightsClient) {
    return {};
  }
  if (insightsInitParams) {
    insightsClient('init', createAlgoliaInsightsPlugin_objectSpread({
      partial: true
    }, insightsInitParams));
  }
  var insights = createSearchInsightsApi(insightsClient);
  var previousItems = createRef([]);
  var debouncedOnStateChange = debounce(function (_ref3) {
    var state = _ref3.state;
    if (!state.isOpen) {
      return;
    }
    var items = state.collections.reduce(function (acc, current) {
      return [].concat(createAlgoliaInsightsPlugin_toConsumableArray(acc), createAlgoliaInsightsPlugin_toConsumableArray(current.items));
    }, []).filter(isAlgoliaInsightsHit);
    if (!isEqual(previousItems.current.map(function (x) {
      return x.objectID;
    }), items.map(function (x) {
      return x.objectID;
    }))) {
      previousItems.current = items;
      if (items.length > 0) {
        sendViewedObjectIDs({
          onItemsChange: onItemsChange,
          items: items,
          insights: insights,
          state: state
        });
      }
    }
  }, 0);
  return {
    name: 'aa.algoliaInsightsPlugin',
    subscribe: function subscribe(_ref4) {
      var setContext = _ref4.setContext,
        onSelect = _ref4.onSelect,
        onActive = _ref4.onActive;
      function setInsightsContext(userToken) {
        setContext({
          algoliaInsightsPlugin: {
            __algoliaSearchParameters: createAlgoliaInsightsPlugin_objectSpread(createAlgoliaInsightsPlugin_objectSpread({}, __autocomplete_clickAnalytics ? {
              clickAnalytics: true
            } : {}), userToken ? {
              userToken: normalizeUserToken(userToken)
            } : {}),
            insights: insights
          }
        });
      }
      insightsClient('addAlgoliaAgent', 'insights-plugin');
      setInsightsContext();

      // Handles user token changes
      insightsClient('onUserTokenChange', function (userToken) {
        setInsightsContext(userToken);
      });
      insightsClient('getUserToken', null, function (_error, userToken) {
        setInsightsContext(userToken);
      });
      onSelect(function (_ref5) {
        var item = _ref5.item,
          state = _ref5.state,
          event = _ref5.event,
          source = _ref5.source;
        if (!isAlgoliaInsightsHit(item)) {
          return;
        }
        onSelectEvent({
          state: state,
          event: event,
          insights: insights,
          item: item,
          insightsEvents: [createAlgoliaInsightsPlugin_objectSpread({
            eventName: 'Item Selected'
          }, createClickedEvent({
            item: item,
            items: source.getItems().filter(isAlgoliaInsightsHit)
          }))]
        });
      });
      onActive(function (_ref6) {
        var item = _ref6.item,
          source = _ref6.source,
          state = _ref6.state,
          event = _ref6.event;
        if (!isAlgoliaInsightsHit(item)) {
          return;
        }
        onActiveEvent({
          state: state,
          event: event,
          insights: insights,
          item: item,
          insightsEvents: [createAlgoliaInsightsPlugin_objectSpread({
            eventName: 'Item Active'
          }, createClickedEvent({
            item: item,
            items: source.getItems().filter(isAlgoliaInsightsHit)
          }))]
        });
      });
    },
    onStateChange: function onStateChange(_ref7) {
      var state = _ref7.state;
      debouncedOnStateChange({
        state: state
      });
    },
    __autocomplete_pluginOptions: options
  };
}
function getAlgoliaSources() {
  var _context$algoliaInsig;
  var algoliaSourceBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var context = arguments.length > 1 ? arguments[1] : undefined;
  return [].concat(createAlgoliaInsightsPlugin_toConsumableArray(algoliaSourceBase), ['autocomplete-internal'], createAlgoliaInsightsPlugin_toConsumableArray((_context$algoliaInsig = context.algoliaInsightsPlugin) !== null && _context$algoliaInsig !== void 0 && _context$algoliaInsig.__automaticInsights ? ['autocomplete-automatic'] : []));
}
function getOptions(options) {
  return createAlgoliaInsightsPlugin_objectSpread({
    onItemsChange: function onItemsChange(_ref8) {
      var insights = _ref8.insights,
        insightsEvents = _ref8.insightsEvents,
        state = _ref8.state;
      insights.viewedObjectIDs.apply(insights, createAlgoliaInsightsPlugin_toConsumableArray(insightsEvents.map(function (event) {
        return createAlgoliaInsightsPlugin_objectSpread(createAlgoliaInsightsPlugin_objectSpread({}, event), {}, {
          algoliaSource: getAlgoliaSources(event.algoliaSource, state.context)
        });
      })));
    },
    onSelect: function onSelect(_ref9) {
      var insights = _ref9.insights,
        insightsEvents = _ref9.insightsEvents,
        state = _ref9.state;
      insights.clickedObjectIDsAfterSearch.apply(insights, createAlgoliaInsightsPlugin_toConsumableArray(insightsEvents.map(function (event) {
        return createAlgoliaInsightsPlugin_objectSpread(createAlgoliaInsightsPlugin_objectSpread({}, event), {}, {
          algoliaSource: getAlgoliaSources(event.algoliaSource, state.context)
        });
      })));
    },
    onActive: noop_noop,
    __autocomplete_clickAnalytics: true
  }, options);
}
function loadInsights(environment) {
  var errorMessage = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
  try {
    var script = environment.document.createElement('script');
    script.async = true;
    script.src = ALGOLIA_INSIGHTS_SRC;
    script.onerror = function () {
      // eslint-disable-next-line no-console
      console.error(errorMessage);
    };
    document.body.appendChild(script);
  } catch (cause) {
    // eslint-disable-next-line no-console
    console.error(errorMessage);
  }
}

/**
 * While `search-insights` supports both string and number user tokens,
 * the Search API only accepts strings. This function normalizes the user token.
 */
function normalizeUserToken(userToken) {
  return typeof userToken === 'number' ? userToken.toString() : userToken;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/checkOptions.js

function checkOptions(options) {
   false ? 0 : void 0;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromiseList.js
function createCancelablePromiseList() {
  var list = [];
  return {
    add: function add(cancelablePromise) {
      list.push(cancelablePromise);
      return cancelablePromise.finally(function () {
        list = list.filter(function (item) {
          return item !== cancelablePromise;
        });
      });
    },
    cancelAll: function cancelAll() {
      list.forEach(function (promise) {
        return promise.cancel();
      });
    },
    isEmpty: function isEmpty() {
      return list.length === 0;
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/createStore.js
function createStore_typeof(obj) { "@babel/helpers - typeof"; return createStore_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, createStore_typeof(obj); }
function createStore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function createStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? createStore_ownKeys(Object(source), !0).forEach(function (key) { createStore_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : createStore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createStore_defineProperty(obj, key, value) { key = createStore_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function createStore_toPropertyKey(arg) { var key = createStore_toPrimitive(arg, "string"); return createStore_typeof(key) === "symbol" ? key : String(key); }
function createStore_toPrimitive(input, hint) { if (createStore_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (createStore_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function createStore(reducer, props, onStoreStateChange) {
  var state = props.initialState;
  return {
    getState: function getState() {
      return state;
    },
    dispatch: function dispatch(action, payload) {
      var prevState = createStore_objectSpread({}, state);
      state = reducer(state, {
        type: action,
        props: props,
        payload: payload
      });
      onStoreStateChange({
        state: state,
        prevState: prevState
      });
    },
    pendingRequests: createCancelablePromiseList()
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js
function flatten(values) {
  return values.reduce(function (a, b) {
    return a.concat(b);
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/getAutocompleteSetters.js
function getAutocompleteSetters_typeof(obj) { "@babel/helpers - typeof"; return getAutocompleteSetters_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, getAutocompleteSetters_typeof(obj); }
function getAutocompleteSetters_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function getAutocompleteSetters_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getAutocompleteSetters_ownKeys(Object(source), !0).forEach(function (key) { getAutocompleteSetters_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getAutocompleteSetters_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function getAutocompleteSetters_defineProperty(obj, key, value) { key = getAutocompleteSetters_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function getAutocompleteSetters_toPropertyKey(arg) { var key = getAutocompleteSetters_toPrimitive(arg, "string"); return getAutocompleteSetters_typeof(key) === "symbol" ? key : String(key); }
function getAutocompleteSetters_toPrimitive(input, hint) { if (getAutocompleteSetters_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (getAutocompleteSetters_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function getAutocompleteSetters(_ref) {
  var store = _ref.store;
  var setActiveItemId = function setActiveItemId(value) {
    store.dispatch('setActiveItemId', value);
  };
  var setQuery = function setQuery(value) {
    store.dispatch('setQuery', value);
  };
  var setCollections = function setCollections(rawValue) {
    var baseItemId = 0;
    var value = rawValue.map(function (collection) {
      return getAutocompleteSetters_objectSpread(getAutocompleteSetters_objectSpread({}, collection), {}, {
        // We flatten the stored items to support calling `getAlgoliaResults`
        // from the source itself.
        items: flatten(collection.items).map(function (item) {
          return getAutocompleteSetters_objectSpread(getAutocompleteSetters_objectSpread({}, item), {}, {
            __autocomplete_id: baseItemId++
          });
        })
      });
    });
    store.dispatch('setCollections', value);
  };
  var setIsOpen = function setIsOpen(value) {
    store.dispatch('setIsOpen', value);
  };
  var setStatus = function setStatus(value) {
    store.dispatch('setStatus', value);
  };
  var setContext = function setContext(value) {
    store.dispatch('setContext', value);
  };
  return {
    setActiveItemId: setActiveItemId,
    setQuery: setQuery,
    setCollections: setCollections,
    setIsOpen: setIsOpen,
    setStatus: setStatus,
    setContext: setContext
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js
function getItemsCount(state) {
  if (state.collections.length === 0) {
    return 0;
  }
  return state.collections.reduce(function (sum, collection) {
    return sum + collection.items.length;
  }, 0);
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js
var autocompleteId = 0;
function generateAutocompleteId() {
  return "autocomplete-".concat(autocompleteId++);
}
// EXTERNAL MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js
var invariant = __webpack_require__(42880);
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js
function decycle_slicedToArray(arr, i) { return decycle_arrayWithHoles(arr) || decycle_iterableToArrayLimit(arr, i) || decycle_unsupportedIterableToArray(arr, i) || decycle_nonIterableRest(); }
function decycle_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function decycle_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return decycle_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return decycle_arrayLikeToArray(o, minLen); }
function decycle_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function decycle_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function decycle_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function decycle_typeof(obj) { "@babel/helpers - typeof"; return decycle_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, decycle_typeof(obj); }
/**
 * Decycles objects with circular references.
 * This is used to print cyclic structures in development environment only.
 */
function decycle(obj) {
  var seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();
  if (true) {
    return obj;
  }
  if (seen.has(obj)) {
    return '[Circular]';
  }
  var newSeen = seen.add(obj);
  if (Array.isArray(obj)) {
    return obj.map(function (x) {
      return decycle(x, newSeen);
    });
  }
  return Object.fromEntries(Object.entries(obj).map(function (_ref) {
    var _ref2 = decycle_slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return [key, decycle(value, newSeen)];
  }));
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNormalizedSources.js
function getNormalizedSources_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function getNormalizedSources_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getNormalizedSources_ownKeys(Object(source), !0).forEach(function (key) { getNormalizedSources_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getNormalizedSources_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function getNormalizedSources_defineProperty(obj, key, value) { key = getNormalizedSources_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function getNormalizedSources_toPropertyKey(arg) { var key = getNormalizedSources_toPrimitive(arg, "string"); return getNormalizedSources_typeof(key) === "symbol" ? key : String(key); }
function getNormalizedSources_toPrimitive(input, hint) { if (getNormalizedSources_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (getNormalizedSources_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function getNormalizedSources_typeof(obj) { "@babel/helpers - typeof"; return getNormalizedSources_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, getNormalizedSources_typeof(obj); }

function getNormalizedSources(getSources, params) {
  var seenSourceIds = [];
  return Promise.resolve(getSources(params)).then(function (sources) {
    (0,invariant/* .invariant */.V)(Array.isArray(sources), function () {
      return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(getNormalizedSources_typeof(sources)), ":\n\n").concat(JSON.stringify(decycle(sources), null, 2));
    });
    return Promise.all(sources
    // We allow `undefined` and `false` sources to allow users to use
    // `Boolean(query) && source` (=> `false`).
    // We need to remove these values at this point.
    .filter(function (maybeSource) {
      return Boolean(maybeSource);
    }).map(function (source) {
      (0,invariant/* .invariant */.V)(typeof source.sourceId === 'string', 'A source must provide a `sourceId` string.');
      if (seenSourceIds.includes(source.sourceId)) {
        throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(source.sourceId), " is not unique."));
      }
      seenSourceIds.push(source.sourceId);
      var defaultSource = {
        getItemInputValue: function getItemInputValue(_ref) {
          var state = _ref.state;
          return state.query;
        },
        getItemUrl: function getItemUrl() {
          return undefined;
        },
        onSelect: function onSelect(_ref2) {
          var setIsOpen = _ref2.setIsOpen;
          setIsOpen(false);
        },
        onActive: noop_noop,
        onResolve: noop_noop
      };
      Object.keys(defaultSource).forEach(function (key) {
        defaultSource[key].__default = true;
      });
      var normalizedSource = getNormalizedSources_objectSpread(getNormalizedSources_objectSpread({}, defaultSource), source);
      return Promise.resolve(normalizedSource);
    }));
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js
function getDefaultProps_typeof(obj) { "@babel/helpers - typeof"; return getDefaultProps_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, getDefaultProps_typeof(obj); }
function getDefaultProps_toConsumableArray(arr) { return getDefaultProps_arrayWithoutHoles(arr) || getDefaultProps_iterableToArray(arr) || getDefaultProps_unsupportedIterableToArray(arr) || getDefaultProps_nonIterableSpread(); }
function getDefaultProps_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function getDefaultProps_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return getDefaultProps_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return getDefaultProps_arrayLikeToArray(o, minLen); }
function getDefaultProps_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function getDefaultProps_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return getDefaultProps_arrayLikeToArray(arr); }
function getDefaultProps_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function getDefaultProps_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function getDefaultProps_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getDefaultProps_ownKeys(Object(source), !0).forEach(function (key) { getDefaultProps_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getDefaultProps_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function getDefaultProps_defineProperty(obj, key, value) { key = getDefaultProps_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function getDefaultProps_toPropertyKey(arg) { var key = getDefaultProps_toPrimitive(arg, "string"); return getDefaultProps_typeof(key) === "symbol" ? key : String(key); }
function getDefaultProps_toPrimitive(input, hint) { if (getDefaultProps_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (getDefaultProps_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function getDefaultProps(props, pluginSubscribers) {
  var _props$id;
  /* eslint-disable no-restricted-globals */
  var environment = typeof window !== 'undefined' ? window : {};
  /* eslint-enable no-restricted-globals */
  var plugins = props.plugins || [];
  return getDefaultProps_objectSpread(getDefaultProps_objectSpread({
    debug: false,
    openOnFocus: false,
    enterKeyHint: undefined,
    ignoreCompositionEvents: false,
    placeholder: '',
    autoFocus: false,
    defaultActiveItemId: null,
    stallThreshold: 300,
    insights: undefined,
    environment: environment,
    shouldPanelOpen: function shouldPanelOpen(_ref) {
      var state = _ref.state;
      return getItemsCount(state) > 0;
    },
    reshape: function reshape(_ref2) {
      var sources = _ref2.sources;
      return sources;
    }
  }, props), {}, {
    // Since `generateAutocompleteId` triggers a side effect (it increments
    // an internal counter), we don't want to execute it if unnecessary.
    id: (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : generateAutocompleteId(),
    plugins: plugins,
    // The following props need to be deeply defaulted.
    initialState: getDefaultProps_objectSpread({
      activeItemId: null,
      query: '',
      completion: null,
      collections: [],
      isOpen: false,
      status: 'idle',
      context: {}
    }, props.initialState),
    onStateChange: function onStateChange(params) {
      var _props$onStateChange;
      (_props$onStateChange = props.onStateChange) === null || _props$onStateChange === void 0 ? void 0 : _props$onStateChange.call(props, params);
      plugins.forEach(function (x) {
        var _x$onStateChange;
        return (_x$onStateChange = x.onStateChange) === null || _x$onStateChange === void 0 ? void 0 : _x$onStateChange.call(x, params);
      });
    },
    onSubmit: function onSubmit(params) {
      var _props$onSubmit;
      (_props$onSubmit = props.onSubmit) === null || _props$onSubmit === void 0 ? void 0 : _props$onSubmit.call(props, params);
      plugins.forEach(function (x) {
        var _x$onSubmit;
        return (_x$onSubmit = x.onSubmit) === null || _x$onSubmit === void 0 ? void 0 : _x$onSubmit.call(x, params);
      });
    },
    onReset: function onReset(params) {
      var _props$onReset;
      (_props$onReset = props.onReset) === null || _props$onReset === void 0 ? void 0 : _props$onReset.call(props, params);
      plugins.forEach(function (x) {
        var _x$onReset;
        return (_x$onReset = x.onReset) === null || _x$onReset === void 0 ? void 0 : _x$onReset.call(x, params);
      });
    },
    getSources: function getSources(params) {
      return Promise.all([].concat(getDefaultProps_toConsumableArray(plugins.map(function (plugin) {
        return plugin.getSources;
      })), [props.getSources]).filter(Boolean).map(function (getSources) {
        return getNormalizedSources(getSources, params);
      })).then(function (nested) {
        return flatten(nested);
      }).then(function (sources) {
        return sources.map(function (source) {
          return getDefaultProps_objectSpread(getDefaultProps_objectSpread({}, source), {}, {
            onSelect: function onSelect(params) {
              source.onSelect(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onSelect;
                return (_x$onSelect = x.onSelect) === null || _x$onSelect === void 0 ? void 0 : _x$onSelect.call(x, params);
              });
            },
            onActive: function onActive(params) {
              source.onActive(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onActive;
                return (_x$onActive = x.onActive) === null || _x$onActive === void 0 ? void 0 : _x$onActive.call(x, params);
              });
            },
            onResolve: function onResolve(params) {
              source.onResolve(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onResolve;
                return (_x$onResolve = x.onResolve) === null || _x$onResolve === void 0 ? void 0 : _x$onResolve.call(x, params);
              });
            }
          });
        });
      });
    },
    navigator: getDefaultProps_objectSpread({
      navigate: function navigate(_ref3) {
        var itemUrl = _ref3.itemUrl;
        environment.location.assign(itemUrl);
      },
      navigateNewTab: function navigateNewTab(_ref4) {
        var itemUrl = _ref4.itemUrl;
        var windowReference = environment.open(itemUrl, '_blank', 'noopener');
        windowReference === null || windowReference === void 0 ? void 0 : windowReference.focus();
      },
      navigateNewWindow: function navigateNewWindow(_ref5) {
        var itemUrl = _ref5.itemUrl;
        environment.open(itemUrl, '_blank', 'noopener');
      }
    }, props.navigator)
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/reshape.js
function reshape_typeof(obj) { "@babel/helpers - typeof"; return reshape_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, reshape_typeof(obj); }
function reshape_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function reshape_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? reshape_ownKeys(Object(source), !0).forEach(function (key) { reshape_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : reshape_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function reshape_defineProperty(obj, key, value) { key = reshape_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function reshape_toPropertyKey(arg) { var key = reshape_toPrimitive(arg, "string"); return reshape_typeof(key) === "symbol" ? key : String(key); }
function reshape_toPrimitive(input, hint) { if (reshape_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (reshape_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function reshape_reshape(_ref) {
  var collections = _ref.collections,
    props = _ref.props,
    state = _ref.state;
  // Sources are grouped by `sourceId` to conveniently pick them via destructuring.
  // Example: `const { recentSearchesPlugin } = sourcesBySourceId`
  var originalSourcesBySourceId = collections.reduce(function (acc, collection) {
    return reshape_objectSpread(reshape_objectSpread({}, acc), {}, reshape_defineProperty({}, collection.source.sourceId, reshape_objectSpread(reshape_objectSpread({}, collection.source), {}, {
      getItems: function getItems() {
        // We provide the resolved items from the collection to the `reshape` prop.
        return flatten(collection.items);
      }
    })));
  }, {});
  var _props$plugins$reduce = props.plugins.reduce(function (acc, plugin) {
      if (plugin.reshape) {
        return plugin.reshape(acc);
      }
      return acc;
    }, {
      sourcesBySourceId: originalSourcesBySourceId,
      state: state
    }),
    sourcesBySourceId = _props$plugins$reduce.sourcesBySourceId;
  var reshapeSources = props.reshape({
    sourcesBySourceId: sourcesBySourceId,
    sources: Object.values(sourcesBySourceId),
    state: state
  });

  // We reconstruct the collections with the items modified by the `reshape` prop.
  return flatten(reshapeSources).filter(Boolean).map(function (source) {
    return {
      source: source,
      items: source.getItems()
    };
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/utils/mapToAlgoliaResponse.js
function mapToAlgoliaResponse(rawResults) {
  return {
    results: rawResults,
    hits: rawResults.map(function (result) {
      return result.hits;
    }).filter(Boolean),
    facetHits: rawResults.map(function (result) {
      var _facetHits;
      return (_facetHits = result.facetHits) === null || _facetHits === void 0 ? void 0 : _facetHits.map(function (facetHit) {
        // Bring support for the highlighting components.
        return {
          label: facetHit.value,
          count: facetHit.count,
          _highlightResult: {
            label: {
              value: facetHit.highlighted
            }
          }
        };
      });
    }).filter(Boolean)
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/resolve.js
function resolve_typeof(obj) { "@babel/helpers - typeof"; return resolve_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, resolve_typeof(obj); }
function resolve_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function resolve_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? resolve_ownKeys(Object(source), !0).forEach(function (key) { resolve_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : resolve_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function resolve_defineProperty(obj, key, value) { key = resolve_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function resolve_toPropertyKey(arg) { var key = resolve_toPrimitive(arg, "string"); return resolve_typeof(key) === "symbol" ? key : String(key); }
function resolve_toPrimitive(input, hint) { if (resolve_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (resolve_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function resolve_toConsumableArray(arr) { return resolve_arrayWithoutHoles(arr) || resolve_iterableToArray(arr) || resolve_unsupportedIterableToArray(arr) || resolve_nonIterableSpread(); }
function resolve_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function resolve_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return resolve_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return resolve_arrayLikeToArray(o, minLen); }
function resolve_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function resolve_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return resolve_arrayLikeToArray(arr); }
function resolve_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function isDescription(item) {
  return Boolean(item.execute);
}
function isRequesterDescription(description) {
  return Boolean(description === null || description === void 0 ? void 0 : description.execute);
}
function preResolve(itemsOrDescription, sourceId, state) {
  if (isRequesterDescription(itemsOrDescription)) {
    var contextParameters = itemsOrDescription.requesterId === 'algolia' ? Object.assign.apply(Object, [{}].concat(resolve_toConsumableArray(Object.keys(state.context).map(function (key) {
      var _state$context$key;
      return (_state$context$key = state.context[key]) === null || _state$context$key === void 0 ? void 0 : _state$context$key.__algoliaSearchParameters;
    })))) : {};
    return resolve_objectSpread(resolve_objectSpread({}, itemsOrDescription), {}, {
      requests: itemsOrDescription.queries.map(function (query) {
        return {
          query: itemsOrDescription.requesterId === 'algolia' ? resolve_objectSpread(resolve_objectSpread({}, query), {}, {
            params: resolve_objectSpread(resolve_objectSpread({}, contextParameters), query.params)
          }) : query,
          sourceId: sourceId,
          transformResponse: itemsOrDescription.transformResponse
        };
      })
    });
  }
  return {
    items: itemsOrDescription,
    sourceId: sourceId
  };
}
function resolve_resolve(items) {
  var packed = items.reduce(function (acc, current) {
    if (!isDescription(current)) {
      acc.push(current);
      return acc;
    }
    var searchClient = current.searchClient,
      execute = current.execute,
      requesterId = current.requesterId,
      requests = current.requests;
    var container = acc.find(function (item) {
      return isDescription(current) && isDescription(item) && item.searchClient === searchClient && Boolean(requesterId) && item.requesterId === requesterId;
    });
    if (container) {
      var _container$items;
      (_container$items = container.items).push.apply(_container$items, resolve_toConsumableArray(requests));
    } else {
      var request = {
        execute: execute,
        requesterId: requesterId,
        items: requests,
        searchClient: searchClient
      };
      acc.push(request);
    }
    return acc;
  }, []);
  var values = packed.map(function (maybeDescription) {
    if (!isDescription(maybeDescription)) {
      return Promise.resolve(maybeDescription);
    }
    var _ref = maybeDescription,
      execute = _ref.execute,
      items = _ref.items,
      searchClient = _ref.searchClient;
    return execute({
      searchClient: searchClient,
      requests: items
    });
  });
  return Promise.all(values).then(function (responses) {
    return flatten(responses);
  });
}
function postResolve(responses, sources, store) {
  return sources.map(function (source) {
    var matches = responses.filter(function (response) {
      return response.sourceId === source.sourceId;
    });
    var results = matches.map(function (_ref2) {
      var items = _ref2.items;
      return items;
    });
    var transform = matches[0].transformResponse;
    var items = transform ? transform(mapToAlgoliaResponse(results)) : results;
    source.onResolve({
      source: source,
      results: results,
      items: items,
      state: store.getState()
    });
    (0,invariant/* .invariant */.V)(Array.isArray(items), function () {
      return "The `getItems` function from source \"".concat(source.sourceId, "\" must return an array of items but returned type ").concat(JSON.stringify(resolve_typeof(items)), ":\n\n").concat(JSON.stringify(decycle(items), null, 2), ".\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems");
    });
    (0,invariant/* .invariant */.V)(items.every(Boolean), "The `getItems` function from source \"".concat(source.sourceId, "\" must return an array of items but returned ").concat(JSON.stringify(undefined), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"));
    return {
      source: source,
      items: items
    };
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/utils/createConcurrentSafePromise.js
/**
 * Creates a runner that executes promises in a concurrent-safe way.
 *
 * This is useful to prevent older promises to resolve after a newer promise,
 * otherwise resulting in stale resolved values.
 */
function createConcurrentSafePromise() {
  var basePromiseId = -1;
  var latestResolvedId = -1;
  var latestResolvedValue = undefined;
  return function runConcurrentSafePromise(promise) {
    basePromiseId++;
    var currentPromiseId = basePromiseId;
    return Promise.resolve(promise).then(function (x) {
      // The promise might take too long to resolve and get outdated. This would
      // result in resolving stale values.
      // When this happens, we ignore the promise value and return the one
      // coming from the latest resolved value.
      //
      // +----------------------------------+
      // |        100ms                     |
      // | run(1) +--->  R1                 |
      // |        300ms                     |
      // | run(2) +-------------> R2 (SKIP) |
      // |        200ms                     |
      // | run(3) +--------> R3             |
      // +----------------------------------+
      if (latestResolvedValue && currentPromiseId < latestResolvedId) {
        return latestResolvedValue;
      }
      latestResolvedId = currentPromiseId;
      latestResolvedValue = x;
      return x;
    });
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromise.js
function createInternalCancelablePromise(promise, initialState) {
  var state = initialState;
  return {
    then: function then(onfulfilled, onrejected) {
      return createInternalCancelablePromise(promise.then(createCallback(onfulfilled, state, promise), createCallback(onrejected, state, promise)), state);
    },
    catch: function _catch(onrejected) {
      return createInternalCancelablePromise(promise.catch(createCallback(onrejected, state, promise)), state);
    },
    finally: function _finally(onfinally) {
      if (onfinally) {
        state.onCancelList.push(onfinally);
      }
      return createInternalCancelablePromise(promise.finally(createCallback(onfinally && function () {
        state.onCancelList = [];
        return onfinally();
      }, state, promise)), state);
    },
    cancel: function cancel() {
      state.isCanceled = true;
      var callbacks = state.onCancelList;
      state.onCancelList = [];
      callbacks.forEach(function (callback) {
        callback();
      });
    },
    isCanceled: function isCanceled() {
      return state.isCanceled === true;
    }
  };
}
function createCancelablePromise(executor) {
  return createInternalCancelablePromise(new Promise(function (resolve, reject) {
    return executor(resolve, reject);
  }), {
    isCanceled: false,
    onCancelList: []
  });
}
createCancelablePromise.resolve = function (value) {
  return cancelable(Promise.resolve(value));
};
createCancelablePromise.reject = function (reason) {
  return cancelable(Promise.reject(reason));
};
function cancelable(promise) {
  return createInternalCancelablePromise(promise, {
    isCanceled: false,
    onCancelList: []
  });
}
function createCallback(onResult, state, fallback) {
  if (!onResult) {
    return fallback;
  }
  return function callback(arg) {
    if (state.isCanceled) {
      return arg;
    }
    return onResult(arg);
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js
// We don't have access to the autocomplete source when we call `onKeyDown`
// or `onClick` because those are native browser events.
// However, we can get the source from the suggestion index.
function getCollectionFromActiveItemId(state) {
  // Given 3 sources with respectively 1, 2 and 3 suggestions: [1, 2, 3]
  // We want to get the accumulated counts:
  // [1, 1 + 2, 1 + 2 + 3] = [1, 3, 3 + 3] = [1, 3, 6]
  var accumulatedCollectionsCount = state.collections.map(function (collections) {
    return collections.items.length;
  }).reduce(function (acc, collectionsCount, index) {
    var previousValue = acc[index - 1] || 0;
    var nextValue = previousValue + collectionsCount;
    acc.push(nextValue);
    return acc;
  }, []);

  // Based on the accumulated counts, we can infer the index of the suggestion.
  var collectionIndex = accumulatedCollectionsCount.reduce(function (acc, current) {
    if (current <= state.activeItemId) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return state.collections[collectionIndex];
}

/**
 * Gets the highlighted index relative to a suggestion object (not the absolute
 * highlighted index).
 *
 * Example:
 *  [['a', 'b'], ['c', 'd', 'e'], ['f']]
 *                      ↑
 *         (absolute: 3, relative: 1)
 */
function getRelativeActiveItemId(_ref) {
  var state = _ref.state,
    collection = _ref.collection;
  var isOffsetFound = false;
  var counter = 0;
  var previousItemsOffset = 0;
  while (isOffsetFound === false) {
    var currentCollection = state.collections[counter];
    if (currentCollection === collection) {
      isOffsetFound = true;
      break;
    }
    previousItemsOffset += currentCollection.items.length;
    counter++;
  }
  return state.activeItemId - previousItemsOffset;
}
function getActiveItem(state) {
  var collection = getCollectionFromActiveItemId(state);
  if (!collection) {
    return null;
  }
  var item = collection.items[getRelativeActiveItemId({
    state: state,
    collection: collection
  })];
  var source = collection.source;
  var itemInputValue = source.getItemInputValue({
    item: item,
    state: state
  });
  var itemUrl = source.getItemUrl({
    item: item,
    state: state
  });
  return {
    item: item,
    itemInputValue: itemInputValue,
    itemUrl: itemUrl,
    source: source
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js
function onInput_typeof(obj) { "@babel/helpers - typeof"; return onInput_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, onInput_typeof(obj); }
var onInput_excluded = ["event", "nextState", "props", "query", "refresh", "store"];
function onInput_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function onInput_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? onInput_ownKeys(Object(source), !0).forEach(function (key) { onInput_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : onInput_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function onInput_defineProperty(obj, key, value) { key = onInput_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function onInput_toPropertyKey(arg) { var key = onInput_toPrimitive(arg, "string"); return onInput_typeof(key) === "symbol" ? key : String(key); }
function onInput_toPrimitive(input, hint) { if (onInput_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (onInput_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function onInput_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = onInput_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function onInput_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var lastStalledId = null;
var onInput_runConcurrentSafePromise = createConcurrentSafePromise();
function onInput(_ref) {
  var event = _ref.event,
    _ref$nextState = _ref.nextState,
    nextState = _ref$nextState === void 0 ? {} : _ref$nextState,
    props = _ref.props,
    query = _ref.query,
    refresh = _ref.refresh,
    store = _ref.store,
    setters = onInput_objectWithoutProperties(_ref, onInput_excluded);
  if (lastStalledId) {
    props.environment.clearTimeout(lastStalledId);
  }
  var setCollections = setters.setCollections,
    setIsOpen = setters.setIsOpen,
    setQuery = setters.setQuery,
    setActiveItemId = setters.setActiveItemId,
    setStatus = setters.setStatus,
    setContext = setters.setContext;
  setQuery(query);
  setActiveItemId(props.defaultActiveItemId);
  if (!query && props.openOnFocus === false) {
    var _nextState$isOpen;
    var collections = store.getState().collections.map(function (collection) {
      return onInput_objectSpread(onInput_objectSpread({}, collection), {}, {
        items: []
      });
    });
    setStatus('idle');
    setCollections(collections);
    setIsOpen((_nextState$isOpen = nextState.isOpen) !== null && _nextState$isOpen !== void 0 ? _nextState$isOpen : props.shouldPanelOpen({
      state: store.getState()
    }));

    // We make sure to update the latest resolved value of the tracked
    // promises to keep late resolving promises from "cancelling" the state
    // updates performed in this code path.
    // We chain with a void promise to respect `onInput`'s expected return type.
    var _request = cancelable(onInput_runConcurrentSafePromise(collections).then(function () {
      return Promise.resolve();
    }));
    return store.pendingRequests.add(_request);
  }
  setStatus('loading');
  lastStalledId = props.environment.setTimeout(function () {
    setStatus('stalled');
  }, props.stallThreshold);

  // We track the entire promise chain triggered by `onInput` before mutating
  // the Autocomplete state to make sure that any state manipulation is based on
  // fresh data regardless of when promises individually resolve.
  // We don't track nested promises and only rely on the full chain resolution,
  // meaning we should only ever manipulate the state once this concurrent-safe
  // promise is resolved.
  var request = cancelable(onInput_runConcurrentSafePromise(props.getSources(onInput_objectSpread({
    query: query,
    refresh: refresh,
    state: store.getState()
  }, setters)).then(function (sources) {
    return Promise.all(sources.map(function (source) {
      return Promise.resolve(source.getItems(onInput_objectSpread({
        query: query,
        refresh: refresh,
        state: store.getState()
      }, setters))).then(function (itemsOrDescription) {
        return preResolve(itemsOrDescription, source.sourceId, store.getState());
      });
    })).then(resolve_resolve).then(function (responses) {
      var __automaticInsights = responses.some(function (_ref2) {
        var items = _ref2.items;
        return isSearchResponseWithAutomaticInsightsFlag(items);
      });

      // No need to pollute the context if `__automaticInsights=false`
      if (__automaticInsights) {
        var _store$getState$conte;
        setContext({
          algoliaInsightsPlugin: onInput_objectSpread(onInput_objectSpread({}, ((_store$getState$conte = store.getState().context) === null || _store$getState$conte === void 0 ? void 0 : _store$getState$conte.algoliaInsightsPlugin) || {}), {}, {
            __automaticInsights: __automaticInsights
          })
        });
      }
      return postResolve(responses, sources, store);
    }).then(function (collections) {
      return reshape_reshape({
        collections: collections,
        props: props,
        state: store.getState()
      });
    });
  }))).then(function (collections) {
    var _nextState$isOpen2;
    // Parameters passed to `onInput` could be stale when the following code
    // executes, because `onInput` calls may not resolve in order.
    // If it becomes a problem we'll need to save the last passed parameters.
    // See: https://codesandbox.io/s/agitated-cookies-y290z

    setStatus('idle');
    setCollections(collections);
    var isPanelOpen = props.shouldPanelOpen({
      state: store.getState()
    });
    setIsOpen((_nextState$isOpen2 = nextState.isOpen) !== null && _nextState$isOpen2 !== void 0 ? _nextState$isOpen2 : props.openOnFocus && !query && isPanelOpen || isPanelOpen);
    var highlightedItem = getActiveItem(store.getState());
    if (store.getState().activeItemId !== null && highlightedItem) {
      var item = highlightedItem.item,
        itemInputValue = highlightedItem.itemInputValue,
        itemUrl = highlightedItem.itemUrl,
        source = highlightedItem.source;
      source.onActive(onInput_objectSpread({
        event: event,
        item: item,
        itemInputValue: itemInputValue,
        itemUrl: itemUrl,
        refresh: refresh,
        source: source,
        state: store.getState()
      }, setters));
    }
  }).finally(function () {
    setStatus('idle');
    if (lastStalledId) {
      props.environment.clearTimeout(lastStalledId);
    }
  });
  return store.pendingRequests.add(request);
}
function isSearchResponseWithAutomaticInsightsFlag(items) {
  return !Array.isArray(items) && Boolean(items === null || items === void 0 ? void 0 : items._automaticInsights);
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/utils/getAutocompleteElementId.js
/**
 * Returns a full element id for an autocomplete element.
 *
 * @param autocompleteInstanceId The id of the autocomplete instance
 * @param elementId The specific element id
 * @param source The source of the element, when it needs to be scoped
 */
function getAutocompleteElementId(autocompleteInstanceId, elementId, source) {
  return [autocompleteInstanceId, source === null || source === void 0 ? void 0 : source.sourceId, elementId].filter(Boolean).join('-').replace(/\s/g, '');
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/onKeyDown.js
function onKeyDown_typeof(obj) { "@babel/helpers - typeof"; return onKeyDown_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, onKeyDown_typeof(obj); }
var onKeyDown_excluded = ["event", "props", "refresh", "store"];
function onKeyDown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function onKeyDown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? onKeyDown_ownKeys(Object(source), !0).forEach(function (key) { onKeyDown_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : onKeyDown_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function onKeyDown_defineProperty(obj, key, value) { key = onKeyDown_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function onKeyDown_toPropertyKey(arg) { var key = onKeyDown_toPrimitive(arg, "string"); return onKeyDown_typeof(key) === "symbol" ? key : String(key); }
function onKeyDown_toPrimitive(input, hint) { if (onKeyDown_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (onKeyDown_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function onKeyDown_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = onKeyDown_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function onKeyDown_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function onKeyDown_onKeyDown(_ref) {
  var event = _ref.event,
    props = _ref.props,
    refresh = _ref.refresh,
    store = _ref.store,
    setters = onKeyDown_objectWithoutProperties(_ref, onKeyDown_excluded);
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    // eslint-disable-next-line no-inner-declarations
    var triggerScrollIntoView = function triggerScrollIntoView() {
      var highlightedItem = getActiveItem(store.getState());
      var nodeItem = props.environment.document.getElementById(getAutocompleteElementId(props.id, "item-".concat(store.getState().activeItemId), highlightedItem === null || highlightedItem === void 0 ? void 0 : highlightedItem.source));
      if (nodeItem) {
        if (nodeItem.scrollIntoViewIfNeeded) {
          nodeItem.scrollIntoViewIfNeeded(false);
        } else {
          nodeItem.scrollIntoView(false);
        }
      }
    }; // eslint-disable-next-line no-inner-declarations
    var triggerOnActive = function triggerOnActive() {
      var highlightedItem = getActiveItem(store.getState());
      if (store.getState().activeItemId !== null && highlightedItem) {
        var item = highlightedItem.item,
          itemInputValue = highlightedItem.itemInputValue,
          itemUrl = highlightedItem.itemUrl,
          source = highlightedItem.source;
        source.onActive(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
      }
    }; // Default browser behavior changes the caret placement on ArrowUp and
    // ArrowDown.
    event.preventDefault();

    // When re-opening the panel, we need to split the logic to keep the actions
    // synchronized as `onInput` returns a promise.
    if (store.getState().isOpen === false && (props.openOnFocus || Boolean(store.getState().query))) {
      onInput(onKeyDown_objectSpread({
        event: event,
        props: props,
        query: store.getState().query,
        refresh: refresh,
        store: store
      }, setters)).then(function () {
        store.dispatch(event.key, {
          nextActiveItemId: props.defaultActiveItemId
        });
        triggerOnActive();
        // Since we rely on the DOM, we need to wait for all the micro tasks to
        // finish (which include re-opening the panel) to make sure all the
        // elements are available.
        setTimeout(triggerScrollIntoView, 0);
      });
    } else {
      store.dispatch(event.key, {});
      triggerOnActive();
      triggerScrollIntoView();
    }
  } else if (event.key === 'Escape') {
    // This prevents the default browser behavior on `input[type="search"]`
    // from removing the query right away because we first want to close the
    // panel.
    event.preventDefault();
    store.dispatch(event.key, null);

    // Hitting the `Escape` key signals the end of a user interaction with the
    // autocomplete. At this point, we should ignore any requests that are still
    // pending and could reopen the panel once they resolve, because that would
    // result in an unsolicited UI behavior.
    store.pendingRequests.cancelAll();
  } else if (event.key === 'Tab') {
    store.dispatch('blur', null);

    // Hitting the `Tab` key signals the end of a user interaction with the
    // autocomplete. At this point, we should ignore any requests that are still
    // pending and could reopen the panel once they resolve, because that would
    // result in an unsolicited UI behavior.
    store.pendingRequests.cancelAll();
  } else if (event.key === 'Enter') {
    // No active item, so we let the browser handle the native `onSubmit` form
    // event.
    if (store.getState().activeItemId === null || store.getState().collections.every(function (collection) {
      return collection.items.length === 0;
    })) {
      // If requests are still pending when the panel closes, they could reopen
      // the panel once they resolve.
      // We want to prevent any subsequent query from reopening the panel
      // because it would result in an unsolicited UI behavior.
      if (!props.debug) {
        store.pendingRequests.cancelAll();
      }
      return;
    }

    // This prevents the `onSubmit` event to be sent because an item is
    // highlighted.
    event.preventDefault();
    var _ref2 = getActiveItem(store.getState()),
      item = _ref2.item,
      itemInputValue = _ref2.itemInputValue,
      itemUrl = _ref2.itemUrl,
      source = _ref2.source;
    if (event.metaKey || event.ctrlKey) {
      if (itemUrl !== undefined) {
        source.onSelect(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigateNewTab({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
      }
    } else if (event.shiftKey) {
      if (itemUrl !== undefined) {
        source.onSelect(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigateNewWindow({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
      }
    } else if (event.altKey) {
      // Keep native browser behavior
    } else {
      if (itemUrl !== undefined) {
        source.onSelect(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigate({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
        return;
      }
      onInput(onKeyDown_objectSpread({
        event: event,
        nextState: {
          isOpen: false
        },
        props: props,
        query: itemInputValue,
        refresh: refresh,
        store: store
      }, setters)).then(function () {
        source.onSelect(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
      });
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/utils/isOrContainsNode.js
function isOrContainsNode(parent, child) {
  return parent === child || parent.contains(child);
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/utils/isSamsung.js
var regex = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
function isSamsung(userAgent) {
  return Boolean(userAgent && userAgent.match(regex));
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNativeEvent.js
function getNativeEvent(event) {
  return event.nativeEvent || event;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/getPropGetters.js
function getPropGetters_typeof(obj) { "@babel/helpers - typeof"; return getPropGetters_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, getPropGetters_typeof(obj); }
var getPropGetters_excluded = ["props", "refresh", "store"],
  getPropGetters_excluded2 = ["inputElement", "formElement", "panelElement"],
  _excluded3 = ["inputElement"],
  _excluded4 = ["inputElement", "maxLength"],
  _excluded5 = ["source"],
  _excluded6 = ["item", "source"];
function getPropGetters_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function getPropGetters_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getPropGetters_ownKeys(Object(source), !0).forEach(function (key) { getPropGetters_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getPropGetters_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function getPropGetters_defineProperty(obj, key, value) { key = getPropGetters_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function getPropGetters_toPropertyKey(arg) { var key = getPropGetters_toPrimitive(arg, "string"); return getPropGetters_typeof(key) === "symbol" ? key : String(key); }
function getPropGetters_toPrimitive(input, hint) { if (getPropGetters_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (getPropGetters_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function getPropGetters_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = getPropGetters_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function getPropGetters_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function getPropGetters(_ref) {
  var props = _ref.props,
    refresh = _ref.refresh,
    store = _ref.store,
    setters = getPropGetters_objectWithoutProperties(_ref, getPropGetters_excluded);
  var getEnvironmentProps = function getEnvironmentProps(providedProps) {
    var inputElement = providedProps.inputElement,
      formElement = providedProps.formElement,
      panelElement = providedProps.panelElement,
      rest = getPropGetters_objectWithoutProperties(providedProps, getPropGetters_excluded2);
    function onMouseDownOrTouchStart(event) {
      // The `onTouchStart`/`onMouseDown` events shouldn't trigger the `blur`
      // handler when it's not an interaction with Autocomplete.
      // We detect it with the following heuristics:
      // - the panel is closed AND there are no pending requests
      //   (no interaction with the autocomplete, no future state updates)
      // - OR the touched target is the input element (should open the panel)
      var isAutocompleteInteraction = store.getState().isOpen || !store.pendingRequests.isEmpty();
      if (!isAutocompleteInteraction || event.target === inputElement) {
        return;
      }

      // @TODO: support cases where there are multiple Autocomplete instances.
      // Right now, a second instance makes this computation return false.
      var isTargetWithinAutocomplete = [formElement, panelElement].some(function (contextNode) {
        return isOrContainsNode(contextNode, event.target);
      });
      if (isTargetWithinAutocomplete === false) {
        store.dispatch('blur', null);

        // If requests are still pending when the user closes the panel, they
        // could reopen the panel once they resolve.
        // We want to prevent any subsequent query from reopening the panel
        // because it would result in an unsolicited UI behavior.
        if (!props.debug) {
          store.pendingRequests.cancelAll();
        }
      }
    }
    return getPropGetters_objectSpread({
      // We do not rely on the native `blur` event of the input to close the
      // panel, but rather on a custom `touchstart`/`mousedown` event outside
      // of the autocomplete elements.
      // This ensures we don't mistakenly interpret interactions within the
      // autocomplete (but outside of the input) as a signal to close the panel.
      // For example, clicking reset button causes an input blur, but if
      // `openOnFocus=true`, it shouldn't close the panel.
      // On touch devices, scrolling results (`touchmove`) causes an input blur
      // but shouldn't close the panel.
      onTouchStart: onMouseDownOrTouchStart,
      onMouseDown: onMouseDownOrTouchStart,
      // When scrolling on touch devices (mobiles, tablets, etc.), we want to
      // mimic the native platform behavior where the input is blurred to
      // hide the virtual keyboard. This gives more vertical space to
      // discover all the suggestions showing up in the panel.
      onTouchMove: function onTouchMove(event) {
        if (store.getState().isOpen === false || inputElement !== props.environment.document.activeElement || event.target === inputElement) {
          return;
        }
        inputElement.blur();
      }
    }, rest);
  };
  var getRootProps = function getRootProps(rest) {
    return getPropGetters_objectSpread({
      role: 'combobox',
      'aria-expanded': store.getState().isOpen,
      'aria-haspopup': 'listbox',
      'aria-controls': store.getState().isOpen ? store.getState().collections.map(function (_ref2) {
        var source = _ref2.source;
        return getAutocompleteElementId(props.id, 'list', source);
      }).join(' ') : undefined,
      'aria-labelledby': getAutocompleteElementId(props.id, 'label')
    }, rest);
  };
  var getFormProps = function getFormProps(providedProps) {
    var inputElement = providedProps.inputElement,
      rest = getPropGetters_objectWithoutProperties(providedProps, _excluded3);
    return getPropGetters_objectSpread({
      action: '',
      noValidate: true,
      role: 'search',
      onSubmit: function onSubmit(event) {
        var _providedProps$inputE;
        event.preventDefault();
        props.onSubmit(getPropGetters_objectSpread({
          event: event,
          refresh: refresh,
          state: store.getState()
        }, setters));
        store.dispatch('submit', null);
        (_providedProps$inputE = providedProps.inputElement) === null || _providedProps$inputE === void 0 ? void 0 : _providedProps$inputE.blur();
      },
      onReset: function onReset(event) {
        var _providedProps$inputE2;
        event.preventDefault();
        props.onReset(getPropGetters_objectSpread({
          event: event,
          refresh: refresh,
          state: store.getState()
        }, setters));
        store.dispatch('reset', null);
        (_providedProps$inputE2 = providedProps.inputElement) === null || _providedProps$inputE2 === void 0 ? void 0 : _providedProps$inputE2.focus();
      }
    }, rest);
  };
  var getInputProps = function getInputProps(providedProps) {
    var _props$environment$na;
    function onFocus(event) {
      // We want to trigger a query when `openOnFocus` is true
      // because the panel should open with the current query.
      if (props.openOnFocus || Boolean(store.getState().query)) {
        onInput(getPropGetters_objectSpread({
          event: event,
          props: props,
          query: store.getState().completion || store.getState().query,
          refresh: refresh,
          store: store
        }, setters));
      }
      store.dispatch('focus', null);
    }
    var _ref3 = providedProps || {},
      inputElement = _ref3.inputElement,
      _ref3$maxLength = _ref3.maxLength,
      maxLength = _ref3$maxLength === void 0 ? 512 : _ref3$maxLength,
      rest = getPropGetters_objectWithoutProperties(_ref3, _excluded4);
    var activeItem = getActiveItem(store.getState());
    var userAgent = ((_props$environment$na = props.environment.navigator) === null || _props$environment$na === void 0 ? void 0 : _props$environment$na.userAgent) || '';
    var shouldFallbackKeyHint = isSamsung(userAgent);
    var enterKeyHint = props.enterKeyHint || (activeItem !== null && activeItem !== void 0 && activeItem.itemUrl && !shouldFallbackKeyHint ? 'go' : 'search');
    return getPropGetters_objectSpread({
      'aria-autocomplete': 'both',
      'aria-activedescendant': store.getState().isOpen && store.getState().activeItemId !== null ? getAutocompleteElementId(props.id, "item-".concat(store.getState().activeItemId), activeItem === null || activeItem === void 0 ? void 0 : activeItem.source) : undefined,
      'aria-controls': store.getState().isOpen ? store.getState().collections.filter(function (collection) {
        return collection.items.length > 0;
      }).map(function (_ref4) {
        var source = _ref4.source;
        return getAutocompleteElementId(props.id, 'list', source);
      }).join(' ') : undefined,
      'aria-labelledby': getAutocompleteElementId(props.id, 'label'),
      value: store.getState().completion || store.getState().query,
      id: getAutocompleteElementId(props.id, 'input'),
      autoComplete: 'off',
      autoCorrect: 'off',
      autoCapitalize: 'off',
      enterKeyHint: enterKeyHint,
      spellCheck: 'false',
      autoFocus: props.autoFocus,
      placeholder: props.placeholder,
      maxLength: maxLength,
      type: 'search',
      onChange: function onChange(event) {
        var value = event.currentTarget.value;
        if (props.ignoreCompositionEvents && getNativeEvent(event).isComposing) {
          setters.setQuery(value);
          return;
        }
        onInput(getPropGetters_objectSpread({
          event: event,
          props: props,
          query: value.slice(0, maxLength),
          refresh: refresh,
          store: store
        }, setters));
      },
      onCompositionEnd: function onCompositionEnd(event) {
        onInput(getPropGetters_objectSpread({
          event: event,
          props: props,
          query: event.currentTarget.value.slice(0, maxLength),
          refresh: refresh,
          store: store
        }, setters));
      },
      onKeyDown: function onKeyDown(event) {
        if (getNativeEvent(event).isComposing) {
          return;
        }
        onKeyDown_onKeyDown(getPropGetters_objectSpread({
          event: event,
          props: props,
          refresh: refresh,
          store: store
        }, setters));
      },
      onFocus: onFocus,
      // We don't rely on the `blur` event.
      // See explanation in `onTouchStart`/`onMouseDown`.
      // @MAJOR See if we need to keep this handler.
      onBlur: noop_noop,
      onClick: function onClick(event) {
        // When the panel is closed and you click on the input while
        // the input is focused, the `onFocus` event is not triggered
        // (default browser behavior).
        // In an autocomplete context, it makes sense to open the panel in this
        // case.
        // We mimic this event by catching the `onClick` event which
        // triggers the `onFocus` for the panel to open.
        if (providedProps.inputElement === props.environment.document.activeElement && !store.getState().isOpen) {
          onFocus(event);
        }
      }
    }, rest);
  };
  var getLabelProps = function getLabelProps(rest) {
    return getPropGetters_objectSpread({
      htmlFor: getAutocompleteElementId(props.id, 'input'),
      id: getAutocompleteElementId(props.id, 'label')
    }, rest);
  };
  var getListProps = function getListProps(providedProps) {
    var _ref5 = providedProps || {},
      source = _ref5.source,
      rest = getPropGetters_objectWithoutProperties(_ref5, _excluded5);
    return getPropGetters_objectSpread({
      role: 'listbox',
      'aria-labelledby': getAutocompleteElementId(props.id, 'label'),
      id: getAutocompleteElementId(props.id, 'list', source)
    }, rest);
  };
  var getPanelProps = function getPanelProps(rest) {
    return getPropGetters_objectSpread({
      onMouseDown: function onMouseDown(event) {
        // Prevents the `activeElement` from being changed to the panel so
        // that the blur event is not triggered, otherwise it closes the
        // panel.
        event.preventDefault();
      },
      onMouseLeave: function onMouseLeave() {
        store.dispatch('mouseleave', null);
      }
    }, rest);
  };
  var getItemProps = function getItemProps(providedProps) {
    var item = providedProps.item,
      source = providedProps.source,
      rest = getPropGetters_objectWithoutProperties(providedProps, _excluded6);
    return getPropGetters_objectSpread({
      id: getAutocompleteElementId(props.id, "item-".concat(item.__autocomplete_id), source),
      role: 'option',
      'aria-selected': store.getState().activeItemId === item.__autocomplete_id,
      onMouseMove: function onMouseMove(event) {
        if (item.__autocomplete_id === store.getState().activeItemId) {
          return;
        }
        store.dispatch('mousemove', item.__autocomplete_id);
        var activeItem = getActiveItem(store.getState());
        if (store.getState().activeItemId !== null && activeItem) {
          var _item = activeItem.item,
            itemInputValue = activeItem.itemInputValue,
            itemUrl = activeItem.itemUrl,
            _source = activeItem.source;
          _source.onActive(getPropGetters_objectSpread({
            event: event,
            item: _item,
            itemInputValue: itemInputValue,
            itemUrl: itemUrl,
            refresh: refresh,
            source: _source,
            state: store.getState()
          }, setters));
        }
      },
      onMouseDown: function onMouseDown(event) {
        // Prevents the `activeElement` from being changed to the item so it
        // can remain with the current `activeElement`.
        event.preventDefault();
      },
      onClick: function onClick(event) {
        var itemInputValue = source.getItemInputValue({
          item: item,
          state: store.getState()
        });
        var itemUrl = source.getItemUrl({
          item: item,
          state: store.getState()
        });

        // If `getItemUrl` is provided, it means that the suggestion
        // is a link, not plain text that aims at updating the query.
        // We can therefore skip the state change because it will update
        // the `activeItemId`, resulting in a UI flash, especially
        // noticeable on mobile.
        var runPreCommand = itemUrl ? Promise.resolve() : onInput(getPropGetters_objectSpread({
          event: event,
          nextState: {
            isOpen: false
          },
          props: props,
          query: itemInputValue,
          refresh: refresh,
          store: store
        }, setters));
        runPreCommand.then(function () {
          source.onSelect(getPropGetters_objectSpread({
            event: event,
            item: item,
            itemInputValue: itemInputValue,
            itemUrl: itemUrl,
            refresh: refresh,
            source: source,
            state: store.getState()
          }, setters));
        });
      }
    }, rest);
  };
  return {
    getEnvironmentProps: getEnvironmentProps,
    getRootProps: getRootProps,
    getFormProps: getFormProps,
    getLabelProps: getLabelProps,
    getInputProps: getInputProps,
    getPanelProps: getPanelProps,
    getListProps: getListProps,
    getItemProps: getItemProps
  };
}
// EXTERNAL MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js
var userAgents = __webpack_require__(58951);
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/metadata.js
function metadata_typeof(obj) { "@babel/helpers - typeof"; return metadata_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, metadata_typeof(obj); }
function metadata_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function metadata_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? metadata_ownKeys(Object(source), !0).forEach(function (key) { metadata_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : metadata_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function metadata_defineProperty(obj, key, value) { key = metadata_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function metadata_toPropertyKey(arg) { var key = metadata_toPrimitive(arg, "string"); return metadata_typeof(key) === "symbol" ? key : String(key); }
function metadata_toPrimitive(input, hint) { if (metadata_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (metadata_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function getMetadata(_ref) {
  var _, _options$__autocomple, _options$__autocomple2, _options$__autocomple3;
  var plugins = _ref.plugins,
    options = _ref.options;
  var optionsKey = (_ = (((_options$__autocomple = options.__autocomplete_metadata) === null || _options$__autocomple === void 0 ? void 0 : _options$__autocomple.userAgents) || [])[0]) === null || _ === void 0 ? void 0 : _.segment;
  var extraOptions = optionsKey ? metadata_defineProperty({}, optionsKey, Object.keys(((_options$__autocomple2 = options.__autocomplete_metadata) === null || _options$__autocomple2 === void 0 ? void 0 : _options$__autocomple2.options) || {})) : {};
  return {
    plugins: plugins.map(function (plugin) {
      return {
        name: plugin.name,
        options: Object.keys(plugin.__autocomplete_pluginOptions || [])
      };
    }),
    options: metadata_objectSpread({
      'autocomplete-core': Object.keys(options)
    }, extraOptions),
    ua: userAgents/* .userAgents.concat */.e.concat(((_options$__autocomple3 = options.__autocomplete_metadata) === null || _options$__autocomple3 === void 0 ? void 0 : _options$__autocomple3.userAgents) || [])
  };
}
function injectMetadata(_ref3) {
  var _environment$navigato, _environment$navigato2;
  var metadata = _ref3.metadata,
    environment = _ref3.environment;
  var isMetadataEnabled = (_environment$navigato = environment.navigator) === null || _environment$navigato === void 0 ? void 0 : (_environment$navigato2 = _environment$navigato.userAgent) === null || _environment$navigato2 === void 0 ? void 0 : _environment$navigato2.includes('Algolia Crawler');
  if (isMetadataEnabled) {
    var metadataContainer = environment.document.createElement('meta');
    var headRef = environment.document.querySelector('head');
    metadataContainer.name = 'algolia:metadata';
    setTimeout(function () {
      metadataContainer.content = JSON.stringify(metadata);
      headRef.appendChild(metadataContainer);
    }, 0);
  }
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/getCompletion.js

function getCompletion(_ref) {
  var _getActiveItem;
  var state = _ref.state;
  if (state.isOpen === false || state.activeItemId === null) {
    return null;
  }
  return ((_getActiveItem = getActiveItem(state)) === null || _getActiveItem === void 0 ? void 0 : _getActiveItem.itemInputValue) || null;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNextActiveItemId.js
/**
 * Returns the next active item ID from the current state.
 *
 * We allow circular keyboard navigation from the base index.
 * The base index can either be `null` (nothing is highlighted) or `0`
 * (the first item is highlighted).
 * The base index is allowed to get assigned `null` only if
 * `props.defaultActiveItemId` is `null`. This pattern allows to "stop"
 * by the actual query before navigating to other suggestions as seen on
 * Google or Amazon.
 *
 * @param moveAmount The offset to increment (or decrement) the last index
 * @param baseIndex The current index to compute the next index from
 * @param itemCount The number of items
 * @param defaultActiveItemId The default active index to fallback to
 */
function getNextActiveItemId(moveAmount, baseIndex, itemCount, defaultActiveItemId) {
  if (!itemCount) {
    return null;
  }
  if (moveAmount < 0 && (baseIndex === null || defaultActiveItemId !== null && baseIndex === 0)) {
    return itemCount + moveAmount;
  }
  var numericIndex = (baseIndex === null ? -1 : baseIndex) + moveAmount;
  if (numericIndex <= -1 || numericIndex >= itemCount) {
    return defaultActiveItemId === null ? null : 0;
  }
  return numericIndex;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/stateReducer.js
function stateReducer_typeof(obj) { "@babel/helpers - typeof"; return stateReducer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, stateReducer_typeof(obj); }
function stateReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function stateReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? stateReducer_ownKeys(Object(source), !0).forEach(function (key) { stateReducer_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : stateReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function stateReducer_defineProperty(obj, key, value) { key = stateReducer_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function stateReducer_toPropertyKey(arg) { var key = stateReducer_toPrimitive(arg, "string"); return stateReducer_typeof(key) === "symbol" ? key : String(key); }
function stateReducer_toPrimitive(input, hint) { if (stateReducer_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (stateReducer_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var stateReducer_stateReducer = function stateReducer(state, action) {
  switch (action.type) {
    case 'setActiveItemId':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.payload
        });
      }
    case 'setQuery':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          query: action.payload,
          completion: null
        });
      }
    case 'setCollections':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          collections: action.payload
        });
      }
    case 'setIsOpen':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          isOpen: action.payload
        });
      }
    case 'setStatus':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          status: action.payload
        });
      }
    case 'setContext':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          context: stateReducer_objectSpread(stateReducer_objectSpread({}, state.context), action.payload)
        });
      }
    case 'ArrowDown':
      {
        var nextState = stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.payload.hasOwnProperty('nextActiveItemId') ? action.payload.nextActiveItemId : getNextActiveItemId(1, state.activeItemId, getItemsCount(state), action.props.defaultActiveItemId)
        });
        return stateReducer_objectSpread(stateReducer_objectSpread({}, nextState), {}, {
          completion: getCompletion({
            state: nextState
          })
        });
      }
    case 'ArrowUp':
      {
        var _nextState = stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: getNextActiveItemId(-1, state.activeItemId, getItemsCount(state), action.props.defaultActiveItemId)
        });
        return stateReducer_objectSpread(stateReducer_objectSpread({}, _nextState), {}, {
          completion: getCompletion({
            state: _nextState
          })
        });
      }
    case 'Escape':
      {
        if (state.isOpen) {
          return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
            activeItemId: null,
            isOpen: false,
            completion: null
          });
        }
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: null,
          query: '',
          status: 'idle',
          collections: []
        });
      }
    case 'submit':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: null,
          isOpen: false,
          status: 'idle'
        });
      }
    case 'reset':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId:
          // Since we open the panel on reset when openOnFocus=true
          // we need to restore the highlighted index to the defaultActiveItemId. (DocSearch use-case)

          // Since we close the panel when openOnFocus=false
          // we lose track of the highlighted index. (Query-suggestions use-case)
          action.props.openOnFocus === true ? action.props.defaultActiveItemId : null,
          status: 'idle',
          completion: null,
          query: ''
        });
      }
    case 'focus':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.props.defaultActiveItemId,
          isOpen: (action.props.openOnFocus || Boolean(state.query)) && action.props.shouldPanelOpen({
            state: state
          })
        });
      }
    case 'blur':
      {
        if (action.props.debug) {
          return state;
        }
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          isOpen: false,
          activeItemId: null
        });
      }
    case 'mousemove':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.payload
        });
      }
    case 'mouseleave':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.props.defaultActiveItemId
        });
      }
    default:
      (0,invariant/* .invariant */.V)(false, "The reducer action ".concat(JSON.stringify(action.type), " is not supported."));
      return state;
  }
};
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-core/dist/esm/createAutocomplete.js
function createAutocomplete_typeof(obj) { "@babel/helpers - typeof"; return createAutocomplete_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, createAutocomplete_typeof(obj); }
function createAutocomplete_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function createAutocomplete_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? createAutocomplete_ownKeys(Object(source), !0).forEach(function (key) { createAutocomplete_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : createAutocomplete_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createAutocomplete_defineProperty(obj, key, value) { key = createAutocomplete_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function createAutocomplete_toPropertyKey(arg) { var key = createAutocomplete_toPrimitive(arg, "string"); return createAutocomplete_typeof(key) === "symbol" ? key : String(key); }
function createAutocomplete_toPrimitive(input, hint) { if (createAutocomplete_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (createAutocomplete_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









function createAutocomplete(options) {
  checkOptions(options);
  var subscribers = [];
  var props = getDefaultProps(options, subscribers);
  var store = createStore(stateReducer_stateReducer, props, onStoreStateChange);
  var setters = getAutocompleteSetters({
    store: store
  });
  var propGetters = getPropGetters(createAutocomplete_objectSpread({
    props: props,
    refresh: refresh,
    store: store,
    navigator: props.navigator
  }, setters));
  function onStoreStateChange(_ref) {
    var _state$context, _state$context$algoli;
    var prevState = _ref.prevState,
      state = _ref.state;
    props.onStateChange(createAutocomplete_objectSpread({
      prevState: prevState,
      state: state,
      refresh: refresh,
      navigator: props.navigator
    }, setters));
    if (!isAlgoliaInsightsPluginEnabled() && (_state$context = state.context) !== null && _state$context !== void 0 && (_state$context$algoli = _state$context.algoliaInsightsPlugin) !== null && _state$context$algoli !== void 0 && _state$context$algoli.__automaticInsights && props.insights !== false) {
      var plugin = createAlgoliaInsightsPlugin({
        __autocomplete_clickAnalytics: false
      });
      props.plugins.push(plugin);
      subscribePlugins([plugin]);
    }
  }
  function refresh() {
    return onInput(createAutocomplete_objectSpread({
      event: new Event('input'),
      nextState: {
        isOpen: store.getState().isOpen
      },
      props: props,
      navigator: props.navigator,
      query: store.getState().query,
      refresh: refresh,
      store: store
    }, setters));
  }
  function subscribePlugins(plugins) {
    plugins.forEach(function (plugin) {
      var _plugin$subscribe;
      return (_plugin$subscribe = plugin.subscribe) === null || _plugin$subscribe === void 0 ? void 0 : _plugin$subscribe.call(plugin, createAutocomplete_objectSpread(createAutocomplete_objectSpread({}, setters), {}, {
        navigator: props.navigator,
        refresh: refresh,
        onSelect: function onSelect(fn) {
          subscribers.push({
            onSelect: fn
          });
        },
        onActive: function onActive(fn) {
          subscribers.push({
            onActive: fn
          });
        },
        onResolve: function onResolve(fn) {
          subscribers.push({
            onResolve: fn
          });
        }
      }));
    });
  }
  function isAlgoliaInsightsPluginEnabled() {
    return props.plugins.some(function (plugin) {
      return plugin.name === 'aa.algoliaInsightsPlugin';
    });
  }
  if (props.insights && !isAlgoliaInsightsPluginEnabled()) {
    var insightsParams = typeof props.insights === 'boolean' ? {} : props.insights;
    props.plugins.push(createAlgoliaInsightsPlugin(insightsParams));
  }
  subscribePlugins(props.plugins);
  injectMetadata({
    metadata: getMetadata({
      plugins: props.plugins,
      options: options
    }),
    environment: props.environment
  });
  return createAutocomplete_objectSpread(createAutocomplete_objectSpread({
    refresh: refresh,
    navigator: props.navigator
  }, propGetters), setters);
}
;// CONCATENATED MODULE: ./node_modules/htm/dist/htm.module.js
var htm_module_n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,htm_module_n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a)}return e},htm_module_t=new Map;/* ESM default export */ function htm_module(s){var r=htm_module_t.get(this);return r||(r=new Map,htm_module_t.set(this,r)),(r=htm_module_n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e=""},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0])}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/elements/SearchIcon.js
var SearchIcon_SearchIcon = function SearchIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-SubmitIcon');
  element.setAttribute('viewBox', '0 0 24 24');
  element.setAttribute('width', '20');
  element.setAttribute('height', '20');
  element.setAttribute('fill', 'currentColor');
  var path = environment.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z');
  element.appendChild(path);
  return element;
};
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/elements/ClearIcon.js
var ClearIcon_ClearIcon = function ClearIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-ClearIcon');
  element.setAttribute('viewBox', '0 0 24 24');
  element.setAttribute('width', '18');
  element.setAttribute('height', '18');
  element.setAttribute('fill', 'currentColor');
  var path = environment.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z');
  element.appendChild(path);
  return element;
};
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/elements/LoadingIcon.js
var LoadingIcon_LoadingIcon = function LoadingIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-LoadingIcon');
  element.setAttribute('viewBox', '0 0 100 100');
  element.setAttribute('width', '20');
  element.setAttribute('height', '20');
  element.innerHTML = "<circle\n  cx=\"50\"\n  cy=\"50\"\n  fill=\"none\"\n  r=\"35\"\n  stroke=\"currentColor\"\n  stroke-dasharray=\"164.93361431346415 56.97787143782138\"\n  stroke-width=\"6\"\n>\n  <animateTransform\n    attributeName=\"transform\"\n    type=\"rotate\"\n    repeatCount=\"indefinite\"\n    dur=\"1s\"\n    values=\"0 50 50;90 50 50;180 50 50;360 50 50\"\n    keyTimes=\"0;0.40;0.65;1\"\n  />\n</circle>";
  return element;
};
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/utils/setProperties.js
/* eslint-disable */

/**
 * Touch-specific event aliases
 *
 * See https://w3c.github.io/touch-events/#extensions-to-the-globaleventhandlers-mixin
 */
var TOUCH_EVENTS_ALIASES = ['ontouchstart', 'ontouchend', 'ontouchmove', 'ontouchcancel'];

/*
 * Taken from Preact
 *
 * See https://github.com/preactjs/preact/blob/6ab49d9020740127577bf4af66bf63f4af7f9fee/src/diff/props.js#L58-L151
 */

function setStyle(style, key, value) {
  if (value === null) {
    style[key] = '';
  } else if (typeof value !== 'number') {
    style[key] = value;
  } else {
    style[key] = value + 'px';
  }
}

/**
 * Proxy an event to hooked event handlers
 */
function eventProxy(event) {
  this._listeners[event.type](event);
}

/**
 * Set a property value on a DOM node
 */
function setProperty(dom, name, value) {
  var useCapture;
  var nameLower;
  var oldValue = dom[name];
  if (name === 'style') {
    if (typeof value == 'string') {
      dom.style = value;
    } else {
      if (value === null) {
        dom.style = '';
      } else {
        for (name in value) {
          if (!oldValue || value[name] !== oldValue[name]) {
            setStyle(dom.style, name, value[name]);
          }
        }
      }
    }
  }
  // Benchmark for comparison: https://esbench.com/bench/574c954bdb965b9a00965ac6
  else if (name[0] === 'o' && name[1] === 'n') {
    useCapture = name !== (name = name.replace(/Capture$/, ''));
    nameLower = name.toLowerCase();
    if (nameLower in dom || TOUCH_EVENTS_ALIASES.includes(nameLower)) name = nameLower;
    name = name.slice(2);
    if (!dom._listeners) dom._listeners = {};
    dom._listeners[name] = value;
    if (value) {
      if (!oldValue) dom.addEventListener(name, eventProxy, useCapture);
    } else {
      dom.removeEventListener(name, eventProxy, useCapture);
    }
  } else if (name !== 'list' && name !== 'tagName' &&
  // HTMLButtonElement.form and HTMLInputElement.form are read-only but can be set using
  // setAttribute
  name !== 'form' && name !== 'type' && name !== 'size' && name !== 'download' && name !== 'href' && name in dom) {
    dom[name] = value == null ? '' : value;
  } else if (typeof value != 'function' && name !== 'dangerouslySetInnerHTML') {
    if (value == null || value === false &&
    // ARIA-attributes have a different notion of boolean values.
    // The value `false` is different from the attribute not
    // existing on the DOM, so we can't remove it. For non-boolean
    // ARIA-attributes we could treat false as a removal, but the
    // amount of exceptions would cost us too many bytes. On top of
    // that other VDOM frameworks also always stringify `false`.
    !/^ar/.test(name)) {
      dom.removeAttribute(name);
    } else {
      dom.setAttribute(name, value);
    }
  }
}
function getNormalizedName(name) {
  switch (name) {
    case 'onChange':
      return 'onInput';
    // see: https://github.com/preactjs/preact/issues/1978
    case 'onCompositionEnd':
      return 'oncompositionend';
    default:
      return name;
  }
}
function setProperties(dom, props) {
  for (var name in props) {
    setProperty(dom, getNormalizedName(name), props[name]);
  }
}
function setPropertiesWithoutEvents(dom, props) {
  for (var name in props) {
    if (!(name[0] === 'o' && name[1] === 'n')) {
      setProperty(dom, getNormalizedName(name), props[name]);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/getCreateDomElement.js
var getCreateDomElement_excluded = ["children"];
function getCreateDomElement_toConsumableArray(arr) { return getCreateDomElement_arrayWithoutHoles(arr) || getCreateDomElement_iterableToArray(arr) || getCreateDomElement_unsupportedIterableToArray(arr) || getCreateDomElement_nonIterableSpread(); }
function getCreateDomElement_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function getCreateDomElement_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return getCreateDomElement_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return getCreateDomElement_arrayLikeToArray(o, minLen); }
function getCreateDomElement_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function getCreateDomElement_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return getCreateDomElement_arrayLikeToArray(arr); }
function getCreateDomElement_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function getCreateDomElement_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = getCreateDomElement_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function getCreateDomElement_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function getCreateDomElement(environment) {
  return function createDomElement(tagName, _ref) {
    var _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      props = getCreateDomElement_objectWithoutProperties(_ref, getCreateDomElement_excluded);
    var element = environment.document.createElement(tagName);
    setProperties(element, props);
    element.append.apply(element, getCreateDomElement_toConsumableArray(children));
    return element;
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/elements/Input.js
function Input_typeof(obj) { "@babel/helpers - typeof"; return Input_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Input_typeof(obj); }
var Input_excluded = ["autocompleteScopeApi", "environment", "classNames", "getInputProps", "getInputPropsCore", "isDetached", "state"];
function Input_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Input_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Input_ownKeys(Object(source), !0).forEach(function (key) { Input_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Input_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Input_defineProperty(obj, key, value) { key = Input_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Input_toPropertyKey(arg) { var key = Input_toPrimitive(arg, "string"); return Input_typeof(key) === "symbol" ? key : String(key); }
function Input_toPrimitive(input, hint) { if (Input_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Input_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Input_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Input_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Input_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var Input_Input = function Input(_ref) {
  var autocompleteScopeApi = _ref.autocompleteScopeApi,
    environment = _ref.environment,
    classNames = _ref.classNames,
    getInputProps = _ref.getInputProps,
    getInputPropsCore = _ref.getInputPropsCore,
    isDetached = _ref.isDetached,
    state = _ref.state,
    props = Input_objectWithoutProperties(_ref, Input_excluded);
  var createDomElement = getCreateDomElement(environment);
  var element = createDomElement('input', props);
  var inputProps = getInputProps(Input_objectSpread({
    state: state,
    props: getInputPropsCore({
      inputElement: element
    }),
    inputElement: element
  }, autocompleteScopeApi));
  setProperties(element, Input_objectSpread(Input_objectSpread({}, inputProps), {}, {
    onKeyDown: function onKeyDown(event) {
      // In detached mode we don't want to close the panel when hitting `Tab`.
      if (isDetached && event.key === 'Tab') {
        return;
      }
      inputProps.onKeyDown(event);
    }
  }));
  return element;
};
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/createAutocompleteDom.js
function createAutocompleteDom_typeof(obj) { "@babel/helpers - typeof"; return createAutocompleteDom_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, createAutocompleteDom_typeof(obj); }
function createAutocompleteDom_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function createAutocompleteDom_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? createAutocompleteDom_ownKeys(Object(source), !0).forEach(function (key) { createAutocompleteDom_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : createAutocompleteDom_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createAutocompleteDom_defineProperty(obj, key, value) { key = createAutocompleteDom_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function createAutocompleteDom_toPropertyKey(arg) { var key = createAutocompleteDom_toPrimitive(arg, "string"); return createAutocompleteDom_typeof(key) === "symbol" ? key : String(key); }
function createAutocompleteDom_toPrimitive(input, hint) { if (createAutocompleteDom_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (createAutocompleteDom_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



function createAutocompleteDom(_ref) {
  var autocomplete = _ref.autocomplete,
    autocompleteScopeApi = _ref.autocompleteScopeApi,
    classNames = _ref.classNames,
    environment = _ref.environment,
    isDetached = _ref.isDetached,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? 'Search' : _ref$placeholder,
    propGetters = _ref.propGetters,
    setIsModalOpen = _ref.setIsModalOpen,
    state = _ref.state,
    translations = _ref.translations;
  var createDomElement = getCreateDomElement(environment);
  var rootProps = propGetters.getRootProps(createAutocompleteDom_objectSpread({
    state: state,
    props: autocomplete.getRootProps({})
  }, autocompleteScopeApi));
  var root = createDomElement('div', createAutocompleteDom_objectSpread({
    class: classNames.root
  }, rootProps));
  var detachedContainer = createDomElement('div', {
    class: classNames.detachedContainer,
    onMouseDown: function onMouseDown(event) {
      event.stopPropagation();
    }
  });
  var detachedOverlay = createDomElement('div', {
    class: classNames.detachedOverlay,
    children: [detachedContainer],
    onMouseDown: function onMouseDown() {
      setIsModalOpen(false);
      autocomplete.setIsOpen(false);
    }
  });
  var labelProps = propGetters.getLabelProps(createAutocompleteDom_objectSpread({
    state: state,
    props: autocomplete.getLabelProps({})
  }, autocompleteScopeApi));
  var submitButton = createDomElement('button', {
    class: classNames.submitButton,
    type: 'submit',
    title: translations.submitButtonTitle,
    children: [SearchIcon_SearchIcon({
      environment: environment
    })]
  });
  // @MAJOR Remove the label wrapper for the submit button.
  // The submit button is sufficient for accessibility purposes, and
  // wrapping it with the label actually makes it less accessible (see CR-6077).
  var label = createDomElement('label', createAutocompleteDom_objectSpread({
    class: classNames.label,
    children: [submitButton],
    ariaLabel: translations.submitButtonTitle
  }, labelProps));
  var clearButton = createDomElement('button', {
    class: classNames.clearButton,
    type: 'reset',
    title: translations.clearButtonTitle,
    children: [ClearIcon_ClearIcon({
      environment: environment
    })]
  });
  var loadingIndicator = createDomElement('div', {
    class: classNames.loadingIndicator,
    children: [LoadingIcon_LoadingIcon({
      environment: environment
    })]
  });
  var input = Input_Input({
    class: classNames.input,
    environment: environment,
    state: state,
    getInputProps: propGetters.getInputProps,
    getInputPropsCore: autocomplete.getInputProps,
    autocompleteScopeApi: autocompleteScopeApi,
    isDetached: isDetached
  });
  var inputWrapperPrefix = createDomElement('div', {
    class: classNames.inputWrapperPrefix,
    children: [label, loadingIndicator]
  });
  var inputWrapperSuffix = createDomElement('div', {
    class: classNames.inputWrapperSuffix,
    children: [clearButton]
  });
  var inputWrapper = createDomElement('div', {
    class: classNames.inputWrapper,
    children: [input]
  });
  var formProps = propGetters.getFormProps(createAutocompleteDom_objectSpread({
    state: state,
    props: autocomplete.getFormProps({
      inputElement: input
    })
  }, autocompleteScopeApi));
  var form = createDomElement('form', createAutocompleteDom_objectSpread({
    class: classNames.form,
    children: [inputWrapperPrefix, inputWrapper, inputWrapperSuffix]
  }, formProps));
  var panelProps = propGetters.getPanelProps(createAutocompleteDom_objectSpread({
    state: state,
    props: autocomplete.getPanelProps({})
  }, autocompleteScopeApi));
  var panel = createDomElement('div', createAutocompleteDom_objectSpread({
    class: classNames.panel
  }, panelProps));
  var detachedSearchButtonQuery = createDomElement('div', {
    class: classNames.detachedSearchButtonQuery,
    textContent: state.query
  });
  var detachedSearchButtonPlaceholder = createDomElement('div', {
    class: classNames.detachedSearchButtonPlaceholder,
    hidden: Boolean(state.query),
    textContent: placeholder
  });
  if (false) {}
  if (isDetached) {
    var detachedSearchButtonIcon = createDomElement('div', {
      class: classNames.detachedSearchButtonIcon,
      children: [SearchIcon_SearchIcon({
        environment: environment
      })]
    });
    var detachedSearchButton = createDomElement('button', {
      type: 'button',
      class: classNames.detachedSearchButton,
      title: translations.detachedSearchButtonTitle,
      id: labelProps.id,
      onClick: function onClick() {
        setIsModalOpen(true);
      },
      children: [detachedSearchButtonIcon, detachedSearchButtonPlaceholder, detachedSearchButtonQuery]
    });
    var detachedCancelButton = createDomElement('button', {
      type: 'button',
      class: classNames.detachedCancelButton,
      textContent: translations.detachedCancelButtonText,
      // Prevent `onTouchStart` from closing the panel
      // since it should be initiated by `onClick` only
      onTouchStart: function onTouchStart(event) {
        event.stopPropagation();
      },
      onClick: function onClick() {
        autocomplete.setIsOpen(false);
        setIsModalOpen(false);
      }
    });
    var detachedFormContainer = createDomElement('div', {
      class: classNames.detachedFormContainer,
      children: [form, detachedCancelButton]
    });
    detachedContainer.appendChild(detachedFormContainer);
    root.appendChild(detachedSearchButton);
  } else {
    root.appendChild(form);
  }
  return {
    detachedContainer: detachedContainer,
    detachedOverlay: detachedOverlay,
    detachedSearchButtonQuery: detachedSearchButtonQuery,
    detachedSearchButtonPlaceholder: detachedSearchButtonPlaceholder,
    inputWrapper: inputWrapper,
    input: input,
    root: root,
    form: form,
    label: label,
    submitButton: submitButton,
    clearButton: clearButton,
    loadingIndicator: loadingIndicator,
    panel: panel
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/createEffectWrapper.js
function createEffectWrapper() {
  var effects = [];
  var cleanups = [];
  function runEffect(fn) {
    effects.push(fn);
    var effectCleanup = fn();
    cleanups.push(effectCleanup);
  }
  return {
    runEffect: runEffect,
    cleanupEffects: function cleanupEffects() {
      var currentCleanups = cleanups;
      cleanups = [];
      currentCleanups.forEach(function (cleanup) {
        cleanup();
      });
    },
    runEffects: function runEffects() {
      var currentEffects = effects;
      effects = [];
      currentEffects.forEach(function (effect) {
        runEffect(effect);
      });
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/createReactiveWrapper.js
function createReactiveWrapper() {
  var reactives = [];
  return {
    reactive: function reactive(value) {
      var current = value();
      var reactive = {
        _fn: value,
        _ref: {
          current: current
        },
        get value() {
          return this._ref.current;
        },
        set value(value) {
          this._ref.current = value;
        }
      };
      reactives.push(reactive);
      return reactive;
    },
    runReactives: function runReactives() {
      reactives.forEach(function (value) {
        value._ref.current = value._fn();
      });
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/preact/dist/preact.module.js
var preact_module_n,preact_module_l,preact_module_u,preact_module_t,preact_module_i,preact_module_r,preact_module_o,preact_module_e,preact_module_f,preact_module_c,preact_module_s,preact_module_a,preact_module_h,preact_module_p={},preact_module_v=[],preact_module_y=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,preact_module_d=Array.isArray;function preact_module_w(n,l){for(var u in l)n[u]=l[u];return n}function preact_module_g(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function preact_module_(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?preact_module_n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===e[o]&&(e[o]=l.defaultProps[o]);return preact_module_m(l,e,i,r,null)}function preact_module_m(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++preact_module_u:o,__i:-1,__u:0};return null==o&&null!=preact_module_l.vnode&&preact_module_l.vnode(e),e}function preact_module_b(){return{current:null}}function preact_module_k(n){return n.children}function preact_module_x(n,l){this.props=n,this.context=l}function preact_module_S(n,l){if(null==l)return n.__?preact_module_S(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?preact_module_S(n):null}function preact_module_C(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return preact_module_C(n)}}function preact_module_M(n){(!n.__d&&(n.__d=!0)&&preact_module_i.push(n)&&!preact_module_$.__r++||preact_module_r!==preact_module_l.debounceRendering)&&((preact_module_r=preact_module_l.debounceRendering)||preact_module_o)(preact_module_$)}function preact_module_$(){for(var n,u,t,r,o,f,c,s=1;preact_module_i.length;)preact_module_i.length>s&&preact_module_i.sort(preact_module_e),n=preact_module_i.shift(),s=preact_module_i.length,n.__d&&(t=void 0,o=(r=(u=n).__v).__e,f=[],c=[],u.__P&&((t=preact_module_w({},r)).__v=r.__v+1,preact_module_l.vnode&&preact_module_l.vnode(t),j(u.__P,t,r,u.__n,u.__P.namespaceURI,32&r.__u?[o]:null,f,null==o?preact_module_S(r):o,!!(32&r.__u),c),t.__v=r.__v,t.__.__k[t.__i]=t,z(f,t,c),t.__e!=o&&preact_module_C(t)));preact_module_$.__r=0}function I(n,l,u,t,i,r,o,e,f,c,s){var a,h,y,d,w,g,_=t&&t.__k||preact_module_v,m=l.length;for(f=preact_module_P(u,l,_,f,m),a=0;a<m;a++)null!=(y=u.__k[a])&&(h=-1===y.__i?preact_module_p:_[y.__i]||preact_module_p,y.__i=a,g=j(n,y,h,i,r,o,e,f,c,s),d=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&V(h.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),4&y.__u||h.__k===y.__k?f=preact_module_A(y,f,n):"function"==typeof y.type&&void 0!==g?f=g:d&&(f=d.nextSibling),y.__u&=-7);return u.__e=w,f}function preact_module_P(n,l,u,t,i){var r,o,e,f,c,s=u.length,a=s,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?(f=r+h,(o=n.__k[r]="string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?preact_module_m(null,o,null,null,null):preact_module_d(o)?preact_module_m(preact_module_k,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?preact_module_m(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=n,o.__b=n.__b+1,e=null,-1!==(c=o.__i=preact_module_L(o,u,f,a))&&(a--,(e=u[c])&&(e.__u|=2)),null==e||null===e.__v?(-1==c&&h--,"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(a)for(r=0;r<s;r++)null!=(e=u[r])&&0==(2&e.__u)&&(e.__e==t&&(t=preact_module_S(e)),q(e,e));return t}function preact_module_A(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=preact_module_A(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=preact_module_S(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8==l.nodeType);return l}function preact_module_H(n,l){return l=l||[],null==n||"boolean"==typeof n||(preact_module_d(n)?n.some(function(n){preact_module_H(n,l)}):l.push(n)),l}function preact_module_L(n,l,u,t){var i,r,o=n.key,e=n.type,f=l[u];if(null===f||f&&o==f.key&&e===f.type&&0==(2&f.__u))return u;if(t>(null!=f&&0==(2&f.__u)?1:0))for(i=u-1,r=u+1;i>=0||r<l.length;){if(i>=0){if((f=l[i])&&0==(2&f.__u)&&o==f.key&&e===f.type)return i;i--}if(r<l.length){if((f=l[r])&&0==(2&f.__u)&&o==f.key&&e===f.type)return r;r++}}return-1}function preact_module_T(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||preact_module_y.test(l)?u:u+"px"}function preact_module_F(n,l,u,t,i){var r;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||preact_module_T(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||preact_module_T(n.style,l,u[l])}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(preact_module_f,"$1")),l=l.toLowerCase()in n||"onFocusOut"==l||"onFocusIn"==l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u.u=t.u:(u.u=preact_module_c,n.addEventListener(l,r?preact_module_a:preact_module_s,r)):n.removeEventListener(l,r?preact_module_a:preact_module_s,r);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u))}}function preact_module_O(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=preact_module_c++;else if(u.t<t.u)return;return t(preact_module_l.event?preact_module_l.event(u):u)}}}function j(n,u,t,i,r,o,e,f,c,s){var a,h,p,v,y,_,m,b,S,C,M,$,P,A,H,L,T,F,O=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(a=preact_module_l.__b)&&a(u);n:if("function"==typeof O)try{if(b=u.props,S="prototype"in O&&O.prototype.render,C=(a=O.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?m=(h=u.__c=t.__c).__=h.__E:(S?u.__c=h=new O(b,M):(u.__c=h=new preact_module_x(b,M),h.constructor=O,h.render=B),C&&C.sub(h),h.props=b,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),S&&null==h.__s&&(h.__s=h.state),S&&null!=O.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=preact_module_w({},h.__s)),preact_module_w(h.__s,O.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,h.__v=u,p)S&&null==O.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),S&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(S&&null==O.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,M)||u.__v==t.__v)){for(u.__v!=t.__v&&(h.props=b,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u)}),$=0;$<h._sb.length;$++)h.__h.push(h._sb[$]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,M),S&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,_)})}if(h.context=M,h.props=b,h.__P=n,h.__e=!1,P=preact_module_l.__r,A=0,S){for(h.state=h.__s,h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++A<25);h.state=h.__s,null!=h.getChildContext&&(i=preact_module_w(preact_module_w({},i),h.getChildContext())),S&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,y)),T=(L=null!=a&&a.type===preact_module_k&&null==a.key)?a.props.children:a,L&&(a.props.children=null),f=I(n,preact_module_d(T)?T:[T],u,t,i,r,o,e,f,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&e.push(h),m&&(h.__E=h.__=null)}catch(n){if(u.__v=null,c||null!=o)if(n.then){for(u.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;o[o.indexOf(f)]=null,u.__e=f}else for(F=o.length;F--;)preact_module_g(o[F]);else u.__e=t.__e,u.__k=t.__k;preact_module_l.__e(n,u,t)}else null==o&&u.__v==t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=N(t.__e,u,t,i,r,o,e,c,s);return(a=preact_module_l.diffed)&&a(u),128&u.__u?void 0:f}function z(n,u,t){for(var i=0;i<t.length;i++)V(t[i],t[++i],t[++i]);preact_module_l.__c&&preact_module_l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){preact_module_l.__e(n,u.__v)}})}function N(u,t,i,r,o,e,f,c,s){var a,h,v,y,w,_,m,b=i.props,k=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((w=e[a])&&"setAttribute"in w==!!x&&(x?w.localName==x:3==w.nodeType)){u=w,e[a]=null;break}if(null==u){if(null==x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(preact_module_l.__m&&preact_module_l.__m(t,e),c=!1),e=null}if(null===x)b===k||c&&u.data===k||(u.data=k);else{if(e=e&&preact_module_n.call(u.childNodes),b=i.props||preact_module_p,!c&&null!=e)for(b={},a=0;a<u.attributes.length;a++)b[(w=u.attributes[a]).name]=w.value;for(a in b)if(w=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=w;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;preact_module_F(u,a,null,w,o)}for(a in k)w=k[a],"children"==a?y=w:"dangerouslySetInnerHTML"==a?h=w:"value"==a?_=w:"checked"==a?m=w:c&&"function"!=typeof w||b[a]===w||preact_module_F(u,a,w,b[a],o);if(h)c||v&&(h.__html===v.__html||h.__html===u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(v&&(u.innerHTML=""),I("template"===t.type?u.content:u,preact_module_d(y)?y:[y],t,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&preact_module_S(i,0),c,s),null!=e)for(a=e.length;a--;)preact_module_g(e[a]);c||(a="value","progress"==x&&null==_?u.removeAttribute("value"):void 0!==_&&(_!==u[a]||"progress"==x&&!_||"option"==x&&_!==b[a])&&preact_module_F(u,a,_,b[a],o),a="checked",void 0!==m&&m!==u[a]&&preact_module_F(u,a,m,b[a],o))}return u}function V(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u))}else n.current=u}catch(n){preact_module_l.__e(n,t)}}function q(n,u,t){var i,r;if(preact_module_l.unmount&&preact_module_l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||V(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){preact_module_l.__e(n,u)}i.base=i.__P=null}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&q(i[r],u,t||"function"!=typeof n.type);t||preact_module_g(n.__e),n.__c=n.__=n.__e=void 0}function B(n,l,u){return this.constructor(n,u)}function D(u,t,i){var r,o,e,f;t==document&&(t=document.documentElement),preact_module_l.__&&preact_module_l.__(u,t),o=(r="function"==typeof i)?null:i&&i.__k||t.__k,e=[],f=[],j(t,u=(!r&&i||t).__k=preact_module_(preact_module_k,null,[u]),o||preact_module_p,preact_module_p,t.namespaceURI,!r&&i?[i]:o?null:t.firstChild?preact_module_n.call(t.childNodes):null,e,!r&&i?i:o?o.__e:t.firstChild,r,f),z(e,u,f)}function E(n,l){D(n,l,E)}function G(l,u,t){var i,r,o,e,f=preact_module_w({},l.props);for(o in l.type&&l.type.defaultProps&&(e=l.type.defaultProps),u)"key"==o?i=u[o]:"ref"==o?r=u[o]:f[o]=void 0===u[o]&&void 0!==e?e[o]:u[o];return arguments.length>2&&(f.children=arguments.length>3?preact_module_n.call(arguments,2):t),preact_module_m(l.type,f,i||l.key,r||l.ref,null)}function J(n){function l(n){var u,t;return this.getChildContext||(u=new Set,(t={})[l.__c]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.forEach(function(n){n.__e=!0,preact_module_M(n)})},this.sub=function(n){u.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.delete(n),l&&l.call(n)}}),n.children}return l.__c="__cC"+preact_module_h++,l.__=n,l.Provider=l.__l=(l.Consumer=function(n,l){return n.children(l)}).contextType=l,l}preact_module_n=preact_module_v.slice,preact_module_l={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l}throw n}},preact_module_u=0,preact_module_t=function(n){return null!=n&&null==n.constructor},preact_module_x.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=preact_module_w({},this.state),"function"==typeof n&&(n=n(preact_module_w({},u),this.props)),n&&preact_module_w(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),preact_module_M(this))},preact_module_x.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),preact_module_M(this))},preact_module_x.prototype.render=preact_module_k,preact_module_i=[],preact_module_o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,preact_module_e=function(n,l){return n.__v.__b-l.__v.__b},preact_module_$.__r=0,preact_module_f=/(PointerCapture)$|Capture$/i,preact_module_c=0,preact_module_s=preact_module_O(!1),preact_module_a=preact_module_O(!0),preact_module_h=0;
//# sourceMappingURL=preact.module.js.map

;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/getAttributeValueByPath.js
function getAttributeValueByPath(record, path) {
  return path.reduce(function (current, key) {
    return current && current[key];
  }, record);
}
// EXTERNAL MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/constants/index.js
var constants = __webpack_require__(86118);
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAttribute.js

/**
 * Creates a data structure that allows to concatenate similar highlighting
 * parts in a single value.
 */
function createAttributeSet() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = initialValue;
  return {
    get: function get() {
      return value;
    },
    add: function add(part) {
      var lastPart = value[value.length - 1];
      if ((lastPart === null || lastPart === void 0 ? void 0 : lastPart.isHighlighted) === part.isHighlighted) {
        value[value.length - 1] = {
          value: lastPart.value + part.value,
          isHighlighted: lastPart.isHighlighted
        };
      } else {
        value.push(part);
      }
    }
  };
}
function parseAttribute(_ref) {
  var highlightedValue = _ref.highlightedValue;
  var preTagParts = highlightedValue.split(constants/* .HIGHLIGHT_PRE_TAG */.E);
  var firstValue = preTagParts.shift();
  var parts = createAttributeSet(firstValue ? [{
    value: firstValue,
    isHighlighted: false
  }] : []);
  preTagParts.forEach(function (part) {
    var postTagParts = part.split(constants/* .HIGHLIGHT_POST_TAG */.F);
    parts.add({
      value: postTagParts[0],
      isHighlighted: true
    });
    if (postTagParts[1] !== '') {
      parts.add({
        value: postTagParts[1],
        isHighlighted: false
      });
    }
  });
  return parts.get();
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitHighlight.js
function parseAlgoliaHitHighlight_toConsumableArray(arr) { return parseAlgoliaHitHighlight_arrayWithoutHoles(arr) || parseAlgoliaHitHighlight_iterableToArray(arr) || parseAlgoliaHitHighlight_unsupportedIterableToArray(arr) || parseAlgoliaHitHighlight_nonIterableSpread(); }
function parseAlgoliaHitHighlight_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function parseAlgoliaHitHighlight_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return parseAlgoliaHitHighlight_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return parseAlgoliaHitHighlight_arrayLikeToArray(o, minLen); }
function parseAlgoliaHitHighlight_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function parseAlgoliaHitHighlight_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return parseAlgoliaHitHighlight_arrayLikeToArray(arr); }
function parseAlgoliaHitHighlight_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function parseAlgoliaHitHighlight(_ref) {
  var hit = _ref.hit,
    attribute = _ref.attribute;
  var path = Array.isArray(attribute) ? attribute : [attribute];
  var highlightedValue = getAttributeValueByPath(hit, ['_highlightResult'].concat(parseAlgoliaHitHighlight_toConsumableArray(path), ['value']));
  if (typeof highlightedValue !== 'string') {
     false ? 0 : void 0;
    highlightedValue = getAttributeValueByPath(hit, path) || '';
  }
  return parseAttribute({
    highlightedValue: highlightedValue
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/components/Highlight.js

function createHighlightComponent(_ref) {
  var createElement = _ref.createElement,
    Fragment = _ref.Fragment;
  function Highlight(_ref2) {
    var hit = _ref2.hit,
      attribute = _ref2.attribute,
      _ref2$tagName = _ref2.tagName,
      tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, parseAlgoliaHitHighlight({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }
  Highlight.__autocomplete_componentName = 'Highlight';
  return Highlight;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/isPartHighlighted.js
var htmlEscapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};
var hasAlphanumeric = new RegExp(/\w/i);
var regexEscapedHtml = /&(amp|quot|lt|gt|#39);/g;
var regexHasEscapedHtml = RegExp(regexEscapedHtml.source);
function isPartHighlighted_unescape(value) {
  return value && regexHasEscapedHtml.test(value) ? value.replace(regexEscapedHtml, function (character) {
    return htmlEscapes[character];
  }) : value;
}
function isPartHighlighted(parts, i) {
  var _parts, _parts2;
  var current = parts[i];
  var isNextHighlighted = ((_parts = parts[i + 1]) === null || _parts === void 0 ? void 0 : _parts.isHighlighted) || true;
  var isPreviousHighlighted = ((_parts2 = parts[i - 1]) === null || _parts2 === void 0 ? void 0 : _parts2.isHighlighted) || true;
  if (!hasAlphanumeric.test(isPartHighlighted_unescape(current.value)) && isPreviousHighlighted === isNextHighlighted) {
    return isPreviousHighlighted;
  }
  return current.isHighlighted;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/reverseHighlightedParts.js
function reverseHighlightedParts_typeof(obj) { "@babel/helpers - typeof"; return reverseHighlightedParts_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, reverseHighlightedParts_typeof(obj); }
function reverseHighlightedParts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function reverseHighlightedParts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? reverseHighlightedParts_ownKeys(Object(source), !0).forEach(function (key) { reverseHighlightedParts_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : reverseHighlightedParts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function reverseHighlightedParts_defineProperty(obj, key, value) { key = reverseHighlightedParts_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function reverseHighlightedParts_toPropertyKey(arg) { var key = reverseHighlightedParts_toPrimitive(arg, "string"); return reverseHighlightedParts_typeof(key) === "symbol" ? key : String(key); }
function reverseHighlightedParts_toPrimitive(input, hint) { if (reverseHighlightedParts_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (reverseHighlightedParts_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function reverseHighlightedParts(parts) {
  // We don't want to highlight the whole word when no parts match.
  if (!parts.some(function (part) {
    return part.isHighlighted;
  })) {
    return parts.map(function (part) {
      return reverseHighlightedParts_objectSpread(reverseHighlightedParts_objectSpread({}, part), {}, {
        isHighlighted: false
      });
    });
  }
  return parts.map(function (part, i) {
    return reverseHighlightedParts_objectSpread(reverseHighlightedParts_objectSpread({}, part), {}, {
      isHighlighted: !isPartHighlighted(parts, i)
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseHighlight.js


function parseAlgoliaHitReverseHighlight(props) {
  return reverseHighlightedParts(parseAlgoliaHitHighlight(props));
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseHighlight.js

function createReverseHighlightComponent(_ref) {
  var createElement = _ref.createElement,
    Fragment = _ref.Fragment;
  function ReverseHighlight(_ref2) {
    var hit = _ref2.hit,
      attribute = _ref2.attribute,
      _ref2$tagName = _ref2.tagName,
      tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, parseAlgoliaHitReverseHighlight({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }
  ReverseHighlight.__autocomplete_componentName = 'ReverseHighlight';
  return ReverseHighlight;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitSnippet.js
function parseAlgoliaHitSnippet_toConsumableArray(arr) { return parseAlgoliaHitSnippet_arrayWithoutHoles(arr) || parseAlgoliaHitSnippet_iterableToArray(arr) || parseAlgoliaHitSnippet_unsupportedIterableToArray(arr) || parseAlgoliaHitSnippet_nonIterableSpread(); }
function parseAlgoliaHitSnippet_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function parseAlgoliaHitSnippet_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return parseAlgoliaHitSnippet_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return parseAlgoliaHitSnippet_arrayLikeToArray(o, minLen); }
function parseAlgoliaHitSnippet_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function parseAlgoliaHitSnippet_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return parseAlgoliaHitSnippet_arrayLikeToArray(arr); }
function parseAlgoliaHitSnippet_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function parseAlgoliaHitSnippet(_ref) {
  var hit = _ref.hit,
    attribute = _ref.attribute;
  var path = Array.isArray(attribute) ? attribute : [attribute];
  var highlightedValue = getAttributeValueByPath(hit, ['_snippetResult'].concat(parseAlgoliaHitSnippet_toConsumableArray(path), ['value']));
  if (typeof highlightedValue !== 'string') {
     false ? 0 : void 0;
    highlightedValue = getAttributeValueByPath(hit, path) || '';
  }
  return parseAttribute({
    highlightedValue: highlightedValue
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseSnippet.js


function parseAlgoliaHitReverseSnippet(props) {
  return reverseHighlightedParts(parseAlgoliaHitSnippet(props));
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseSnippet.js

function createReverseSnippetComponent(_ref) {
  var createElement = _ref.createElement,
    Fragment = _ref.Fragment;
  function ReverseSnippet(_ref2) {
    var hit = _ref2.hit,
      attribute = _ref2.attribute,
      _ref2$tagName = _ref2.tagName,
      tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, parseAlgoliaHitReverseSnippet({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }
  ReverseSnippet.__autocomplete_componentName = 'ReverseSnippet';
  return ReverseSnippet;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/components/Snippet.js

function createSnippetComponent(_ref) {
  var createElement = _ref.createElement,
    Fragment = _ref.Fragment;
  function Snippet(_ref2) {
    var hit = _ref2.hit,
      attribute = _ref2.attribute,
      _ref2$tagName = _ref2.tagName,
      tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, parseAlgoliaHitSnippet({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }
  Snippet.__autocomplete_componentName = 'Snippet';
  return Snippet;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/utils/getHTMLElement.js

function getHTMLElement(environment, value) {
  if (typeof value === 'string') {
    var element = environment.document.querySelector(value);
    (0,invariant/* .invariant */.V)(element !== null, "The element ".concat(JSON.stringify(value), " is not in the document."));
    return element;
  }
  return value;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeClassNames.js
function mergeClassNames() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return values.reduce(function (acc, current) {
    Object.keys(current).forEach(function (key) {
      var accValue = acc[key];
      var currentValue = current[key];
      if (accValue !== currentValue) {
        acc[key] = [accValue, currentValue].filter(Boolean).join(' ');
      }
    });
    return acc;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/getDefaultOptions.js
function getDefaultOptions_typeof(obj) { "@babel/helpers - typeof"; return getDefaultOptions_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, getDefaultOptions_typeof(obj); }
var getDefaultOptions_excluded = ["classNames", "container", "getEnvironmentProps", "getFormProps", "getInputProps", "getItemProps", "getLabelProps", "getListProps", "getPanelProps", "getRootProps", "panelContainer", "panelPlacement", "render", "renderNoResults", "renderer", "detachedMediaQuery", "components", "translations"];
function getDefaultOptions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function getDefaultOptions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getDefaultOptions_ownKeys(Object(source), !0).forEach(function (key) { getDefaultOptions_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getDefaultOptions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function getDefaultOptions_defineProperty(obj, key, value) { key = getDefaultOptions_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function getDefaultOptions_toPropertyKey(arg) { var key = getDefaultOptions_toPrimitive(arg, "string"); return getDefaultOptions_typeof(key) === "symbol" ? key : String(key); }
function getDefaultOptions_toPrimitive(input, hint) { if (getDefaultOptions_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (getDefaultOptions_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function getDefaultOptions_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = getDefaultOptions_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function getDefaultOptions_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var defaultClassNames = {
  clearButton: 'aa-ClearButton',
  detachedCancelButton: 'aa-DetachedCancelButton',
  detachedContainer: 'aa-DetachedContainer',
  detachedFormContainer: 'aa-DetachedFormContainer',
  detachedOverlay: 'aa-DetachedOverlay',
  detachedSearchButton: 'aa-DetachedSearchButton',
  detachedSearchButtonIcon: 'aa-DetachedSearchButtonIcon',
  detachedSearchButtonPlaceholder: 'aa-DetachedSearchButtonPlaceholder',
  detachedSearchButtonQuery: 'aa-DetachedSearchButtonQuery',
  form: 'aa-Form',
  input: 'aa-Input',
  inputWrapper: 'aa-InputWrapper',
  inputWrapperPrefix: 'aa-InputWrapperPrefix',
  inputWrapperSuffix: 'aa-InputWrapperSuffix',
  item: 'aa-Item',
  label: 'aa-Label',
  list: 'aa-List',
  loadingIndicator: 'aa-LoadingIndicator',
  panel: 'aa-Panel',
  panelLayout: 'aa-PanelLayout aa-Panel--scrollable',
  root: 'aa-Autocomplete',
  source: 'aa-Source',
  sourceFooter: 'aa-SourceFooter',
  sourceHeader: 'aa-SourceHeader',
  sourceNoResults: 'aa-SourceNoResults',
  submitButton: 'aa-SubmitButton'
};
var getDefaultOptions_defaultRender = function defaultRender(_ref, root) {
  var children = _ref.children,
    render = _ref.render;
  render(children, root);
};
var defaultRenderer = {
  createElement: preact_module_,
  Fragment: preact_module_k,
  render: D
};
function getDefaultOptions(options) {
  var _core$id;
  var classNames = options.classNames,
    container = options.container,
    getEnvironmentProps = options.getEnvironmentProps,
    getFormProps = options.getFormProps,
    getInputProps = options.getInputProps,
    getItemProps = options.getItemProps,
    getLabelProps = options.getLabelProps,
    getListProps = options.getListProps,
    getPanelProps = options.getPanelProps,
    getRootProps = options.getRootProps,
    panelContainer = options.panelContainer,
    panelPlacement = options.panelPlacement,
    render = options.render,
    renderNoResults = options.renderNoResults,
    renderer = options.renderer,
    detachedMediaQuery = options.detachedMediaQuery,
    components = options.components,
    translations = options.translations,
    core = getDefaultOptions_objectWithoutProperties(options, getDefaultOptions_excluded);

  /* eslint-disable no-restricted-globals */
  var environment = typeof window !== 'undefined' ? window : {};
  /* eslint-enable no-restricted-globals */
  var containerElement = getHTMLElement(environment, container);
  (0,invariant/* .invariant */.V)(containerElement.tagName !== 'INPUT', 'The `container` option does not support `input` elements. You need to change the container to a `div`.');
   false ? 0 : void 0;
   false ? 0 : void 0;
  var defaultedRenderer = getDefaultOptions_objectSpread(getDefaultOptions_objectSpread({}, defaultRenderer), renderer);
  var defaultComponents = {
    Highlight: createHighlightComponent(defaultedRenderer),
    ReverseHighlight: createReverseHighlightComponent(defaultedRenderer),
    ReverseSnippet: createReverseSnippetComponent(defaultedRenderer),
    Snippet: createSnippetComponent(defaultedRenderer)
  };
  var defaultTranslations = {
    clearButtonTitle: 'Clear',
    detachedCancelButtonText: 'Cancel',
    detachedSearchButtonTitle: 'Search',
    submitButtonTitle: 'Submit'
  };
  return {
    renderer: {
      classNames: mergeClassNames(defaultClassNames, classNames !== null && classNames !== void 0 ? classNames : {}),
      container: containerElement,
      getEnvironmentProps: getEnvironmentProps !== null && getEnvironmentProps !== void 0 ? getEnvironmentProps : function (_ref2) {
        var props = _ref2.props;
        return props;
      },
      getFormProps: getFormProps !== null && getFormProps !== void 0 ? getFormProps : function (_ref3) {
        var props = _ref3.props;
        return props;
      },
      getInputProps: getInputProps !== null && getInputProps !== void 0 ? getInputProps : function (_ref4) {
        var props = _ref4.props;
        return props;
      },
      getItemProps: getItemProps !== null && getItemProps !== void 0 ? getItemProps : function (_ref5) {
        var props = _ref5.props;
        return props;
      },
      getLabelProps: getLabelProps !== null && getLabelProps !== void 0 ? getLabelProps : function (_ref6) {
        var props = _ref6.props;
        return props;
      },
      getListProps: getListProps !== null && getListProps !== void 0 ? getListProps : function (_ref7) {
        var props = _ref7.props;
        return props;
      },
      getPanelProps: getPanelProps !== null && getPanelProps !== void 0 ? getPanelProps : function (_ref8) {
        var props = _ref8.props;
        return props;
      },
      getRootProps: getRootProps !== null && getRootProps !== void 0 ? getRootProps : function (_ref9) {
        var props = _ref9.props;
        return props;
      },
      panelContainer: panelContainer ? getHTMLElement(environment, panelContainer) : environment.document.body,
      panelPlacement: panelPlacement !== null && panelPlacement !== void 0 ? panelPlacement : 'input-wrapper-width',
      render: render !== null && render !== void 0 ? render : getDefaultOptions_defaultRender,
      renderNoResults: renderNoResults,
      renderer: defaultedRenderer,
      detachedMediaQuery: detachedMediaQuery !== null && detachedMediaQuery !== void 0 ? detachedMediaQuery : getComputedStyle(environment.document.documentElement).getPropertyValue('--aa-detached-media-query'),
      components: getDefaultOptions_objectSpread(getDefaultOptions_objectSpread({}, defaultComponents), components),
      translations: getDefaultOptions_objectSpread(getDefaultOptions_objectSpread({}, defaultTranslations), translations)
    },
    core: getDefaultOptions_objectSpread(getDefaultOptions_objectSpread({}, core), {}, {
      id: (_core$id = core.id) !== null && _core$id !== void 0 ? _core$id : generateAutocompleteId(),
      environment: environment
    })
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/getPanelPlacementStyle.js
function getPanelPlacementStyle(_ref) {
  var panelPlacement = _ref.panelPlacement,
    container = _ref.container,
    form = _ref.form,
    environment = _ref.environment;
  var containerRect = container.getBoundingClientRect();
  // Some browsers have specificities to retrieve the document scroll position.
  // See https://stackoverflow.com/a/28633515/9940315
  var scrollTop = environment.pageYOffset || environment.document.documentElement.scrollTop || environment.document.body.scrollTop || 0;
  var top = scrollTop + containerRect.top + containerRect.height;
  switch (panelPlacement) {
    case 'start':
      {
        return {
          top: top,
          left: containerRect.left
        };
      }
    case 'end':
      {
        return {
          top: top,
          right: environment.document.documentElement.clientWidth - (containerRect.left + containerRect.width)
        };
      }
    case 'full-width':
      {
        return {
          top: top,
          left: 0,
          right: 0,
          width: 'unset',
          maxWidth: 'unset'
        };
      }
    case 'input-wrapper-width':
      {
        var formRect = form.getBoundingClientRect();
        return {
          top: top,
          left: formRect.left,
          right: environment.document.documentElement.clientWidth - (formRect.left + formRect.width),
          width: 'unset',
          maxWidth: 'unset'
        };
      }
    default:
      {
        throw new Error("[Autocomplete] The `panelPlacement` value ".concat(JSON.stringify(panelPlacement), " is not valid."));
      }
  }
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/render.js
function render_typeof(obj) { "@babel/helpers - typeof"; return render_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, render_typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function render_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function render_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? render_ownKeys(Object(source), !0).forEach(function (key) { render_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : render_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function render_defineProperty(obj, key, value) { key = render_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function render_toPropertyKey(arg) { var key = render_toPrimitive(arg, "string"); return render_typeof(key) === "symbol" ? key : String(key); }
function render_toPrimitive(input, hint) { if (render_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (render_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/** @jsxRuntime classic */
/** @jsx renderer.createElement */


function renderSearchBox(_ref) {
  var autocomplete = _ref.autocomplete,
    autocompleteScopeApi = _ref.autocompleteScopeApi,
    dom = _ref.dom,
    propGetters = _ref.propGetters,
    state = _ref.state;
  setPropertiesWithoutEvents(dom.root, propGetters.getRootProps(render_objectSpread({
    state: state,
    props: autocomplete.getRootProps({})
  }, autocompleteScopeApi)));
  setPropertiesWithoutEvents(dom.input, propGetters.getInputProps(render_objectSpread({
    state: state,
    props: autocomplete.getInputProps({
      inputElement: dom.input
    }),
    inputElement: dom.input
  }, autocompleteScopeApi)));
  setProperties(dom.label, {
    hidden: state.status === 'stalled'
  });
  setProperties(dom.loadingIndicator, {
    hidden: state.status !== 'stalled'
  });
  setProperties(dom.clearButton, {
    hidden: !state.query
  });
  setProperties(dom.detachedSearchButtonQuery, {
    textContent: state.query
  });
  setProperties(dom.detachedSearchButtonPlaceholder, {
    hidden: Boolean(state.query)
  });
}
function renderPanel(render, _ref2) {
  var autocomplete = _ref2.autocomplete,
    autocompleteScopeApi = _ref2.autocompleteScopeApi,
    classNames = _ref2.classNames,
    html = _ref2.html,
    dom = _ref2.dom,
    panelContainer = _ref2.panelContainer,
    propGetters = _ref2.propGetters,
    state = _ref2.state,
    components = _ref2.components,
    renderer = _ref2.renderer;
  if (!state.isOpen) {
    if (panelContainer.contains(dom.panel)) {
      panelContainer.removeChild(dom.panel);
    }
    return;
  }

  // We add the panel element to the DOM when it's not yet appended and that the
  // items are fetched.
  if (!panelContainer.contains(dom.panel) && state.status !== 'loading') {
    panelContainer.appendChild(dom.panel);
  }
  dom.panel.classList.toggle('aa-Panel--stalled', state.status === 'stalled');
  var sections = state.collections.filter(function (_ref3) {
    var source = _ref3.source,
      items = _ref3.items;
    return source.templates.noResults || items.length > 0;
  }).map(function (_ref4, sourceIndex) {
    var source = _ref4.source,
      items = _ref4.items;
    return renderer.createElement("section", {
      key: sourceIndex,
      className: classNames.source,
      "data-autocomplete-source-id": source.sourceId
    }, source.templates.header && renderer.createElement("div", {
      className: classNames.sourceHeader
    }, source.templates.header({
      components: components,
      createElement: renderer.createElement,
      Fragment: renderer.Fragment,
      items: items,
      source: source,
      state: state,
      html: html
    })), source.templates.noResults && items.length === 0 ? renderer.createElement("div", {
      className: classNames.sourceNoResults
    }, source.templates.noResults({
      components: components,
      createElement: renderer.createElement,
      Fragment: renderer.Fragment,
      source: source,
      state: state,
      html: html
    })) : renderer.createElement("ul", _extends({
      className: classNames.list
    }, propGetters.getListProps(render_objectSpread({
      state: state,
      props: autocomplete.getListProps({
        source: source
      })
    }, autocompleteScopeApi))), items.map(function (item) {
      var itemProps = autocomplete.getItemProps({
        item: item,
        source: source
      });
      return renderer.createElement("li", _extends({
        key: itemProps.id,
        className: classNames.item
      }, propGetters.getItemProps(render_objectSpread({
        state: state,
        props: itemProps
      }, autocompleteScopeApi))), source.templates.item({
        components: components,
        createElement: renderer.createElement,
        Fragment: renderer.Fragment,
        item: item,
        state: state,
        html: html
      }));
    })), source.templates.footer && renderer.createElement("div", {
      className: classNames.sourceFooter
    }, source.templates.footer({
      components: components,
      createElement: renderer.createElement,
      Fragment: renderer.Fragment,
      items: items,
      source: source,
      state: state,
      html: html
    })));
  });
  var children = renderer.createElement(renderer.Fragment, null, renderer.createElement("div", {
    className: classNames.panelLayout
  }, sections), renderer.createElement("div", {
    className: "aa-GradientBottom"
  }));
  var elements = sections.reduce(function (acc, current) {
    acc[current.props['data-autocomplete-source-id']] = current;
    return acc;
  }, {});
  render(render_objectSpread(render_objectSpread({
    children: children,
    state: state,
    sections: sections,
    elements: elements
  }, renderer), {}, {
    components: components,
    html: html
  }, autocompleteScopeApi), dom.panel);
}
// EXTERNAL MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/userAgents.js
var esm_userAgents = __webpack_require__(67085);
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeDeep.js
function mergeDeep_toConsumableArray(arr) { return mergeDeep_arrayWithoutHoles(arr) || mergeDeep_iterableToArray(arr) || mergeDeep_unsupportedIterableToArray(arr) || mergeDeep_nonIterableSpread(); }
function mergeDeep_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function mergeDeep_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return mergeDeep_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mergeDeep_arrayLikeToArray(o, minLen); }
function mergeDeep_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function mergeDeep_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return mergeDeep_arrayLikeToArray(arr); }
function mergeDeep_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function mergeDeep_typeof(obj) { "@babel/helpers - typeof"; return mergeDeep_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, mergeDeep_typeof(obj); }
var mergeDeep_isPlainObject = function isPlainObject(value) {
  return value && mergeDeep_typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Object]';
};
function mergeDeep() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return values.reduce(function (acc, current) {
    Object.keys(current).forEach(function (key) {
      var accValue = acc[key];
      var currentValue = current[key];
      if (Array.isArray(accValue) && Array.isArray(currentValue)) {
        acc[key] = accValue.concat.apply(accValue, mergeDeep_toConsumableArray(currentValue));
      } else if (mergeDeep_isPlainObject(accValue) && mergeDeep_isPlainObject(currentValue)) {
        acc[key] = mergeDeep(accValue, currentValue);
      } else {
        acc[key] = currentValue;
      }
    });
    return acc;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/utils/pickBy.js
function pickBy_typeof(obj) { "@babel/helpers - typeof"; return pickBy_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, pickBy_typeof(obj); }
function pickBy_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function pickBy_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? pickBy_ownKeys(Object(source), !0).forEach(function (key) { pickBy_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : pickBy_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function pickBy_defineProperty(obj, key, value) { key = pickBy_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function pickBy_toPropertyKey(arg) { var key = pickBy_toPrimitive(arg, "string"); return pickBy_typeof(key) === "symbol" ? key : String(key); }
function pickBy_toPrimitive(input, hint) { if (pickBy_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (pickBy_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function pickBy_slicedToArray(arr, i) { return pickBy_arrayWithHoles(arr) || pickBy_iterableToArrayLimit(arr, i) || pickBy_unsupportedIterableToArray(arr, i) || pickBy_nonIterableRest(); }
function pickBy_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function pickBy_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return pickBy_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pickBy_arrayLikeToArray(o, minLen); }
function pickBy_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function pickBy_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function pickBy_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function pickBy(obj, predicate) {
  return Object.entries(obj).reduce(function (acc, _ref) {
    var _ref2 = pickBy_slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (predicate({
      key: key,
      value: value
    })) {
      return pickBy_objectSpread(pickBy_objectSpread({}, acc), {}, pickBy_defineProperty({}, key, value));
    }
    return acc;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/autocomplete.js
var autocomplete_excluded = ["components"];
function autocomplete_typeof(obj) { "@babel/helpers - typeof"; return autocomplete_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, autocomplete_typeof(obj); }
function autocomplete_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = autocomplete_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function autocomplete_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function autocomplete_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function autocomplete_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? autocomplete_ownKeys(Object(source), !0).forEach(function (key) { autocomplete_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : autocomplete_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function autocomplete_defineProperty(obj, key, value) { key = autocomplete_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function autocomplete_toPropertyKey(arg) { var key = autocomplete_toPrimitive(arg, "string"); return autocomplete_typeof(key) === "symbol" ? key : String(key); }
function autocomplete_toPrimitive(input, hint) { if (autocomplete_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (autocomplete_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }











var instancesCount = 0;
function autocomplete_autocomplete(options) {
  var _createEffectWrapper = createEffectWrapper(),
    runEffect = _createEffectWrapper.runEffect,
    cleanupEffects = _createEffectWrapper.cleanupEffects,
    runEffects = _createEffectWrapper.runEffects;
  var _createReactiveWrappe = createReactiveWrapper(),
    reactive = _createReactiveWrappe.reactive,
    runReactives = _createReactiveWrappe.runReactives;
  var hasNoResultsSourceTemplateRef = createRef(false);
  var optionsRef = createRef(options);
  var onStateChangeRef = createRef(undefined);
  var props = reactive(function () {
    return getDefaultOptions(optionsRef.current);
  });
  var isDetached = reactive(function () {
    return props.value.core.environment.matchMedia(props.value.renderer.detachedMediaQuery).matches;
  });
  var autocomplete = reactive(function () {
    return createAutocomplete(autocomplete_objectSpread(autocomplete_objectSpread({}, props.value.core), {}, {
      onStateChange: function onStateChange(params) {
        var _onStateChangeRef$cur, _props$value$core$onS, _props$value$core;
        hasNoResultsSourceTemplateRef.current = params.state.collections.some(function (collection) {
          return collection.source.templates.noResults;
        });
        (_onStateChangeRef$cur = onStateChangeRef.current) === null || _onStateChangeRef$cur === void 0 ? void 0 : _onStateChangeRef$cur.call(onStateChangeRef, params);
        (_props$value$core$onS = (_props$value$core = props.value.core).onStateChange) === null || _props$value$core$onS === void 0 ? void 0 : _props$value$core$onS.call(_props$value$core, params);
      },
      shouldPanelOpen: optionsRef.current.shouldPanelOpen || function (_ref) {
        var state = _ref.state;
        if (isDetached.value) {
          return true;
        }
        var hasItems = getItemsCount(state) > 0;
        if (!props.value.core.openOnFocus && !state.query) {
          return hasItems;
        }
        var hasNoResultsTemplate = Boolean(hasNoResultsSourceTemplateRef.current || props.value.renderer.renderNoResults);
        return !hasItems && hasNoResultsTemplate || hasItems;
      },
      __autocomplete_metadata: {
        userAgents: esm_userAgents/* .userAgents */.e,
        options: options
      }
    }));
  });
  var lastStateRef = createRef(autocomplete_objectSpread({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: '',
    activeItemId: null,
    status: 'idle'
  }, props.value.core.initialState));
  var propGetters = {
    getEnvironmentProps: props.value.renderer.getEnvironmentProps,
    getFormProps: props.value.renderer.getFormProps,
    getInputProps: props.value.renderer.getInputProps,
    getItemProps: props.value.renderer.getItemProps,
    getLabelProps: props.value.renderer.getLabelProps,
    getListProps: props.value.renderer.getListProps,
    getPanelProps: props.value.renderer.getPanelProps,
    getRootProps: props.value.renderer.getRootProps
  };
  var autocompleteScopeApi = {
    setActiveItemId: autocomplete.value.setActiveItemId,
    setQuery: autocomplete.value.setQuery,
    setCollections: autocomplete.value.setCollections,
    setIsOpen: autocomplete.value.setIsOpen,
    setStatus: autocomplete.value.setStatus,
    setContext: autocomplete.value.setContext,
    refresh: autocomplete.value.refresh,
    navigator: autocomplete.value.navigator
  };
  var html = reactive(function () {
    return htm_module.bind(props.value.renderer.renderer.createElement);
  });
  var dom = reactive(function () {
    return createAutocompleteDom({
      autocomplete: autocomplete.value,
      autocompleteScopeApi: autocompleteScopeApi,
      classNames: props.value.renderer.classNames,
      environment: props.value.core.environment,
      isDetached: isDetached.value,
      placeholder: props.value.core.placeholder,
      propGetters: propGetters,
      setIsModalOpen: setIsModalOpen,
      state: lastStateRef.current,
      translations: props.value.renderer.translations
    });
  });
  function setPanelPosition() {
    setProperties(dom.value.panel, {
      style: isDetached.value ? {} : getPanelPlacementStyle({
        panelPlacement: props.value.renderer.panelPlacement,
        container: dom.value.root,
        form: dom.value.form,
        environment: props.value.core.environment
      })
    });
  }
  function scheduleRender(state) {
    lastStateRef.current = state;
    var renderProps = {
      autocomplete: autocomplete.value,
      autocompleteScopeApi: autocompleteScopeApi,
      classNames: props.value.renderer.classNames,
      components: props.value.renderer.components,
      container: props.value.renderer.container,
      html: html.value,
      dom: dom.value,
      panelContainer: isDetached.value ? dom.value.detachedContainer : props.value.renderer.panelContainer,
      propGetters: propGetters,
      state: lastStateRef.current,
      renderer: props.value.renderer.renderer
    };
    var render = !getItemsCount(state) && !hasNoResultsSourceTemplateRef.current && props.value.renderer.renderNoResults || props.value.renderer.render;
    renderSearchBox(renderProps);
    renderPanel(render, renderProps);
  }
  runEffect(function () {
    var environmentProps = autocomplete.value.getEnvironmentProps({
      formElement: dom.value.form,
      panelElement: dom.value.panel,
      inputElement: dom.value.input
    });
    setProperties(props.value.core.environment, environmentProps);
    return function () {
      setProperties(props.value.core.environment, Object.keys(environmentProps).reduce(function (acc, key) {
        return autocomplete_objectSpread(autocomplete_objectSpread({}, acc), {}, autocomplete_defineProperty({}, key, undefined));
      }, {}));
    };
  });
  runEffect(function () {
    var panelContainerElement = isDetached.value ? props.value.core.environment.document.body : props.value.renderer.panelContainer;
    var panelElement = isDetached.value ? dom.value.detachedOverlay : dom.value.panel;
    if (isDetached.value && lastStateRef.current.isOpen) {
      setIsModalOpen(true);
    }
    scheduleRender(lastStateRef.current);
    return function () {
      if (panelContainerElement.contains(panelElement)) {
        panelContainerElement.removeChild(panelElement);
        panelContainerElement.classList.remove('aa-Detached');
      }
    };
  });
  runEffect(function () {
    var containerElement = props.value.renderer.container;
    containerElement.appendChild(dom.value.root);
    return function () {
      containerElement.removeChild(dom.value.root);
    };
  });
  runEffect(function () {
    var debouncedRender = debounce(function (_ref2) {
      var state = _ref2.state;
      scheduleRender(state);
    }, 0);
    onStateChangeRef.current = function (_ref3) {
      var state = _ref3.state,
        prevState = _ref3.prevState;
      if (isDetached.value && prevState.isOpen !== state.isOpen) {
        setIsModalOpen(state.isOpen);
      }

      // The outer DOM might have changed since the last time the panel was
      // positioned. The layout might have shifted vertically for instance.
      // It's therefore safer to re-calculate the panel position before opening
      // it again.
      if (!isDetached.value && state.isOpen && !prevState.isOpen) {
        setPanelPosition();
      }

      // We scroll to the top of the panel whenever the query changes (i.e. new
      // results come in) so that users don't have to.
      if (state.query !== prevState.query) {
        var scrollablePanels = props.value.core.environment.document.querySelectorAll('.aa-Panel--scrollable');
        scrollablePanels.forEach(function (scrollablePanel) {
          if (scrollablePanel.scrollTop !== 0) {
            scrollablePanel.scrollTop = 0;
          }
        });
      }
      debouncedRender({
        state: state
      });
    };
    return function () {
      onStateChangeRef.current = undefined;
    };
  });
  runEffect(function () {
    var onResize = debounce(function () {
      var previousIsDetached = isDetached.value;
      isDetached.value = props.value.core.environment.matchMedia(props.value.renderer.detachedMediaQuery).matches;
      if (previousIsDetached !== isDetached.value) {
        update({});
      } else {
        requestAnimationFrame(setPanelPosition);
      }
    }, 20);
    props.value.core.environment.addEventListener('resize', onResize);
    return function () {
      props.value.core.environment.removeEventListener('resize', onResize);
    };
  });
  runEffect(function () {
    if (!isDetached.value) {
      return function () {};
    }
    function toggleModalClassname(isActive) {
      dom.value.detachedContainer.classList.toggle('aa-DetachedContainer--modal', isActive);
    }
    function onChange(event) {
      toggleModalClassname(event.matches);
    }
    var isModalDetachedMql = props.value.core.environment.matchMedia(getComputedStyle(props.value.core.environment.document.documentElement).getPropertyValue('--aa-detached-modal-media-query'));
    toggleModalClassname(isModalDetachedMql.matches);

    // Prior to Safari 14, `MediaQueryList` isn't based on `EventTarget`,
    // so we must use `addListener` and `removeListener` to observe media query lists.
    // See https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener
    var hasModernEventListener = Boolean(isModalDetachedMql.addEventListener);
    hasModernEventListener ? isModalDetachedMql.addEventListener('change', onChange) : isModalDetachedMql.addListener(onChange);
    return function () {
      hasModernEventListener ? isModalDetachedMql.removeEventListener('change', onChange) : isModalDetachedMql.removeListener(onChange);
    };
  });
  runEffect(function () {
    requestAnimationFrame(setPanelPosition);
    return function () {};
  });
  function destroy() {
    instancesCount--;
    cleanupEffects();
  }
  function update() {
    var updatedOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    cleanupEffects();
    var _props$value$renderer = props.value.renderer,
      components = _props$value$renderer.components,
      rendererProps = autocomplete_objectWithoutProperties(_props$value$renderer, autocomplete_excluded);
    optionsRef.current = mergeDeep(rendererProps, props.value.core, {
      // We need to filter out default components so they can be replaced with
      // a new `renderer`, without getting rid of user components.
      // @MAJOR Deal with registering components with the same name as the
      // default ones. If we disallow overriding default components, we'd just
      // need to pass all `components` here.
      components: pickBy(components, function (_ref4) {
        var value = _ref4.value;
        return !value.hasOwnProperty('__autocomplete_componentName');
      }),
      initialState: lastStateRef.current
    }, updatedOptions);
    runReactives();
    runEffects();
    autocomplete.value.refresh().then(function () {
      scheduleRender(lastStateRef.current);
    });
  }
  function setIsModalOpen(value) {
    var prevValue = props.value.core.environment.document.body.contains(dom.value.detachedOverlay);
    if (value === prevValue) {
      return;
    }
    if (value) {
      props.value.core.environment.document.body.appendChild(dom.value.detachedOverlay);
      props.value.core.environment.document.body.classList.add('aa-Detached');
      dom.value.input.focus();
    } else {
      props.value.core.environment.document.body.removeChild(dom.value.detachedOverlay);
      props.value.core.environment.document.body.classList.remove('aa-Detached');
    }
  }
   false ? 0 : void 0;
  instancesCount++;
  return autocomplete_objectSpread(autocomplete_objectSpread({}, autocompleteScopeApi), {}, {
    update: update,
    destroy: destroy
  });
}

}),
9287: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ getAlgoliaResults)
});

;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createRequester.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function createRequester(fetcher, requesterId) {
  function execute(fetcherParams) {
    return fetcher({
      searchClient: fetcherParams.searchClient,
      queries: fetcherParams.requests.map(function (x) {
        return x.query;
      })
    }).then(function (responses) {
      return responses.map(function (response, index) {
        var _fetcherParams$reques = fetcherParams.requests[index],
          sourceId = _fetcherParams$reques.sourceId,
          transformResponse = _fetcherParams$reques.transformResponse;
        return {
          items: response,
          sourceId: sourceId,
          transformResponse: transformResponse
        };
      });
    });
  }
  return function createSpecifiedRequester(requesterParams) {
    return function requester(requestParams) {
      return _objectSpread(_objectSpread({
        requesterId: requesterId,
        execute: execute
      }, requesterParams), requestParams);
    };
  };
}
// EXTERNAL MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js
var esm_userAgents = __webpack_require__(58951);
// EXTERNAL MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js
var invariant = __webpack_require__(42880);
// EXTERNAL MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/constants/index.js
var constants = __webpack_require__(86118);
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/utils/getAppIdAndApiKey.js
// typed as any, since it accepts the _real_ js clients, not the interface we otherwise expect
function getAppIdAndApiKey(searchClient) {
  var transporter = searchClient.transporter || {};
  var headers = transporter.headers || transporter.baseHeaders || {};
  var queryParameters = transporter.queryParameters || transporter.baseQueryParameters || {};
  var APP_ID = 'x-algolia-application-id';
  var API_KEY = 'x-algolia-api-key';
  var appId = headers[APP_ID] || queryParameters[APP_ID];
  var apiKey = headers[API_KEY] || queryParameters[API_KEY];
  return {
    appId: appId,
    apiKey: apiKey
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/search/fetchAlgoliaResults.js
function fetchAlgoliaResults_typeof(obj) { "@babel/helpers - typeof"; return fetchAlgoliaResults_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, fetchAlgoliaResults_typeof(obj); }
var _excluded = ["params"];
function fetchAlgoliaResults_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function fetchAlgoliaResults_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? fetchAlgoliaResults_ownKeys(Object(source), !0).forEach(function (key) { fetchAlgoliaResults_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : fetchAlgoliaResults_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function fetchAlgoliaResults_defineProperty(obj, key, value) { key = fetchAlgoliaResults_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function fetchAlgoliaResults_toPropertyKey(arg) { var key = fetchAlgoliaResults_toPrimitive(arg, "string"); return fetchAlgoliaResults_typeof(key) === "symbol" ? key : String(key); }
function fetchAlgoliaResults_toPrimitive(input, hint) { if (fetchAlgoliaResults_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (fetchAlgoliaResults_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



function fetchAlgoliaResults(_ref) {
  var searchClient = _ref.searchClient,
    queries = _ref.queries,
    _ref$userAgents = _ref.userAgents,
    userAgents = _ref$userAgents === void 0 ? [] : _ref$userAgents;
  if (typeof searchClient.addAlgoliaAgent === 'function') {
    var algoliaAgents = [].concat(_toConsumableArray(esm_userAgents/* .userAgents */.e), _toConsumableArray(userAgents));
    algoliaAgents.forEach(function (_ref2) {
      var segment = _ref2.segment,
        version = _ref2.version;
      searchClient.addAlgoliaAgent(segment, version);
    });
  }
  var _getAppIdAndApiKey = getAppIdAndApiKey(searchClient),
    appId = _getAppIdAndApiKey.appId,
    apiKey = _getAppIdAndApiKey.apiKey;
  (0,invariant/* .invariant */.V)(Boolean(appId), 'The Algolia `appId` was not accessible from the searchClient passed.');
  (0,invariant/* .invariant */.V)(Boolean(apiKey), 'The Algolia `apiKey` was not accessible from the searchClient passed.');
  return searchClient.search(queries.map(function (searchParameters) {
    var params = searchParameters.params,
      headers = _objectWithoutProperties(searchParameters, _excluded);
    return fetchAlgoliaResults_objectSpread(fetchAlgoliaResults_objectSpread({}, headers), {}, {
      params: fetchAlgoliaResults_objectSpread({
        hitsPerPage: 5,
        highlightPreTag: constants/* .HIGHLIGHT_PRE_TAG */.E,
        highlightPostTag: constants/* .HIGHLIGHT_POST_TAG */.F
      }, params)
    });
  })).then(function (response) {
    return response.results.map(function (result, resultIndex) {
      var _result$hits;
      return fetchAlgoliaResults_objectSpread(fetchAlgoliaResults_objectSpread({}, result), {}, {
        hits: (_result$hits = result.hits) === null || _result$hits === void 0 ? void 0 : _result$hits.map(function (hit) {
          return fetchAlgoliaResults_objectSpread(fetchAlgoliaResults_objectSpread({}, hit), {}, {
            // Bring support for the Insights plugin.
            __autocomplete_indexName: result.index || queries[resultIndex].indexName,
            __autocomplete_queryID: result.queryID,
            __autocomplete_algoliaCredentials: {
              appId: appId,
              apiKey: apiKey
            }
          });
        })
      });
    });
  });
}
// EXTERNAL MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/userAgents.js
var dist_esm_userAgents = __webpack_require__(67085);
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/requesters/createAlgoliaRequester.js
function createAlgoliaRequester_typeof(obj) { "@babel/helpers - typeof"; return createAlgoliaRequester_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, createAlgoliaRequester_typeof(obj); }
function createAlgoliaRequester_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function createAlgoliaRequester_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? createAlgoliaRequester_ownKeys(Object(source), !0).forEach(function (key) { createAlgoliaRequester_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : createAlgoliaRequester_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createAlgoliaRequester_defineProperty(obj, key, value) { key = createAlgoliaRequester_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function createAlgoliaRequester_toPropertyKey(arg) { var key = createAlgoliaRequester_toPrimitive(arg, "string"); return createAlgoliaRequester_typeof(key) === "symbol" ? key : String(key); }
function createAlgoliaRequester_toPrimitive(input, hint) { if (createAlgoliaRequester_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (createAlgoliaRequester_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var createAlgoliaRequester = createRequester(function (params) {
  return fetchAlgoliaResults(createAlgoliaRequester_objectSpread(createAlgoliaRequester_objectSpread({}, params), {}, {
    userAgents: dist_esm_userAgents/* .userAgents */.e
  }));
}, 'algolia');
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/requesters/getAlgoliaResults.js


/**
 * Retrieves Algolia results from multiple indices.
 */
var getAlgoliaResults = createAlgoliaRequester({
  transformResponse: function transformResponse(response) {
    return response.hits;
  }
});

}),
67085: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  e: () => (userAgents)
});
/* ESM import */var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64296);

var userAgents = [{
  segment: 'autocomplete-js',
  version: _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__/* .version */.r
}];

}),
86118: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  E: () => (HIGHLIGHT_PRE_TAG),
  F: () => (HIGHLIGHT_POST_TAG)
});
var HIGHLIGHT_PRE_TAG = '__aa-highlight__';
var HIGHLIGHT_POST_TAG = '__/aa-highlight__';

}),
42880: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  V: () => (invariant)
});
/**
 * Throws an error if the condition is not met in development mode.
 * This is used to make development a better experience to provide guidance as
 * to where the error comes from.
 */
function invariant(condition, message) {
  if (true) {
    return;
  }
  if (!condition) {
    throw new Error("[Autocomplete] ".concat(typeof message === 'function' ? message() : message));
  }
}

}),
58951: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  e: () => (userAgents)
});
/* ESM import */var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64296);

var userAgents = [{
  segment: 'autocomplete-core',
  version: _version__WEBPACK_IMPORTED_MODULE_0__/* .version */.r
}];

}),
64296: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  r: () => (version)
});
var version = '1.18.1';

}),
83784: (function () {
// extracted by css-extract-rspack-plugin


}),

}]);