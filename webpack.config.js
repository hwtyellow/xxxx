var path = require('path');

const publicPath = '/';
const buildPath = 'build';

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
      // publicPath: publicPath,
      // contentBase: path.resolve(__dirname, buildPath),
      inline: true,
      hot: true,
      port: 8181
  },
  module: {
  	rules: [
  		{
  			test: /\.js$/,
  			exclude: /node_modules/,
  			use: {
  				loader: 'babel-loader',
  				options: {
  					presets: ['env', 'stage-0', 'react'],
  					plugins: []
  				}
  			}
  		},
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
  	]
  }
};