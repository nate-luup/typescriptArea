# typescriptArea
TypeScript 的设计目标之一是让你从现有的 JavaScript 库中安全、轻松的使用 TypeScript，你可以通过 TypeScript 声明文件来做到这一点。
## 目录
- [Tutorials](#Tutorials)
- [Handbook](#Handbook)
- [Declaration Files](#Declaration-Files)
- [Project Configuration](#Project-Configuration)
- [References](#References)

<h2 id="Tutorials">Tutorials</h2>

<h2 id="Handbook">Handbook</h2>

<h2 id="Declaration-Files">Declaration Files</h2>

- [declare 作用] 告诉 TypeScript，你正在试图表述一个其他地方已经存在的代码

**如果一个文件有扩展名 `.d.ts`，这意味着每个顶级的声明都必须以 `declare` 关键字作为前缀。这有利于向作者说明，在这里 TypeScript 将不会把它编译成任何代码，同时他需要确保这些在编译时存在。**

**在你实际的项目里，我们强烈建议你应该把声明放入 .d.ts 里（可以从一个命名为 globals.d.ts 或者 vendor.d.ts 文件开始）**
### 变量定义
**我们推荐尽可能的使用接口, 因为这允许其他人扩充这些全局变量，并且会告诉 TypeScript 有关于这些的修改。**

<h2 id="Project-Configuration">Project Configuration</h2>

<h2 id="References">References</h2>

- [Typescript](http://www.typescriptlang.org/)
- [《TypeScript Deep Dive》中文翻译版](https://jkchao.github.io/typescript-book-chinese/)
- [声明文件库](http://definitelytyped.org/)
- [@types package search page](https://microsoft.github.io/TypeSearch/)
