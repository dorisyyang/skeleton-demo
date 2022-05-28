const { override, addWebpackAlias, adjustStyleLoaders, addBabelPlugin} = require('customize-cra');
const path = require('path');

// react如何全局配置sass
module.exports = override(
    addBabelPlugin([
        'import',
        {
                libraryName: '@eyebuydirect/ebd.front.lib',
                libraryDirectory: 'lib',
                style: function (name) {
                        return `${name}/style/index.css`;
                }
        }, '@eyebuydirect/ebd.front.lib']),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src/')
    }),
    // 配置指定文件为sass全局文件，可以不用导入就可以使用
    adjustStyleLoaders(rule => {
        if (rule.test.toString().includes('scss')) {
                rule.use.push({
                        loader: require.resolve('sass-resources-loader'),
                        options: {
                                resources: [
                                        path.resolve(__dirname, 'src/styles/common/_mixin.scss'),
                                        path.resolve(__dirname, 'src/styles/common/_variables.scss')
                                ]
                        }
                });
        }
    })
)
