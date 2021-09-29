module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.ios.js', '.android.js'],
        alias: {
          '@screens': './src/screens',
          '@shared': './src/shared',
          '@services': './src/services',
          '@routes': './src/routes',
          '@store': './src/store',
          '@models': './src/models',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@mocks': './src/mocks'
        }
      }
    ],
  ]
};
