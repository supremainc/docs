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
                            projectAccessKey: "x605mc8800ked-x7a0b6as0u47p8-z7lv0n1abiu90t",
                            pcode: 46690,
                            sampleRate: 100,
                            proxyBaseUrl: "https://rum-ap-northeast-2.whatap-browser-agent.io/",
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