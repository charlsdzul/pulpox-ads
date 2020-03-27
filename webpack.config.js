module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/public/js/",
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".scss"] },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("node-sass")
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
