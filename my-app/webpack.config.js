const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
       filename: 'build.js',
       path: path.join(__dirname, '/dist'),
       library: ["MyLib"],
       libraryTarget: "umd"
    },
    module:{
      rules:[{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
      }]
    },
    plugins:[
       new HWP(
          {template: path.join(__dirname,'/src/index.html')}
       )
    ]
}