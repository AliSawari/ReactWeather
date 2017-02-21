module.exports = {
  entry: './jsx/do.jsx',
  output: {
    path: __dirname,
    filename: './public/index.js'
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
