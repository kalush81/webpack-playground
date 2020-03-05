const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/assets")
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
         test: /\.css$/,
                 use: ['style-loader', 'css-loader'],
               },
      
      {
        test: /\.html$/i,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html")
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    port: 3030,
    open: true,
    overlay: true,
    liveReload: true,
    onListening: function(server) {
      const port = server.listeningApp.address().port;
      console.log("Listening on port:", port);
    },
    publicPath: "http://localhost:3030/assets/"
  },
  devtool: "source-map"
};
