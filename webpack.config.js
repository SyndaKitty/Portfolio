var path = require('path');
module.exports = {
  mode: 'development',
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname, 'app/components/main.jsx'),
      Nav: path.resolve(__dirname, 'app/components/nav.jsx'),
      Weather: path.resolve(__dirname, 'app/components/weather.jsx'),
      About: path.resolve(__dirname, 'app/components/about.jsx'),
      Examples: path.resolve(__dirname, 'app/components/examples.jsx')
    },
    extensions: ['.js', 'jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};