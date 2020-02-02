const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
function resolve(r) {
  return path.join(__dirname, r);
}

module.exports = {
  entry: {
    app: resolve('../src/App.tsx')
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: resolve('../dist'),
    chunkFilename: 'chunks/[name].[hash:8].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      '@': resolve('../src'),
      '@components': resolve('../src/components'),
      '@images': resolve('../src/images'),
      '@pages': resolve('../src/pages'),
      '@apis': resolve('../src/apis'),
      '@reduxs': resolve('../src/reduxs'),
      '@routers': resolve('../src/routers'),
      '@i18n': resolve('../src/i18n'),
      '@hooks': resolve('../src/hooks'),
      '@mocks': resolve('../src/mocks'),
      '@constants': resolve('../src/constants'),
    }
  },
  performance: {
    hints: false, // 枚举
    maxAssetSize: 300000, // 整数类型（以字节为单位）
    maxEntrypointSize: 500000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        include: [resolve('../src')],
        loader: 'happypack/loader?id=happyBabel'
      },
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i, //图片文件
        exclude: /node_modules/,
        include: [resolve('../src/images')],
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 8192,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[contenthash].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[contenthash].[ext]'
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash:8].css',
      chunkFilename: 'chunks/style.[contenthash:8].[id].css',
    }),
    new HappyPack({
      id: 'happyBabel',
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      ],
      threadPool: happyThreadPool,
      verbose: false
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html'),
      favicon: resolve('../public/favicon.ico'),
      title: 'ant-app',
      minify: {
        collapseWhitespace: true //删除空格、换行
      }
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(resolve('../dll/app-manifest.json')),
      name: './my-dll.js',
      scope: 'xyz',
      sourceType: 'commonjs2'
    }),
    new CopyWebpackPlugin([
      // 拷贝生成的文件到dist目录 这样每次不必手动去cv
      { from: resolve('../dll'), to: 'dll', ignore: ['*.json'] }
    ])
  ]
};
