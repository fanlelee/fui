const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
        mode: "development",
        plugins: [
            new HtmlWebpackPlugin({
                title: "FUI",
                template: "index.html"
            })
        ],
        module: {
            rules: [
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
                    test: /\.svg$/,
                    loader: 'svg-sprite-loader',
                    options: {}
                },
                {
                    test: /\.scss$/,
                        use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        }
    }
)