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
