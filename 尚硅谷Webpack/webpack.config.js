
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolveCname } = require('dns')

module.export = {
    //webpack配置
    //入口起点
    entry: './src/index.js',
    //输出
    output: {
        //输出文件名
        filename: 'built.js',
        //输出路径
        //_dirname nodejs的变量，代表当前文件的目录绝对路径
        path: resolve(__dirname, 'build')
    },
    //loader的配置
    module: {
        rules: [
            //详细loader配置
            //不同文件必须配置不同loader处理
            {
                //匹配哪些文件
                test: /\.css$/,
                //使用哪些loader进行处理
                use: [
                    //use数组中loader执行顺序：从下到上 依次执行
                    //创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    //将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                //要使用多个loader处理用use
                use: [
                    'stylee-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                //问题：默认处理不了html中img图片
                //处理图片资源
                test: /\.(jpg|png|gif)$/,
                //使用一个loader
                //下载 url-loader file-loader
                loader: 'url-loader',
                options: {
                    //图片大小小于8kb，就会被base64处理
                    //优点：减少请求数量（减轻服务器压力）
                    //缺点：图片体积会更大（文件请求速度更慢）
                    limit: 8 * 1024,
                    //问题：url-loader默认使用es6模块化解析，html-loader引用图片是commonjs
                    //解析时会出问题[object Module]
                    //解决：关闭url-loader的es6模块化，使用commonjs解析
                    esModule: false,
                    //给图片重命名
                    //[hash:10]取图片的hash的前10位
                    name: '[hash:10].[ext]'
                }
            },
            {
                test: /\.html$/,
                //处理html文件的img图片（负责引入ing，从而能被url-loader处理）
                loader: 'html-loader'
            },
            //打包其它资源（除了html/js/css资源以外的资源）
            {
                //排除css/js/html资源
                exclude: /\.(css|js|html)$/,
                loader: 'file-loader'
            }
        ]
    },
    //plugins配置
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    //模式
    mode: 'development',//开发模式


    //开发服务器 dveServer：用来自动化（自动编译 自动打开/刷新浏览器）
    //特点：只会在内存中编译打包，不会有任何输出
    //启动devServer指令为：npx webpack-dev-server
    devServer: {
        contentBase: resolve(__dirnam, 'build'),
        //启动gzip压缩
        compress: true,
        //端口号
        port: 3000,
        //自动打开浏览器
        open: true
    }
}