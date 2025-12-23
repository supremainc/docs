module.exports = function () {
    return {
        name: 'privateStarter',
        injectHtmlTags() {
            return {
                headTags: [
                    {
                        tagName: 'script',
                        innerHTML: `window.PrivateStaterConfig = { prstUser: 'kjim', prstSite: 'Suprema-Docs' };`
                    },
                    {
                        tagName: 'script',
                        attributes: {
                            src: 'https://privatestater.com/privatestater.js'
                        }
                    }
                ]
            };
        },
    };
};
