const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, '/src/index.tsx'),
    output: {
       filename: 'build.js',
       path: path.join(__dirname, '/dist'),
       library: ["MyLib"],
       libraryTarget: "umd"
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module:{
      rules:[{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
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