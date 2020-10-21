module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    test: {
      plugins: [
        [
          'module-resolver',
          {
            root: ['.'],
            alias: {
              '@': './src',
              '~': '.',
            },
          },
        ],
      ],
    },
  },
}
