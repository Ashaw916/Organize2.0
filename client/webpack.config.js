module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
      path: __dirname + "/public/dist",
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: {
            loader: "css-loader"
          }
        }
      ]
    }
  };