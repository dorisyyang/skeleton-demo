const { override, addWebpackAlias, adjustStyleLoaders, addBabelPlugin, setWebpackPublicPath, fixBabelImports, addLessLoader} = require('customize-cra');
const path = require('path');

// react如何全局配置sass
module.exports = override(
//     setWebpackPublicPath('/'),
    fixBabelImports('import', { //配置按需加载
        libraryName: '@eyebuydirect/ebd.front.lib',
        libraryDirectory: 'lib',
        style: function (name) {
                return `${name}/style/index.css`;
        }
    }),
    addBabelPlugin({
        loader: require.resolve('sass-loader'),
        options: {
                sassOptions: {
                        includePaths: [path.join(__dirname, 'src/styles')],
                        prependData: `$cdn:'http://localhost:3000';`,
                },
        }
    }),
    addWebpackAlias({
        ['@']: path.resolve(__dirname, 'src/')
    }),
    // 配置指定文件为sass全局文件，可以不用导入就可以使用
    adjustStyleLoaders(rule => {
        if (rule.test.toString().includes('scss')) {
                rule.use.push({
                        loader: require.resolve('sass-resources-loader'),
                        options: {
                                resources: [
                                        // '$cdn: "wert"',
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
        //1.修改、添加loader 配置 :
        // 所有的loaders规则是在config.module.rules(数组)的第二项
        // 即：config.module.rules[1].oneOf  (如果不是，具体可以打印 一下是第几项目)
        // 修改 sass 配置 ，规则 loader 在第五项(具体看配置)
        // const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
        // loaders[5].use.push({
        //   loader: 'sass-resources-loader',
        //   options: {
        //     resources: path.resolve(__dirname, 'src/asset/base.scss')//全局引入公共的scss 文件
        //   }
        // })
        console.log('config.module111', config.module.rules[1].oneOf);
        
        // config.module.rules[1].oneOf[7].use[4].options = {
        //         ...config.module.rules[1].oneOf[7].use[4].options,
        //         sassOptions: {
        //                 includePaths: [path.join(__dirname, 'src/styles')],
        //                 prependData: `$cdn:'http://localhost:3000';`,
        //         }

        // }
        console.log('config.module222', config.module.rules[1].oneOf[7].use[4]);
        return config;
    }
)
