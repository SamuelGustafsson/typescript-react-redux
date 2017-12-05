var path = require("path");

module.exports = {
  entry: {
    server: "./src/server/index"
  },
  target: "node",
  module: {
    rules: [
      {
        exclude: /^node_modules/,
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.join(__dirname, "../build"),
    filename: "[name].bundle.js"
  }
};
