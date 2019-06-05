
var webpack = require('webpack');
var path = require('path');

/***********************可选项一待续********************/
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
/*****************************************************/

module.exports = {

/***********************可选项一**********************/ 
      //插件项
//    plugins: [commonsPlugin],
/****************************************************/

    //页面入口文件配置
    entry: {
        index : path.join(__dirname,'./index.jsx')
    },
    //入口文件输出配置
    output: {
        path: path.join(__dirname,'./build/'),
        filename: '[name].js',
        publicPath: '/assets/'

    },
    
    devtool: 'eval-source-map',//webpack下的调试模式
    //webpack-dev-server配置项
    //webpack-dev-server的准备工作:
    //1.安装webpack-dev-server：
    //# npm install -g webpack-dev-server
    //# npm install --save-dev webpack-dev-server
    //运行：webpack-dev-server --hot --inline
    devServer: {
        historyApiFallback: true,
        contentBase: "./",
        quiet: false, //控制台中不输出打包的信息
        noInfo: false,
        hot: true,
        inline: true,
        lazy: false,
        watchOptions: {
            aggregateTimeout: 300
        },
        port: '8088'
    },


/***********************可选项二**********************/
    module: {
        //加载器配置
        loaders: [

        /***********************CSS加载器*************************/
            /*
            CCS加载器的准备工作；
            1.安装style-loader：
            # npm install --save-dev style-loader 
            2.安装css-loader：
            # npm install --save-dev css-loader
            3.安装sass-loader：
            # npm install --save-dev sass-loader
            # npm install node-sass
            */
            {test: /\.(css|scss|less)$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings 
            }, {
                loader: "css-loader" // translates CSS into CommonJS 
            }, {
                loader: "sass-loader" // compiles Sass to CSS 
            }]},
            {test: /\.(less)$/,
                use: [{
                    loader: 'less-loader'// compiles less to CSS 
            }]},
        /**********************js/jsx加载器************************/ 
            /*
            babel-loader的准备工作。
            1.安装 babel-loader： 
            # npm install babel-preset-es2015 --save-dev
            3.ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
            # npm install --save-dev babel-preset-stage-0
            # npm install --save-dev babel-preset-stage-1
            # npm install --save-dev babel-preset-stage-2
            # npm install --save-dev babel-preset-stage-3
            4.安装react加载器：
            # npm install --save-dev babel-preset-react
            */
            {test: /\.(js|jsx)?$/,
            loader:"babel-loader?{'presets':['babel-preset-es2015','react']}"},//方式一
            //loader: 'babel-loader?presets[]=babel-preset-es2015,presets[]=babel-preset-stage-0,presets[]=react'},//方式二


        /**********************图片加载器************************/

            /*
            1.安装url加载器：
            # npm install url-loader --save-dev
            */ 
            {test: /\.(png|jpg)$/,loader: 'url-loader?limit=1200&name=[hash].[ext]'},

            /*
            2.安装file-loader： 
            # npm install file-loader --save-dev
            */
            {test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,loader: 'file-loader?name=[hash].[ext]'}
        ]
    },
/****************************************************/

/***********************可选项三**********************
    //其它解决方案配置
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.js', '.json', '.scss']
    }
    resolveLoader:{
        root:[/node_modules/]
    }
****************************************************/

};