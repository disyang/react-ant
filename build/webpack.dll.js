const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    app: ['react', 'antd', 'axios', 'react-router', 'redux']
  },
  performance: {
    hints: false, // 枚举
    maxAssetSize: 300000, // 整数类型（以字节为单位）
    maxEntrypointSize: 500000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  output: {
    path: path.join(__dirname, '../dll'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../dll/[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    })
  ]
};