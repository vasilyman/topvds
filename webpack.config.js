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
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer'),
                ];
              },
            }
          }
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
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'font/[path][name].[ext]',
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
      chunks: ['vendor'],
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
      $: 'jquery',
      jQuery: 'jquery',
      feather: '@/assets/js/feather.min.js',
      // bootstrap: '@/assets/js/bootstrap.bundle.min.js'
    }),
  ]
}