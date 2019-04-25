module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry',
      },
    ],
  ],
  env: {
    development: {
      plugins: ['dynamic-import-node'],
    },
  },
};
