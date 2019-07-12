const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // JavaScript 执行入口文件
  entry: "./index.ts",
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: "bundle.js",
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, "./build")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
    new MiniCssExtractPlugin({
      filename: `../release/fast.css`
    })
  ]
  // mode: "development",
  // devtool: "source-map"
};
