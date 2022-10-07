const { override, addWebpackAlias, adjustStyleLoaders, addBabelPlugin, fixBabelImports} = require('customize-cra');
const path = require('path');

// addWebpackModuleRule

module.exports = override(
    fixBabelImports('import', { //配置按需加载
        libraryName: '@eyebuydirect/ebd.front.lib',
        libraryDirectory: 'lib',
        style: function (name) {
                return `${name}/style/index.css`;
        }
    }),
    addWebpackAlias({
        ['@']: path.resolve(__dirname, 'src/')
    }),
    // 配置指定文件为sass全局文件，可以不用导入就可以使用
    adjustStyleLoaders(rule => {
       
        if (rule.test.toString().includes('scss')) {
                // console.log('rule11', rule);
                // rule.use[3] resolve-url-loader
                // rule.use[4] sass loader
                rule.use[4].options.additionalData = `$font-path: '${process.env.NODE_ENV === 'production' ? 'https://cdn-refebd-qa.ebdoptical.com' : '../../../public'}';`;
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
    }),
    (config)=>{ //暴露webpack的配置 config ,evn
        // 去掉打包生产map 文件
        // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
        // if(process.env.NODE_ENV==="production") config.devtool=false;
        // if(process.env.NODE_ENV!=="development") config.plugins = [...config.plugins,...myPlugin]
        return config;
    }
)
