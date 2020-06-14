const path = require('path');

module.exports = {
    // バンドルするファイルを指定
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/react']
              }
            }
          }
        ]
      }
}