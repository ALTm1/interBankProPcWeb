module.exports = {
  presets: [
    '@vue/app'
  ],
  // 允许两种编码引入方式共存,也就是 common 规范与 es6 规范的共存处理
  sourceType: 'unambiguous',
  plugins: [
    ['import', {
      libraryName: '@csii/vx-web-ext',
      libraryDirectory: 'lib'
    }, '@csii/vx-web-ext'],
    [
      'component',
      {
        'libraryName': '@csii/vx-web',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
