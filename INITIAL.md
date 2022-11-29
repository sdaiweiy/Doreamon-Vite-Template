# 1.项目初始化

1.在需要创建项目目录下打开 cmd 运行以下命令

```
pnpm create vite
```

2.在弹出的提示中依次输入项目名称、选择 vue 框架，选择 Typescript

3.运行验证项目

```
cd 项目文件夹
pnpm install
pnpm run dev
```

4.删除 package.json 中

```
  "type": "module",
```

# 2.项目配置调整

修改 tsconfig.json 文件如下

```
{
  "compilerOptions": {
    //指定ECMAScript目标版本，esnext为最新版本
    "target": "ESNext",
    //将 class 声明中的字段语义从 [[Set]] 变更到 [[Define]]
    "useDefineForClassFields": true,
    //指定生成哪个模块系统代码，esnext为最新版本
    "module": "ESNext",
    //决定如何处理模块
    "moduleResolution": "Node",
    //启用所有严格类型检查选项。
    "strict": true,
    //禁止对同一个文件的不一致的引用。
    "forceConsistentCasingInFileNames": true,
    //允许从没有设置默认导出的模块中默认导入。这并不影响代码的输出，仅为了类型检查
    "allowSyntheticDefaultImports": true,
    //禁用函数参数双向协变检查
    "strictFunctionTypes": false,
    //在.tsx文件里支持JSX
    "jsx": "preserve",
    //解析非相对模块名的基准目录
    "baseUrl": ".",
    //将每个文件作为单独的模块
    "isolatedModules": true,
    //生成相应的 .map文件。
    "sourceMap": true,
    //支持在 CommonJs 模块下使用 import d from 'cjs'
    "esModuleInterop": true,
    //支持JSON导入
    "resolveJsonModule": true,
    //若有未使用的局部变量则抛错。
    "noUnusedLocals": true,
    //若有未使用的参数则抛错
    "noUnusedParameters": true,
    //启用实验性的ES装饰器
    "experimentalDecorators": true,
    //编译过程中需要引入的库文件的列表
    "lib": ["ESNext", "DOM"],
    //忽略所有的声明文件（ *.d.ts）的类型检查。
    "skipLibCheck": true,
    //不生成编译后的js文件
    "noEmit": true
  },
  //模块名到基于 baseUrl的路径映射的列表
  "paths": {
    "/@/*": ["src/*"],
    "/#/*": ["types/*"]
  },
  //指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "types/**/*.d.ts",
    "types/**/*.ts"
  ],
  // 指定一个排除列表（include的反向操作）
  "exclude": ["node_modules", "dist"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```

# 3.集成 eslint（约束 JS 代码规范）

1.依次安装如下命令

```
//项目集成eslint
pnpm install eslint -D
//eslint对Vue的支持插件和eslint对Vue模板解析插件
pnpm i eslint-plugin-vue vue-eslint-parser -D
//将ts集成到vue项目中
pnpm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

2.项目目录下创建.eslintrc.js 文件,放入如下内容

```
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  // 解析器
  parser: "vue-eslint-parser",
  // 扩展
  extends: [
    // 'eslint:recommended',
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:vue/base",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  // 插件
  plugins: ["@typescript-eslint", "prettier"],
  // 规则
  rules: {
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^h$",
        /*
          下面都会视为使用了变量
          被调用 (foo()) 或 作为构造函数 (new foo())
          被读取 (var y = x)
          作为参数传递给函数 (doSomething(foo))
          在一个函数的内部读取，这个函数被传递给另一个函数 (doSomething(function() { foo(); }))
        */
        varsIgnorePattern: "^h$",
      },
    ],
    "no-var": "error",
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^h$",
        varsIgnorePattern: "^h$",
      },
    ],
    "prettier/prettier": "error",
    // 禁止出现console
    "no-console": "warn",
    // 禁用debugger
    "no-debugger": "warn",
    // 禁止出现重复的 case 标签
    "no-duplicate-case": "warn",
    // 禁止出现空语句块
    "no-empty": "warn",
    // 禁止不必要的括号
    "no-extra-parens": "off",
    // 禁止对 function 声明重新赋值
    "no-func-assign": "warn",
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    "no-unreachable": "warn",
    // 强制所有控制语句使用一致的括号风格
    curly: "warn",
    // 要求 switch 语句中有 default 分支
    "default-case": "warn",
    // 强制尽可能地使用点号
    "dot-notation": "warn",
    // 要求使用 === 和 !==
    eqeqeq: "warn",
    // 禁止 if 语句中 return 语句之后有 else 块
    "no-else-return": "warn",
    // 禁止出现空函数
    "no-empty-function": "warn",
    // 禁用不必要的嵌套块
    "no-lone-blocks": "warn",
    // 禁止使用多个空格
    "no-multi-spaces": "warn",
    // 禁止多次声明同一变量
    "no-redeclare": "warn",
    // 禁止在 return 语句中使用赋值语句
    "no-return-assign": "warn",
    // 禁用不必要的 return await
    "no-return-await": "warn",
    // 禁止自我赋值
    "no-self-assign": "warn",
    // 禁止自身比较
    "no-self-compare": "warn",
    // 禁止不必要的 catch 子句
    "no-useless-catch": "warn",
    // 禁止多余的 return 语句
    "no-useless-return": "warn",
    // 禁止变量声明与外层作用域的变量同名
    "no-shadow": "off",
    // 允许delete变量
    "no-delete-var": "off",
    // 强制数组方括号中使用一致的空格
    "array-bracket-spacing": "warn",
    // 强制在代码块中使用一致的大括号风格
    "brace-style": "warn",
    // 强制使用骆驼拼写法命名约定
    camelcase: "warn",
    // 强制使用一致的缩进
    indent: "off",
    // 强制在 JSX 属性中一致地使用双引号或单引号
    // 'jsx-quotes': 'warn',
    // 强制可嵌套的块的最大深度4
    "max-depth": "warn",
    // 强制最大行数 300
    // "max-lines": ["warn", { "max": 1200 }],
    // 强制函数最大代码行数 50
    // 'max-lines-per-function': ['warn', { max: 70 }],
    // 强制函数块最多允许的的语句数量20
    "max-statements": ["warn", 100],
    // 强制回调函数最大嵌套深度
    "max-nested-callbacks": ["warn", 3],
    // 强制函数定义中最多允许的参数数量
    "max-params": ["warn", 3],
    // 强制每一行中所允许的最大语句数量
    "max-statements-per-line": [
      "warn",
      {
        max: 1,
      },
    ],
    // 要求方法链中每个调用都有一个换行符
    "newline-per-chained-call": [
      "warn",
      {
        ignoreChainWithDepth: 3,
      },
    ],
    // 禁止 if 作为唯一的语句出现在 else 语句中
    "no-lonely-if": "warn",
    // 禁止空格和 tab 的混合缩进
    "no-mixed-spaces-and-tabs": "warn",
    // 禁止出现多行空行
    "no-multiple-empty-lines": "warn",
    // // 禁止出现;
    // semi: ['warn', 'never'],
    // 强制在块之前使用一致的空格
    "space-before-blocks": "warn",
    // 强制在 function的左括号之前使用一致的空格
    // 'space-before-function-paren': ['warn', 'never'],
    // 强制在圆括号内使用一致的空格
    "space-in-parens": "warn",
    // 要求操作符周围有空格
    "space-infix-ops": "warn",
    // 强制在一元操作符前后使用一致的空格
    "space-unary-ops": "warn",
    // 强制在注释中 // 或 /* 使用一致的空格
    // "spaced-comment": "warn",
    // 强制在 switch 的冒号左右有空格
    "switch-colon-spacing": "warn",
    // 强制箭头函数的箭头前后使用一致的空格
    "arrow-spacing": "warn",
    "prefer-const": "warn",
    "prefer-rest-params": "warn",
    "no-useless-escape": "warn",
    "no-irregular-whitespace": "warn",
    "no-prototype-builtins": "warn",
    "no-fallthrough": "warn",
    "no-extra-boolean-cast": "warn",
    "no-case-declarations": "warn",
    "no-async-promise-executor": "warn",
    // vue
    "vue/one-component-per-file": "warn",
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
};

```

4.package.json 中 script 部分加入

```
"lint:eslint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
```

# 4.集成 prettier（格式化代码）

1.安装依赖包

```
//eslint-plugin-prettier是eslint的prettier插件
//eslint-config-prettier是在代码格式上用prettier覆盖eslint配置
//这两个插件目的是为了解决eslint 和 prettier的冲突问题
pnpm i prettier eslint-plugin-prettier eslint-config-prettier -D
```

2.根目录下创建 prettier.config.js 文件,来约束代码格式

```
module.exports = {
  // 单行代码的最大长度
  printWidth: 100,
  // 指定缩进的长度
  tabWidth: 2,
  //是否使用tab
  useTabs: false,
  //行尾是否使分号，默认为true
  semi: true,
  //处理vue缩进
  vueIndentScriptAndStyle: true,
  //采用单引号
  singleQuote: true,
  // 只在需要的时候给对象属性加引号
  quoteProps: "as-needed",
  //对象，数组括号与文字之间加空格
  bracketSpacing: true,
  // 对象最后一个属性不加上逗号，有三个可选值"<none|es5|all>"
  trailingComma: "none",
  //箭头函数单一参数省略括号
  arrowParens: "always",
  //行尾换行
  endOfLine: "lf",
};
```

3.创建.prettierignore 文件，忽略部分文件格式化

```
/dist/
.local
.output.js
/node_modules/

**/*.svg
**/*.sh

/public/
```

4.package.json 中 script 部分加入

```
"lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,css,json,tsx,html,vue,less,md}\""
```

# 5.stylelint 安装（约束 CSS 代码规范）

1.安装 stylelint 相关

```
pnpm i stylelint stylelint-config-standard stylelint-config-prettier stylelint-order stylelint-config-recommended-vue stylelint-config-recommended  stylelint-config-html -D
```

2.package.json 中 script 部分加入

```
"lint:style": "stylelint --fix \"**/*.{css,tsx,html,vue,less}\" --cache --cache-location node_modules/.cache/stylelint"
```

3.创建.stylelintrc.js,填入如下内容

```
module.exports = {
  root: true,
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-html',
    'stylelint-config-prettier'
  ],
  ignorePath: '.stylelintignore',
  rules: {
    // 禁止空来源。
    'no-empty-source': null,
    // 禁止使用无效的命名网格区域。
    'named-grid-areas-no-invalid': null,
    // 要求或不允许使用Unicode字节顺序标记。
    'unicode-bom': 'never',
    // 禁止较低特异性的选择器在覆盖较高特异性的选择器之后出现。
    'no-descending-specificity': null,
    // 禁止在字体系列名称列表中缺少通用系列。
    'font-family-no-missing-generic-family-keyword': null,
    // 在声明的冒号后面需要一个空格或禁止空格。
    'declaration-colon-space-after': 'always-single-line',
    // 在声明的冒号之前需要一个空格或禁止使用空格。
    'declaration-colon-space-before': 'never',
    // 在声明块内要求或不允许尾随分号。
    'declaration-block-trailing-semicolon': 'always',
    // 在规则之前要求或禁止使用空行。
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ],
    // 禁止使用未知单位。
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // Specify the alphabetical order of the attributes in the declaration block
    // 样式顺序
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'float',
      'width',
      'height',
      'max-width',
      'max-height',
      'min-width',
      'min-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-collapse',
      'margin-top-collapse',
      'margin-right-collapse',
      'margin-bottom-collapse',
      'margin-left-collapse',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      'clear',
      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'osx-font-smoothing',
      'font-style',
      'font-weight',
      'hyphens',
      'src',
      'line-height',
      'letter-spacing',
      'word-spacing',
      'color',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-size-adjust',
      'text-shadow',
      'text-transform',
      'word-break',
      'word-wrap',
      'white-space',
      'vertical-align',
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'pointer-events',
      'cursor',
      'background',
      'background-attachment',
      'background-color',
      'background-image',
      'background-position',
      'background-repeat',
      'background-size',
      'border',
      'border-collapse',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-color',
      'border-image',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'border-spacing',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-top-left-radius',
      'border-radius-topright',
      'border-radius-bottomright',
      'border-radius-bottomleft',
      'border-radius-topleft',
      'content',
      'quotes',
      'outline',
      'outline-offset',
      'opacity',
      'filter',
      'visibility',
      'size',
      'zoom',
      'transform',
      'box-align',
      'box-flex',
      'box-orient',
      'box-pack',
      'box-shadow',
      'box-sizing',
      'table-layout',
      'animation',
      'animation-delay',
      'animation-duration',
      'animation-iteration-count',
      'animation-name',
      'animation-play-state',
      'animation-timing-function',
      'animation-fill-mode',
      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
      'background-clip',
      'backface-visibility',
      'resize',
      'appearance',
      'user-select',
      'interpolation-mode',
      'direction',
      'marks',
      'page',
      'set-link-source',
      'unicode-bidi',
      'speak'
    ]
  },
  ignoreFiles: ['**./*.js,', '**./*.ts,', '**./*.tsx,', '**./*.jsx,']
};
```

# 6. rimraf 快速删除 npm cache

1.安装 stylelint 相关

```
pnpm i rimraf -D
```

2.配置 npm script

```
  "clean:cache": " rimraf node_modules/.cache/ rimraf node_modules/.vite",
  "reinstall": "rimraf pnpm-lock.yaml && rimraf node_modules && pnpm install",
```

# 7.配置 husky + git 钩子

1.安装`husky`

```
pnpm i husky lint-staged -D
```

2.启用`husky`，启用后，根目录会出现一个`.husky`的文件夹

```
npx husky install
```

3.增加 pre-commit 勾子，在 `.husky` 目录创建一个 `pre-commit` 文件

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged --allow-empty
```

4.当我们在 Windows 的 `Git Bash` 上使用 `Yarn`，git hooks 会失败（`stdin is not a tty`）,在 `.husky` 目录下创建一个 `common.sh` 文件：

```
#!/bin/sh

command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Windows 10, Git Bash and Yarn workaround
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
```

在对应的勾子文件中，增加一行 `. "$(dirname "$0")/common.sh"` 代码

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
. "$(dirname "$0")/common.sh"
```

5.package.json 中加入

```
"script": {
	...
	"lint:lint-staged": "lint-staged",
    "prepare": "husky install",
    ...
}
"lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": [
      "prettier --write--parser json"
    ],
    "package.json": [
      "prettier --write"
    ],
    "*.vue": [
      "eslint --fix",
      "prettier --write",
      "stylelint --fix"
    ],
    "*.{scss,less,styl,html}": [
      "stylelint --fix",
      "prettier --write"
    ],
    "*.md": [
      "prettier --write"
    ]
  }
```

# 8.配置 commitlint

1.首先安装`@commitlint/cli`和`@commitlint/config-conventional`（如果要自定义提交规范，就不用安装`@commitlint/config-conventional`）

```
npm install @commitlint/cli @commitlint/config-conventional --save -D
```

2.在项目根目录的`.husky`文件夹中，新建`commit-msg`文件，写入以下内容：

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx commitlint --edit $1
```

3.在项目根目录新建`commitlint.config.js`文件，写入以下内容：

```
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['git-commit-emoji', 'cz'],
  rules: {
    'body-leading-blank': [2, 'always'], // body上面有换行
    'footer-leading-blank': [1, 'always'], // footer上面有换行
    'header-max-length': [2, 'always', 108], // header上最大108字符
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        '✨ feat', // 新增功能、页面
        '🐛 fix', // 修补bug
        '📝 docs', // 修改文档、注释
        '🎨 style', // 格式：不影响代码运行的变动、空格、格式化等等
        '♻️ refactor', // 代码重构，未新增任何功能和修复任何bug
        '⚡️ perf', // 优化：提升性能、用户体验等
        '✅ test', // 测试用例：包括单元测试、集成测试
        '🔧 chore', // 其他不修改src或测试文件的更改
        '⏪️ revert' // 回滚到上一个版本
      ]
    ]
  }
};
```

4.在 git 提交时，填写的`commit`信息格式规范如下：

```
<type>(<scope>): <subject> // 必填
// 空一行
<body> // 可忽略不填
// 空一行
<footer> // 可忽略不填
```

例子 1：不带详细说明, 注意:后面空格

```
git commit -m 'style: HelloWorld.vue: 修改样式'
```

例子 2：带详细说明, 注意:后面空格

```
git commit -m 'style: HelloWorld.vue: 修改样式
>>
>> 修改了HelloWorld.vue的样式，将背景色减弱'
```

# 9.使用 czg 提交消息

1.安装库

```
pnpm i cz-customizable czg commitlint-config-cz commitlint-config-git-commit-emoji -D
```

2.创建.cz-config.js

```
'use strict';
module.exports = {
  types: [
    { value: '✨ feat', name: '新增:    新的内容' },
    { value: '🐛 fix', name: '修复:    修复Bug' },
    { value: '📝 docs', name: '文档:    变更的只有文档' },
    { value: '🎨 style', name: '格式:    空格, 分号等格式修复' },
    { value: '♻️ refactor', name: '重构:    代码重构，注意和特性、修复区分开' },
    { value: '⚡️ pref', name: '性能:    提升性能' },
    { value: '✅ test', name: '测试:    添加一个测试' },
    { value: '🔧 chore', name: '工具:    开发工具变动(构建、脚手架工具等)' },
    { value: '⏪️ revert', name: '回滚:    代码回退' }
  ],
  scopes: [
    { name: 'components' },
    { name: 'biz' },
    { name: 'utils' },
    { name: 'styles' },
    { name: 'deps' },
    { name: 'other' }
  ],
  allowCustomScopes: true,
  // 重新展现信息提示
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个影响范围:',
    customScope: '选择一个自定义影响的范围：',
    subject: '填写简短精炼的变更描述：\n',
    body: '填写更加详细的变更描述。使用 "|" 换行：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?(yes/no)'
  },
  allowBreakingChanges: ['特性', '修复'],
  // limit subject length
  subjectLimit: 100
};

```

3.修改 package.json

```
"scripts": {
    "commit": "git cz",
  },
"config": {
    "commitizen": {
      "path": "./node_modules/cz-customizable"
    }
},
```

# 10.ChangeLog

1.安装库

```
pnpm i standard-version conventional-changelog-gitmoji-config -D
```

2.根目录创建文件.versionrc

```
{
  "types": [
    { "type": "✨ feat", "section": "✨ Features | 新功能" },
    { "type": "🐛 fix", "section": "🐛 Bug Fixes | Bug 修复" },
    { "type": "📝 docs", "section": "📝 Documentation | 文档" },
    { "type": "🎨 style", "section": "🎨 Styles | 风格" },
    { "type": "♻️ refactor", "section": "♻️ Code Refactoring | 代码重构" },
    { "type": "⚡️ pref", "section": "⚡️ Performance Improvements | 性能优化" },
    { "type": "✅ test", "section": "✅ Tests | 测试" },
    { "type": "🔧 chore", "section": "🔧 Chore | 构建/工程依赖/工具" },
    { "type": "⏪️ revert", "section": "⏪️ Revert | 回退" }
  ]
}

```

3.package.json 修改

```
"script":{
	"changelog": "standard-version  --preset gitmoji-config",
}
```

4.husky 文件夹下创建 pre-push 文件, git push 的时候，就会自动生成 CHANGELOG.md 一并提交到远端了

```
#!/bin/sh

npm run release
```
