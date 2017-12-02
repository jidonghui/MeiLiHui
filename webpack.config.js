var path = require("path");


module.exports = {

    //用来配置需要打包的入口文件
    entry:{
        app:path.resolve(__dirname,"vueProject/main")
    },
    //配置打包后的文件名字和文件 夹
    output:{
        path:path.resolve(__dirname,"vueProject/build"),
        filename:"[name].bundle.js"

    },
    devServer: {
        // contentBase: "./MeiLi",  //以public为根目录提供文件
        // historyApiFallback: true,
        // inline: true,
        contentBase: "./vueProject",
        historyApiFallback: true,
        hot: true ,
        // host:'localhost',
        inline: true,
        progress: true
    },
    module:{
        rules:[
            {test:/\.(png|gif|jpg|jpeg|webp)$/,loader:"url-loader"},
            {test:/\.(eot|svg|ttf|woff)$/,loader:"url-loader"},
            {test:/\.vue$/,loader:"vue-loader"},
            {test:/\.css$/,loaders:"style-loader!css-loader"},
            {test: /\.(scss|sass)$/, loader: 'style-loader!css-loader!sass-loader'},
            {test:/\.js$/,loader:"babel-loader",query:{presets:["es2015","stage-0"]}}
        ]
    }
}