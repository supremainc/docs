"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["247"], {
"4349": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ liteClient)
});

// UNUSED EXPORTS: apiClientVersion

;// CONCATENATED MODULE: ./node_modules/@algolia/requester-browser-xhr/dist/requester.xhr.js
function m(){function r(t){return new Promise(s=>{let e=new XMLHttpRequest;e.open(t.method,t.url,!0),Object.keys(t.headers).forEach(n=>e.setRequestHeader(n,t.headers[n]));let i=(n,a)=>setTimeout(()=>{e.abort(),s({status:0,content:a,isTimedOut:!0})},n),u=i(t.connectTimeout,"Connection timeout"),o;e.onreadystatechange=()=>{e.readyState>e.OPENED&&o===void 0&&(clearTimeout(u),o=i(t.responseTimeout,"Socket timeout"))},e.onerror=()=>{e.status===0&&(clearTimeout(u),clearTimeout(o),s({content:e.responseText||"Network request failed",status:e.status,isTimedOut:!1}))},e.onload=()=>{clearTimeout(u),clearTimeout(o),s({content:e.responseText,status:e.status,isTimedOut:!1})},e.send(t.data)})}return{send:r}}
//# sourceMappingURL=requester.xhr.js.map
;// CONCATENATED MODULE: ./node_modules/@algolia/client-common/dist/common.js
// src/cache/createBrowserLocalStorageCache.ts
function createBrowserLocalStorageCache(options) {
  let storage;
  const namespaceKey = `algolia-client-js-${options.key}`;
  function getStorage() {
    if (storage === void 0) {
      storage = options.localStorage || window.localStorage;
    }
    return storage;
  }
  function getNamespace() {
    return JSON.parse(getStorage().getItem(namespaceKey) || "{}");
  }
  function setNamespace(namespace) {
    getStorage().setItem(namespaceKey, JSON.stringify(namespace));
  }
  function removeOutdatedCacheItems() {
    const timeToLive = options.timeToLive ? options.timeToLive * 1e3 : null;
    const namespace = getNamespace();
    const filteredNamespaceWithoutOldFormattedCacheItems = Object.fromEntries(
      Object.entries(namespace).filter(([, cacheItem]) => {
        return cacheItem.timestamp !== void 0;
      })
    );
    setNamespace(filteredNamespaceWithoutOldFormattedCacheItems);
    if (!timeToLive) {
      return;
    }
    const filteredNamespaceWithoutExpiredItems = Object.fromEntries(
      Object.entries(filteredNamespaceWithoutOldFormattedCacheItems).filter(([, cacheItem]) => {
        const currentTimestamp = (/* @__PURE__ */ new Date()).getTime();
        const isExpired = cacheItem.timestamp + timeToLive < currentTimestamp;
        return !isExpired;
      })
    );
    setNamespace(filteredNamespaceWithoutExpiredItems);
  }
  return {
    get(key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      return Promise.resolve().then(() => {
        removeOutdatedCacheItems();
        return getNamespace()[JSON.stringify(key)];
      }).then((value) => {
        return Promise.all([value ? value.value : defaultValue(), value !== void 0]);
      }).then(([value, exists]) => {
        return Promise.all([value, exists || events.miss(value)]);
      }).then(([value]) => value);
    },
    set(key, value) {
      return Promise.resolve().then(() => {
        const namespace = getNamespace();
        namespace[JSON.stringify(key)] = {
          timestamp: (/* @__PURE__ */ new Date()).getTime(),
          value
        };
        getStorage().setItem(namespaceKey, JSON.stringify(namespace));
        return value;
      });
    },
    delete(key) {
      return Promise.resolve().then(() => {
        const namespace = getNamespace();
        delete namespace[JSON.stringify(key)];
        getStorage().setItem(namespaceKey, JSON.stringify(namespace));
      });
    },
    clear() {
      return Promise.resolve().then(() => {
        getStorage().removeItem(namespaceKey);
      });
    }
  };
}

// src/cache/createNullCache.ts
function createNullCache() {
  return {
    get(_key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      const value = defaultValue();
      return value.then((result) => Promise.all([result, events.miss(result)])).then(([result]) => result);
    },
    set(_key, value) {
      return Promise.resolve(value);
    },
    delete(_key) {
      return Promise.resolve();
    },
    clear() {
      return Promise.resolve();
    }
  };
}

// src/cache/createFallbackableCache.ts
function createFallbackableCache(options) {
  const caches = [...options.caches];
  const current = caches.shift();
  if (current === void 0) {
    return createNullCache();
  }
  return {
    get(key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      return current.get(key, defaultValue, events).catch(() => {
        return createFallbackableCache({ caches }).get(key, defaultValue, events);
      });
    },
    set(key, value) {
      return current.set(key, value).catch(() => {
        return createFallbackableCache({ caches }).set(key, value);
      });
    },
    delete(key) {
      return current.delete(key).catch(() => {
        return createFallbackableCache({ caches }).delete(key);
      });
    },
    clear() {
      return current.clear().catch(() => {
        return createFallbackableCache({ caches }).clear();
      });
    }
  };
}

// src/cache/createMemoryCache.ts
function createMemoryCache(options = { serializable: true }) {
  let cache = {};
  return {
    get(key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      const keyAsString = JSON.stringify(key);
      if (keyAsString in cache) {
        return Promise.resolve(options.serializable ? JSON.parse(cache[keyAsString]) : cache[keyAsString]);
      }
      const promise = defaultValue();
      return promise.then((value) => events.miss(value)).then(() => promise);
    },
    set(key, value) {
      cache[JSON.stringify(key)] = options.serializable ? JSON.stringify(value) : value;
      return Promise.resolve(value);
    },
    delete(key) {
      delete cache[JSON.stringify(key)];
      return Promise.resolve();
    },
    clear() {
      cache = {};
      return Promise.resolve();
    }
  };
}

// src/constants.ts
var DEFAULT_CONNECT_TIMEOUT_BROWSER = 1e3;
var DEFAULT_READ_TIMEOUT_BROWSER = 2e3;
var DEFAULT_WRITE_TIMEOUT_BROWSER = 3e4;
var DEFAULT_CONNECT_TIMEOUT_NODE = 2e3;
var DEFAULT_READ_TIMEOUT_NODE = 5e3;
var DEFAULT_WRITE_TIMEOUT_NODE = 3e4;

// src/createAlgoliaAgent.ts
function createAlgoliaAgent(version) {
  const algoliaAgent = {
    value: `Algolia for JavaScript (${version})`,
    add(options) {
      const addedAlgoliaAgent = `; ${options.segment}${options.version !== void 0 ? ` (${options.version})` : ""}`;
      if (algoliaAgent.value.indexOf(addedAlgoliaAgent) === -1) {
        algoliaAgent.value = `${algoliaAgent.value}${addedAlgoliaAgent}`;
      }
      return algoliaAgent;
    }
  };
  return algoliaAgent;
}

// src/createAuth.ts
function createAuth(appId, apiKey, authMode = "WithinHeaders") {
  const credentials = {
    "x-algolia-api-key": apiKey,
    "x-algolia-application-id": appId
  };
  return {
    headers() {
      return authMode === "WithinHeaders" ? credentials : {};
    },
    queryParameters() {
      return authMode === "WithinQueryParameters" ? credentials : {};
    }
  };
}

// src/createIterablePromise.ts
function createIterablePromise({
  func,
  validate,
  aggregator,
  error,
  timeout = () => 0
}) {
  const retry = (previousResponse) => {
    return new Promise((resolve, reject) => {
      func(previousResponse).then(async (response) => {
        if (aggregator) {
          await aggregator(response);
        }
        if (await validate(response)) {
          return resolve(response);
        }
        if (error && await error.validate(response)) {
          return reject(new Error(await error.message(response)));
        }
        return setTimeout(
          () => {
            retry(response).then(resolve).catch(reject);
          },
          await timeout()
        );
      }).catch((err) => {
        reject(err);
      });
    });
  };
  return retry();
}

// src/getAlgoliaAgent.ts
function getAlgoliaAgent({ algoliaAgents, client, version }) {
  const defaultAlgoliaAgent = createAlgoliaAgent(version).add({
    segment: client,
    version
  });
  algoliaAgents.forEach((algoliaAgent) => defaultAlgoliaAgent.add(algoliaAgent));
  return defaultAlgoliaAgent;
}

// src/logger/createNullLogger.ts
function createNullLogger() {
  return {
    debug(_message, _args) {
      return Promise.resolve();
    },
    info(_message, _args) {
      return Promise.resolve();
    },
    error(_message, _args) {
      return Promise.resolve();
    }
  };
}

// src/transporter/createStatefulHost.ts
var EXPIRATION_DELAY = 2 * 60 * 1e3;
function createStatefulHost(host, status = "up") {
  const lastUpdate = Date.now();
  function isUp() {
    return status === "up" || Date.now() - lastUpdate > EXPIRATION_DELAY;
  }
  function isTimedOut() {
    return status === "timed out" && Date.now() - lastUpdate <= EXPIRATION_DELAY;
  }
  return { ...host, status, lastUpdate, isUp, isTimedOut };
}

// src/transporter/errors.ts
var AlgoliaError = class extends Error {
  name = "AlgoliaError";
  constructor(message, name) {
    super(message);
    if (name) {
      this.name = name;
    }
  }
};
var ErrorWithStackTrace = class extends AlgoliaError {
  stackTrace;
  constructor(message, stackTrace, name) {
    super(message, name);
    this.stackTrace = stackTrace;
  }
};
var RetryError = class extends ErrorWithStackTrace {
  constructor(stackTrace) {
    super(
      "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support.",
      stackTrace,
      "RetryError"
    );
  }
};
var ApiError = class extends ErrorWithStackTrace {
  status;
  constructor(message, status, stackTrace, name = "ApiError") {
    super(message, stackTrace, name);
    this.status = status;
  }
};
var DeserializationError = class extends AlgoliaError {
  response;
  constructor(message, response) {
    super(message, "DeserializationError");
    this.response = response;
  }
};
var DetailedApiError = class extends ApiError {
  error;
  constructor(message, status, error, stackTrace) {
    super(message, status, stackTrace, "DetailedApiError");
    this.error = error;
  }
};

// src/transporter/helpers.ts
function shuffle(array) {
  const shuffledArray = array;
  for (let c = array.length - 1; c > 0; c--) {
    const b = Math.floor(Math.random() * (c + 1));
    const a = array[c];
    shuffledArray[c] = array[b];
    shuffledArray[b] = a;
  }
  return shuffledArray;
}
function serializeUrl(host, path, queryParameters) {
  const queryParametersAsString = serializeQueryParameters(queryParameters);
  let url = `${host.protocol}://${host.url}${host.port ? `:${host.port}` : ""}/${path.charAt(0) === "/" ? path.substring(1) : path}`;
  if (queryParametersAsString.length) {
    url += `?${queryParametersAsString}`;
  }
  return url;
}
function serializeQueryParameters(parameters) {
  return Object.keys(parameters).filter((key) => parameters[key] !== void 0).sort().map(
    (key) => `${key}=${encodeURIComponent(
      Object.prototype.toString.call(parameters[key]) === "[object Array]" ? parameters[key].join(",") : parameters[key]
    ).replace(/\+/g, "%20")}`
  ).join("&");
}
function serializeData(request, requestOptions) {
  if (request.method === "GET" || request.data === void 0 && requestOptions.data === void 0) {
    return void 0;
  }
  const data = Array.isArray(request.data) ? request.data : { ...request.data, ...requestOptions.data };
  return JSON.stringify(data);
}
function serializeHeaders(baseHeaders, requestHeaders, requestOptionsHeaders) {
  const headers = {
    Accept: "application/json",
    ...baseHeaders,
    ...requestHeaders,
    ...requestOptionsHeaders
  };
  const serializedHeaders = {};
  Object.keys(headers).forEach((header) => {
    const value = headers[header];
    serializedHeaders[header.toLowerCase()] = value;
  });
  return serializedHeaders;
}
function deserializeSuccess(response) {
  try {
    return JSON.parse(response.content);
  } catch (e) {
    throw new DeserializationError(e.message, response);
  }
}
function deserializeFailure({ content, status }, stackFrame) {
  try {
    const parsed = JSON.parse(content);
    if ("error" in parsed) {
      return new DetailedApiError(parsed.message, status, parsed.error, stackFrame);
    }
    return new ApiError(parsed.message, status, stackFrame);
  } catch {
  }
  return new ApiError(content, status, stackFrame);
}

// src/transporter/responses.ts
function isNetworkError({ isTimedOut, status }) {
  return !isTimedOut && ~~status === 0;
}
function isRetryable({ isTimedOut, status }) {
  return isTimedOut || isNetworkError({ isTimedOut, status }) || ~~(status / 100) !== 2 && ~~(status / 100) !== 4;
}
function isSuccess({ status }) {
  return ~~(status / 100) === 2;
}

// src/transporter/stackTrace.ts
function stackTraceWithoutCredentials(stackTrace) {
  return stackTrace.map((stackFrame) => stackFrameWithoutCredentials(stackFrame));
}
function stackFrameWithoutCredentials(stackFrame) {
  const modifiedHeaders = stackFrame.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return {
    ...stackFrame,
    request: {
      ...stackFrame.request,
      headers: {
        ...stackFrame.request.headers,
        ...modifiedHeaders
      }
    }
  };
}

// src/transporter/createTransporter.ts
function createTransporter({
  hosts,
  hostsCache,
  baseHeaders,
  logger,
  baseQueryParameters,
  algoliaAgent,
  timeouts,
  requester,
  requestsCache,
  responsesCache
}) {
  async function createRetryableOptions(compatibleHosts) {
    const statefulHosts = await Promise.all(
      compatibleHosts.map((compatibleHost) => {
        return hostsCache.get(compatibleHost, () => {
          return Promise.resolve(createStatefulHost(compatibleHost));
        });
      })
    );
    const hostsUp = statefulHosts.filter((host) => host.isUp());
    const hostsTimedOut = statefulHosts.filter((host) => host.isTimedOut());
    const hostsAvailable = [...hostsUp, ...hostsTimedOut];
    const compatibleHostsAvailable = hostsAvailable.length > 0 ? hostsAvailable : compatibleHosts;
    return {
      hosts: compatibleHostsAvailable,
      getTimeout(timeoutsCount, baseTimeout) {
        const timeoutMultiplier = hostsTimedOut.length === 0 && timeoutsCount === 0 ? 1 : hostsTimedOut.length + 3 + timeoutsCount;
        return timeoutMultiplier * baseTimeout;
      }
    };
  }
  async function retryableRequest(request, requestOptions, isRead = true) {
    const stackTrace = [];
    const data = serializeData(request, requestOptions);
    const headers = serializeHeaders(baseHeaders, request.headers, requestOptions.headers);
    const dataQueryParameters = request.method === "GET" ? {
      ...request.data,
      ...requestOptions.data
    } : {};
    const queryParameters = {
      ...baseQueryParameters,
      ...request.queryParameters,
      ...dataQueryParameters
    };
    if (algoliaAgent.value) {
      queryParameters["x-algolia-agent"] = algoliaAgent.value;
    }
    if (requestOptions && requestOptions.queryParameters) {
      for (const key of Object.keys(requestOptions.queryParameters)) {
        if (!requestOptions.queryParameters[key] || Object.prototype.toString.call(requestOptions.queryParameters[key]) === "[object Object]") {
          queryParameters[key] = requestOptions.queryParameters[key];
        } else {
          queryParameters[key] = requestOptions.queryParameters[key].toString();
        }
      }
    }
    let timeoutsCount = 0;
    const retry = async (retryableHosts, getTimeout) => {
      const host = retryableHosts.pop();
      if (host === void 0) {
        throw new RetryError(stackTraceWithoutCredentials(stackTrace));
      }
      const timeout = { ...timeouts, ...requestOptions.timeouts };
      const payload = {
        data,
        headers,
        method: request.method,
        url: serializeUrl(host, request.path, queryParameters),
        connectTimeout: getTimeout(timeoutsCount, timeout.connect),
        responseTimeout: getTimeout(timeoutsCount, isRead ? timeout.read : timeout.write)
      };
      const pushToStackTrace = (response2) => {
        const stackFrame = {
          request: payload,
          response: response2,
          host,
          triesLeft: retryableHosts.length
        };
        stackTrace.push(stackFrame);
        return stackFrame;
      };
      const response = await requester.send(payload);
      if (isRetryable(response)) {
        const stackFrame = pushToStackTrace(response);
        if (response.isTimedOut) {
          timeoutsCount++;
        }
        logger.info("Retryable failure", stackFrameWithoutCredentials(stackFrame));
        await hostsCache.set(host, createStatefulHost(host, response.isTimedOut ? "timed out" : "down"));
        return retry(retryableHosts, getTimeout);
      }
      if (isSuccess(response)) {
        return deserializeSuccess(response);
      }
      pushToStackTrace(response);
      throw deserializeFailure(response, stackTrace);
    };
    const compatibleHosts = hosts.filter(
      (host) => host.accept === "readWrite" || (isRead ? host.accept === "read" : host.accept === "write")
    );
    const options = await createRetryableOptions(compatibleHosts);
    return retry([...options.hosts].reverse(), options.getTimeout);
  }
  function createRequest(request, requestOptions = {}) {
    const isRead = request.useReadTransporter || request.method === "GET";
    if (!isRead) {
      return retryableRequest(request, requestOptions, isRead);
    }
    const createRetryableRequest = () => {
      return retryableRequest(request, requestOptions);
    };
    const cacheable = requestOptions.cacheable || request.cacheable;
    if (cacheable !== true) {
      return createRetryableRequest();
    }
    const key = {
      request,
      requestOptions,
      transporter: {
        queryParameters: baseQueryParameters,
        headers: baseHeaders
      }
    };
    return responsesCache.get(
      key,
      () => {
        return requestsCache.get(
          key,
          () => (
            /**
             * Finally, if there is no request in progress with the same key,
             * this `createRetryableRequest()` will actually trigger the
             * retryable request.
             */
            requestsCache.set(key, createRetryableRequest()).then(
              (response) => Promise.all([requestsCache.delete(key), response]),
              (err) => Promise.all([requestsCache.delete(key), Promise.reject(err)])
            ).then(([_, response]) => response)
          )
        );
      },
      {
        /**
         * Of course, once we get this response back from the server, we
         * tell response cache to actually store the received response
         * to be used later.
         */
        miss: (response) => responsesCache.set(key, response)
      }
    );
  }
  return {
    hostsCache,
    requester,
    timeouts,
    logger,
    algoliaAgent,
    baseHeaders,
    baseQueryParameters,
    hosts,
    request: createRequest,
    requestsCache,
    responsesCache
  };
}

// src/types/logger.ts
var LogLevelEnum = (/* unused pure expression or super */ null && ({
  Debug: 1,
  Info: 2,
  Error: 3
}));

//# sourceMappingURL=common.js.map
;// CONCATENATED MODULE: ./node_modules/algoliasearch/dist/lite/builds/browser.js
// lite/builds/browser.ts



// lite/src/liteClient.ts

var apiClientVersion = "5.20.2";
function getDefaultHosts(appId) {
  return [
    {
      url: `${appId}-dsn.algolia.net`,
      accept: "read",
      protocol: "https"
    },
    {
      url: `${appId}.algolia.net`,
      accept: "write",
      protocol: "https"
    }
  ].concat(
    shuffle([
      {
        url: `${appId}-1.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      },
      {
        url: `${appId}-2.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      },
      {
        url: `${appId}-3.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      }
    ])
  );
}
function createLiteClient({
  appId: appIdOption,
  apiKey: apiKeyOption,
  authMode,
  algoliaAgents,
  ...options
}) {
  const auth = createAuth(appIdOption, apiKeyOption, authMode);
  const transporter = createTransporter({
    hosts: getDefaultHosts(appIdOption),
    ...options,
    algoliaAgent: getAlgoliaAgent({
      algoliaAgents,
      client: "Lite",
      version: apiClientVersion
    }),
    baseHeaders: {
      "content-type": "text/plain",
      ...auth.headers(),
      ...options.baseHeaders
    },
    baseQueryParameters: {
      ...auth.queryParameters(),
      ...options.baseQueryParameters
    }
  });
  return {
    transporter,
    /**
     * The `appId` currently in use.
     */
    appId: appIdOption,
    /**
     * The `apiKey` currently in use.
     */
    apiKey: apiKeyOption,
    /**
     * Clears the cache of the transporter for the `requestsCache` and `responsesCache` properties.
     */
    clearCache() {
      return Promise.all([transporter.requestsCache.clear(), transporter.responsesCache.clear()]).then(() => void 0);
    },
    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua() {
      return transporter.algoliaAgent.value;
    },
    /**
     * Adds a `segment` to the `x-algolia-agent` sent with every requests.
     *
     * @param segment - The algolia agent (user-agent) segment to add.
     * @param version - The version of the agent.
     */
    addAlgoliaAgent(segment, version) {
      transporter.algoliaAgent.add({ segment, version });
    },
    /**
     * Helper method to switch the API key used to authenticate the requests.
     *
     * @param params - Method params.
     * @param params.apiKey - The new API Key to use.
     */
    setClientApiKey({ apiKey }) {
      if (!authMode || authMode === "WithinHeaders") {
        transporter.baseHeaders["x-algolia-api-key"] = apiKey;
      } else {
        transporter.baseQueryParameters["x-algolia-api-key"] = apiKey;
      }
    },
    /**
     * Helper: calls the `search` method but with certainty that we will only request Algolia records (hits) and not facets.
     * Disclaimer: We don't assert that the parameters you pass to this method only contains `hits` requests to prevent impacting search performances, this helper is purely for typing purposes.
     *
     * @summary Search multiple indices for `hits`.
     * @param searchMethodParams - Query requests and strategies. Results will be received in the same order as the queries.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchForHits(searchMethodParams, requestOptions) {
      return this.search(searchMethodParams, requestOptions);
    },
    /**
     * Helper: calls the `search` method but with certainty that we will only request Algolia facets and not records (hits).
     * Disclaimer: We don't assert that the parameters you pass to this method only contains `facets` requests to prevent impacting search performances, this helper is purely for typing purposes.
     *
     * @summary Search multiple indices for `facets`.
     * @param searchMethodParams - Query requests and strategies. Results will be received in the same order as the queries.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchForFacets(searchMethodParams, requestOptions) {
      return this.search(searchMethodParams, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPost - The customPost object.
     * @param customPost.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPost.parameters - Query parameters to apply to the current query.
     * @param customPost.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPost({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPost`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves recommendations from selected AI models.
     *
     * Required API Key ACLs:
     *  - search
     * @param getRecommendationsParams - The getRecommendationsParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getRecommendations(getRecommendationsParams, requestOptions) {
      if (getRecommendationsParams && Array.isArray(getRecommendationsParams)) {
        const newSignatureRequest = {
          requests: getRecommendationsParams
        };
        getRecommendationsParams = newSignatureRequest;
      }
      if (!getRecommendationsParams) {
        throw new Error("Parameter `getRecommendationsParams` is required when calling `getRecommendations`.");
      }
      if (!getRecommendationsParams.requests) {
        throw new Error("Parameter `getRecommendationsParams.requests` is required when calling `getRecommendations`.");
      }
      const requestPath = "/1/indexes/*/recommendations";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: getRecommendationsParams,
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Sends multiple search requests to one or more indices.  This can be useful in these cases:  - Different indices for different purposes, such as, one index for products, another one for marketing content. - Multiple searches to the same index—for example, with different filters.
     *
     * Required API Key ACLs:
     *  - search
     * @param searchMethodParams - Muli-search request body. Results are returned in the same order as the requests.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    search(searchMethodParams, requestOptions) {
      if (searchMethodParams && Array.isArray(searchMethodParams)) {
        const newSignatureRequest = {
          requests: searchMethodParams.map(({ params, ...legacyRequest }) => {
            if (legacyRequest.type === "facet") {
              return {
                ...legacyRequest,
                ...params,
                type: "facet"
              };
            }
            return {
              ...legacyRequest,
              ...params,
              facet: void 0,
              maxFacetHits: void 0,
              facetQuery: void 0
            };
          })
        };
        searchMethodParams = newSignatureRequest;
      }
      if (!searchMethodParams) {
        throw new Error("Parameter `searchMethodParams` is required when calling `search`.");
      }
      if (!searchMethodParams.requests) {
        throw new Error("Parameter `searchMethodParams.requests` is required when calling `search`.");
      }
      const requestPath = "/1/indexes/*/queries";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: searchMethodParams,
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    }
  };
}

// lite/builds/browser.ts
function liteClient(appId, apiKey, options) {
  if (!appId || typeof appId !== "string") {
    throw new Error("`appId` is missing.");
  }
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("`apiKey` is missing.");
  }
  return createLiteClient({
    appId,
    apiKey,
    timeouts: {
      connect: 1e3,
      read: 2e3,
      write: 3e4
    },
    logger: createNullLogger(),
    requester: m(),
    algoliaAgents: [{ segment: "Browser" }],
    authMode: "WithinQueryParameters",
    responsesCache: createMemoryCache(),
    requestsCache: createMemoryCache({ serializable: false }),
    hostsCache: createFallbackableCache({
      caches: [createBrowserLocalStorageCache({ key: `${apiClientVersion}-${appId}` }), createMemoryCache()]
    }),
    ...options
  });
}

//# sourceMappingURL=browser.js.map

}),

}]);