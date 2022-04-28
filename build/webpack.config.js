const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const aliasFolders = [
  '',
  'hooks',
  'components',
  'assets',
  'layouts',
  'models',
  'pages',
  'routes',
  'utils',
  'config',
  'api',
  'provider',
  'styles',
];

module.exports = {
  entry: './src/index.ts',

  output: {
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: aliasFolders.reduce((prev, next) => {
      prev[`@${next}`] = path.resolve(__dirname, '../src', next);
      return prev;
    }, {}),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: process.env.NODE_ENV == 'production' ? false : 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    stats: 'errors-only',
    compress: false,
  },
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['./dist'] }),
    new HtmlWebpackPlugin({ template: './src/template/index.html' }),
  ],
};
