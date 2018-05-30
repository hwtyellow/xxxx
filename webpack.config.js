var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
      inline: true,
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
  		}
  	]
  }
};