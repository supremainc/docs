module.exports = function () {
    return {
        name: 'whatap-plugin-browser',
        injectHtmlTags() {
            return {
              headTags: [
                {
                    tagName: 'script',
                    innerHTML: `(function (w, h, _a, t, a, b) {
                        w = w[a] = w[a] || {
                          config: {
                            projectAccessKey: "x60611885oe0j-z1b3umd5ov7i42-x7e2msjl83m655",
                            pcode: 49418,
                            sampleRate: 100,
                            sessionReplaySampleRate: 100,
                            ignorePageUrls: [/^.*localhost.*$/i],
                            collectUserClick: true
                          },
                        };
                        a = h.createElement(_a);
                        a.async = 1;
                        a.src = t;
                        t = h.getElementsByTagName(_a)[0];
                        t.parentNode.insertBefore(a, t);
                    })(window, document, 'script', 'https://repo.whatap-browser-agent.io/rum/prod/v1/whatap-browser-agent.js', 'WhatapBrowserAgent', '');`
                }
              ]
            };
        },
    };
};