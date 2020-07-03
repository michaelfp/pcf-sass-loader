const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              sourceType: "unambiguous",
              presets: [
                [
                  require.resolve("@babel/preset-env"),
                  {
                    targets: {
                      esmodules: true,
                    },
                  },
                ],
              ]
            },
          },
          ],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  resolveLoader: {
    alias: {
      "pcf-sass-loader": path.join(__dirname, "./src/index.js"),
    },
  },
 target:'node',
  devtool: false,
};
