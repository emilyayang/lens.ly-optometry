const path = require('path');
var SRC_DIR = path.join(__dirname, '/public/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react']
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};