/**
 * Redocusaurus에서 Prism이 제대로 주입되지 않는 문제를 해결하는 플러그인
 * https://github.com/rohit-gohri/redocusaurus/issues/388
 */
module.exports = function fixPrismPlugin(context, options) {
  return {
    name: 'fix-prism',
    // Docusaurus passes a 3rd `currentBundler` param when using the modern
    // faster pipeline. We preferentially pick its `ProvidePlugin` to remain
    // agnostic, and fall back to the classic `webpack` one.
    configureWebpack(config, isServer, utils) {
      const { currentBundler } = utils || {};
      const webpack = currentBundler?.instance || require('webpack');
      
      return {
        plugins: [
          new webpack.ProvidePlugin({
            Prism: 'prismjs',
          }),
        ],
      };
    },
  };
};
