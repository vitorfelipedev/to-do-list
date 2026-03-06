const path = require('path');

module.exports = {
  // 1. ALTERADO: Agora ele busca o arquivo principal dentro da pasta src
  entry: './src/index.js',

  output: {
    // 2. ALTERADO: Agora ele salva o main.js compilado dentro da pasta public
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
