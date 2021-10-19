const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "production",
    entry: {
        index: './lib/index.tsx' //入口文件
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'FUI',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            //配置loader没有任何规则，不停的试，不停的找
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "FUI",
            template: "index.html"
        })
    ],
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    }
}