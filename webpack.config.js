const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry:path.join(__dirname,"src/app.js"),
    output:{
        path:path.join(__dirname,"dist"),
        filename:"bundle.js"
    },
    plugins:[
        new HtmlWebpackPlugin()
    ]

}
module.exports = config
console.log("process.env.NODE_ENV 的值是(webpack.config.js)："+ process.env.NODE_ENV)