const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  devtool: "source-map",
  // devServer: {
  //   contentBase: './dist',
  //   inline: true,
  //   hot: true
  // },
  // plugins: [
  //    new webpack.HotModuleReplacementPlugin()
  //   ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: {
           loader: 'file-loader',
           options: {
             publicPath: 'dist/',
             outputPath: 'fonts/',
             name: '[name].[ext]'
           }
         }
       },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: 'dist/',
            outputPath: 'img/',
            name: '[name].[ext]'
          }
        }
      }
    ]
  }
};
