export default {
  output: {
    filename: '../assets/js/main.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.css/,
        loader: "style-loader!css-loader",
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
