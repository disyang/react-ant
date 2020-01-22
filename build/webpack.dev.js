const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const os = require('os');
function getIp() {
  try {
    return os.networkInterfaces()['WLAN'][1].address;
  } catch (e) {
    return 'localhost';
  }
}

function resolve(p) {
  return path.join(__dirname, p);
}

module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      IS_DEVELOPMETN: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: resolve('../src'),
    historyApiFallback: false,
    open: true,
    hot: true,
    host: getIp(),
    port: 8080,
    proxy: {
      context: ['/*', '/*/*'],
      target: 'http://localhost:3000'
    }
  }
});
