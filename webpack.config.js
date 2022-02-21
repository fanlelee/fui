const path = require('path')
module.exports = {
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
                loader: 'ts-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: { }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}