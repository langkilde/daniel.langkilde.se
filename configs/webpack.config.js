const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');

const PATHS = {
  root: path.resolve(__dirname, '..'),
  nodeModules: path.resolve(__dirname, '../node_modules'),
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../build'),
  style: path.resolve(__dirname, '../src/style'),
  images: path.resolve(__dirname, '../src/images')
};

module.exports = (env = {}) => {
  console.log({ env });
  const isBuild = !!env.build;
  const isDev = !env.build;
  const isSourceMap = !!env.sourceMap || isDev;

  return {
    cache: true,
    devtool: isDev ? 'eval-source-map' : 'source-map',
    devServer: {
      historyApiFallback: true,
      inline: false,
      contentBase: './build'
    },
    context: PATHS.root,

    entry: {
      app: [
        'react-hot-loader/patch',
        './src/index.tsx',
      ],
    },
    
    output: {
      path: PATHS.build,
      filename: isDev ? '[name].js' : '[name].[hash].js',
      publicPath: '/',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      modules: ['src', 'node_modules'],
    },
    
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: PATHS.src,
          use: (env.awesome ?
              [
                { loader: 'react-hot-loader/webpack' },
                {
                  loader: 'awesome-typescript-loader',
                  options: {
                    transpileOnly: true,
                    useTranspileModule: false,
                    sourceMap: isSourceMap,
                  },
                },
              ] : [
                { loader: 'react-hot-loader/webpack' },
                {
                  loader: 'ts-loader',
                  options: {
                    transpileOnly: true,
                    compilerOptions: {
                      'sourceMap': isSourceMap,
                      'target': isDev ? 'es2015' : 'es5',
                      'isolatedModules': true,
                      'noEmitOnError': false,
                    },
                  },
                },
              ]
          ),
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
        {
          test: /\.json$/,
          include: [PATHS.src],
          use: {
            loader: 'json-loader'
          },
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: 'css-loader'
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              "css-loader",
              "sass-loader"
            ],
          }),
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          use: [
            'file-loader?hash=sha512&limit=1000&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false'
          ]
        }
      ],
    },
    plugins: [
      StyleLintPlugin(),
      new ExtractTextPlugin('style.css'),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(isDev ? 'development' : 'production'),
        },
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (module) => module.context && module.context.indexOf('node_modules') !== -1,
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
      }),
      ...(isDev ? [
        new webpack.HotModuleReplacementPlugin({
          multiStep: true, // better performance with many files
        }),
        new webpack.NamedModulesPlugin(),
        new DashboardPlugin(),
      ] : []),
      ...(isBuild ? [
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
          beautify: false,
          compress: {
            screw_ie8: true,
            warnings: false
          },
          comments: false,
          sourceMap: isSourceMap,
        }),
        new HtmlWebpackPlugin({
          template: './index.html',
        }),
      ] : []),
    ],
    stats: {
      providedExports: false,
      chunks: false,
      hash: false,
      version: false,
      timings: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      warnings: false,
      publicPath: false,
      silent: true
    },
    performance: {
      hints: false
    }
  };

};
