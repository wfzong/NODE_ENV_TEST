const webpack = require('webpack')
const merge = require('webpack-merge')

const config = require("./webpack.config.js")

module.exports = merge(config,{
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: process.env.NODE_ENV === 'production'
        })
    ]
})
console.log("process.env.NODE_ENV 的值是(webpack.config.prod.js)："+ process.env.NODE_ENV)