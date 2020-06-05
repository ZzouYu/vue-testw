//这个配置文件就是一个js文件，通过node的模块化操作， 向外暴露一个配置对象
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')  //导入插件需要引入
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//这个插件连哥哥作用
//1.在内存中根据指定页面生成一个页面
//2.自动在页面追加打包好的bundle
module.exports={
    mode:'development',
   entry:path.join(__dirname,'./src/main.js'),//入口，指定要打包哪个文件
   output:{  //输出文件的相关配置
        path:path.join(__dirname,'./dist'),  //指定打包好的文件输出到那个目录
        filename:'bundle.js'//指定打包好的文件输出的名称
    },
/*--open --port 3000 --contentBase src --hot*/
    devServer: {
           open:true,//自动打开浏览器
           port:3000,
           contentBase:'src',
           hot:true
    },
    //配置一些插件
    plugins: [
        new htmlWebpackPlugin({   //创建一个在内存中生成html的插件
            template:path.join(__dirname,"./src/index.html"),
            filename: 'index.html', //指定生成的页面名称
        }
        ),
        new VueLoaderPlugin()
    ],
    //存放所有第三方匹配和处理规则
    module:{
        rules: [
            {test:/\.css$/,use:['style-loader','css-loader']} ,//正则匹配 所有以css结尾的文件，用什么匹配规则 第三方loadern
            {test:/\.vue$/,use:'vue-loader'}
        ]
    }
}
//使用webpack-dev-server 来实现自动打包编译
//npm i webpack-dev-server -D 把项目安装到本地
//由于是本地安装，无法直接在终端运行命令


//创建npm init 生成package.json 的配置文件
// "dev": "webpack-dev-server --open --port 3000 --contentBase src  --hot"
//  npm run dev    会执行webpack-dev-server命令 --open自动打开页面  --port打开 3000端口 --contentBase 默认路径
//--hot 补丁刷新，只刷新修改过的一些代码，  对于css代码，无缝刷新
//  bundle会在服务器生成一个文件(内存中)不i会访问本地的dist下的，此时的html文件还是在物理磁盘上，把它放在内存中需要借助
//html-webpack-plugin 插件   npm i ** -D