module.exports = {
    entry: './app/main.js', // assumes your entry point is the main.js in the app folder in the root of your project folder
    mode: 'development',
    output: {
      path: __dirname,
      filename: './public/bundle.js' // assumes your bundle.js will be in the public folder in the root of your project folder
    },
    devtool: 'source-maps',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  }