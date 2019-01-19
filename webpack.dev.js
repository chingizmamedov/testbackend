const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path')


module.exports = merge(common, {
    mode: 'development',
    devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    proxy: {
        '/api': {
                target: 'http://testbackend',
                secure: false,
                changeOrigin: true
            }
        }
    },
    entry: './src/js/index.js',
    output: {
    filename: 'bundle.js',
    },
    module: {
    rules: [

    ]
    },
    plugins: [
        
    ]

})