# typescriptArea
TypeScript 是一种由微软开发的自由和开源的编程语言，它是JavaScript的一个超集，扩展了JavaScript的语法。TypeScript 通过类型注解提供编译时的静态类型检查，可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译，另外TypeScript可以在任何浏览器、任何计算机和任何操作系统上运行

## 开发环境搭建
1. 初始化项目
`npm init -y`
2. 创建目录
├── `build` 构建目录：webpack配置文件
├── `src`
│   ├── `api` 可以复用的接口请求
│   ├── `assets` 静态资源：图片、字体文件
│   ├── `conifg` 配置文件
│   ├── `template` html-webpack-plugin模版目录
│   ├── `tools` 业务无关工具类
│   └── `utils` 业务相关工具类
└── `typings` ts声明文件
3. 安装依赖 `typescript` 和 `tslint`
`npm i -D typescript tslint`
4. 初始化tsconfig
`npx tsc --init`
5. 安装 webpack webpack-cli webpack-dev-server
`npm i -D webpack webpack-cli webpack-dev-server`
6. 添加 webpack 配置文件 `touch build/webpack.config.js`
```javascript
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  devServer: {
    contentBase: "./dist",
    stats: "errors-only",
    compress: false,
    host: "localhost",
    port: 3000,
  },
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["./dist"] }),
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
    }),
  ],
};

```
7. 安装 loader： ts-loader, 插件 clean-webpack-plugin html-webpack-plugin
`npm install -D ts-loader clean-webpack-plugin html-webpack-plugin`
8. 添加启动脚本
`"start": "cross-env NODE_ENV=development webpack-dev-server --config ./build/webpack.config.js"`
9. 安装开发依赖 cross-env
`npm i -D cross-env`
10. 启动开发环境
`npm start`
11. 添加build脚本
`"build": "cross-env NODE_ENV=production webpack --config ./build/webpack.config.js"`
## References
- [Typescript](http://www.typescriptlang.org/)
- [《TypeScript Deep Dive》中文翻译版](https://jkchao.github.io/typescript-book-chinese/)
- [声明文件库](http://definitelytyped.org/)
- [@types package search page](https://microsoft.github.io/TypeSearch/)
- [TypeScript完全解读入门进阶课程(26课时)](https://www.bilibili.com/video/BV1F7411c7m5?p=1)
- [Typescript教程_Typescript视频教程 ts入门实战视频教程-2019年5月更新](https://www.bilibili.com/video/av38379328?p=20)
- [In Typescript, what is the difference between type and interface?](https://stackoverflow.com/questions/36782896/in-typescript-what-is-the-difference-between-type-and-interface)
- [Conditional Types in TypeScript](https://mariusschulz.com/blog/conditional-types-in-typescript)
- [typescript进阶篇之高级类型与条件类型(Readonly, Partial, Pick, Record)](https://www.cnblogs.com/Grewer/p/10973744.html)
- [What does the `is` keyword do in typescript?](https://stackoverflow.com/questions/40081332/what-does-the-is-keyword-do-in-typescript)
- [typescript 高级技巧](https://segmentfault.com/a/1190000019449565?utm_source=tag-newest)
