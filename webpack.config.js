const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // JavaScript 执行入口文件
  entry: "./index.ts",
  // entry: { a: "./index.js", b: "./index2.js" },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: "bundle.js",
    // filename: "[name].js",
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, "./build")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "scss-loader"],
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  resolve: {
    alias: {
      show: "./show.js"
    },
    extensions: [".ts", ".js"]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: `[name]_[contenthash:8].css`
    })
  ],
  devtool: "source-map"
};
