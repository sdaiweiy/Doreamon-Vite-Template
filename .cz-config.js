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
