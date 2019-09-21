var path = require('path');
module.exports = {
  mode: 'development',
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Greeter: path.resolve(__dirname, 'app/components/Greeter.jsx'),
      GreeterMessage: path.resolve(__dirname, 'app/components/GreeterMessage.jsx'),
      GreeterForm: path.resolve(__dirname,'app/components/GreeterForm.jsx')
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