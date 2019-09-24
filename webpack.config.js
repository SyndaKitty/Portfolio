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
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
      About: path.resolve(__dirname, 'app/components/About.jsx'),
      Examples: path.resolve(__dirname, 'app/components/Examples.jsx'),
      Weather: path.resolve(__dirname, 'app/components/weather/Weather.jsx'),
      WeatherForm: path.resolve(__dirname, 'app/components/weather/WeatherForm.jsx'),
      WeatherMessage: path.resolve(__dirname, 'app/components/weather/WeatherMessage.jsx')
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