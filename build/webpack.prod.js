const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
function resolve(p) {
  return path.join(__dirname, p);
}

module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: 'cheap-module-souce-map',
  // optimization: {
  //   minimizer: [
  //     new TerserJSPlugin({
  //       // 多进程压缩
  //       // 设置缓存目录
  //       cache: path.resolve('.cache'),
  //       parallel: 4, // 开启多进程压缩
  //       // sourceMap,
  //       terserOptions: {
  //         compress: {
  //           // 删除所有的 `console` 语句
  //           drop_console: true
  //         }
  //       }
  //     })
  //   ]
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      IS_DEVELOPMETN: false
    }),
    new OptimizeCSSAssetsPlugin()
  ]
});
