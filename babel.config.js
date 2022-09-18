module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 按需引入ElementUI, // ["es2015", {"modules": false}] 官方给的这种写法启动报错，引入@babel/preset-env即可
    ["@babel/preset-env", {"modules": false}],
  ],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    '@babel/plugin-proposal-nullish-coalescing-operator',
    // 按需引入ElementUI
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
