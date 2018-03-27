const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.join(__dirname, 'app', 'build')
const APP_DIR = path.join(__dirname, 'app')
const config = {
   entry: path.join(APP_DIR, 'index.js'),
   output: {
     path: BUILD_DIR,
     filename: 'bundle.js'     
   },
   module: {
    rules: [
     {
       test: /(\.css|.scss)$/,
       use: [{
           loader: "style-loader"
       }, {
           loader: "css-loader" // translates css for commonJS
       }, {
           loader: "sass-loader" // compiles scss/sass code to css code
       }]
     },
     {
       test: /\.(jsx|js)?$/,
       use: [{
         loader: "babel-loader",
         options: {
           cacheDirectory: true,
           presets: ['react', 'es2015'] // compiles JSX / ES6 into commonJS
         }
       }]
     }
    ],

  }
}

module.exports = config