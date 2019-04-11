const path = require('path');

const SRC_DIR = path.join(__dirname, 'Client/src');

const DIST_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  devtool: 'inline-source-map',
  output: {
    filename: 'app.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env', 'babel-preset-airbnb'],
        },
        
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
    ],
  },
};
