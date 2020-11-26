const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
                },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                loader: "url-loader",
                options: {
                    limit: 10000
                }
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HWP({
            template: 'public/index.html'
        })
    ]
};