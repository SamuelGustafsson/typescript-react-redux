var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    client: "./src/client/index.tsx"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        exclude: /^node_modules/,
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "dist",
    port: 8080,
    stats: {
      assets: false,
      hash: false,
      chunks: false,
      errors: true,
      errorDetails: true,
      version: false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management"
    })
  ]
};
