# webpack-react-starter
基于webpack(4)的react构建环境

## 介绍

-  基于`webpack4`来作为构建工具，执行build命令时自动进行tree shaking 和 scope hoisting优化
-  基于`postcss`管理css，使用了`precss`和`cssnext`插件
-  除了`webpack4`自带的优化外，本框架还用了`hard-source-webpack-plugin`插件进行了缓存处理

## 待解决问题

-  `webpack-dev-server`起服务的时候，如何判断浏览器是否已经打开了指定的url页面
-  运行`webpack --mode production`命令，执行打包操作时，如何将dist内多余的无用文件删掉，只保留未删改文件