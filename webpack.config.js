const VueLoaderPlugin = require('./node_modules/vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: './components/main.js',
  output: {
    filename: '../public/js/app.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
