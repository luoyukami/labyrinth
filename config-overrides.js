const rewireLess = require('react-app-rewire-less');
const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
    // 扩展 webpack ==> 支持less
    config = rewireLess(config, env);
    // 配置loader参数
    config = rewireLess.withLoaderOptions({
        // 修改默认颜色 实现自定义主题
        modifyVars: { "@primary-color": "#1DA57A" },
    })(config, env);
    // antd 按需加载配置
    config = injectBabelPlugin(['import',
        { libraryName: 'antd', libraryDirectory: 'es', style: true }], config);
    return config;
}
