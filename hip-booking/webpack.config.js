const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/preset-env', 'airbnb']
        },
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development'
};