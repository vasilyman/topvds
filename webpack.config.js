const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // mode: 'development',
  entry: {
    index: './src/index.js',
    vendor: './src/vendor.js',
    common: './src/common.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunks.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              syntax: 'postcss-scss',
              plugins: function () {
                return [
                  require('autoprefixer'),
                ];
              },
            }
          },
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[path][name].[ext]',
              limit: false,
              esModule: false,
            }
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'font/[name].[ext]',
              publicPath: "../",
              limit: false,
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Index Page',
      template: 'src/pages/index.ejs',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'Vendor Page',
      template: 'src/pages/vendor.ejs',
      filename: 'vendor.html',
      chunks: ['vendor'],
    }),
    new HtmlWebpackPlugin({
      title: 'Empty Page',
      template: 'src/pages/empty.ejs',
      filename: 'empty.html',
      chunks: ['common'],
    }),
    new HtmlWebpackPlugin({
      title: 'Coupons Page',
      template: 'src/pages/coupons.ejs',
      filename: 'coupons.html',
      chunks: ['common'],
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    // new CopyPlugin({
    //   patterns: [
        // { from: 'src/assets/images', to: 'images' },
        // { from: 'src/assets/fonts', to: 'fonts' },
    //   ],
    // }),
    new webpack.ProvidePlugin({
      _: 'lodash',
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      feather: '@/assets/js/feather.min.js',
    }),
  ]
}