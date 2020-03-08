const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            { test:/\.(png|jpg|jepg|svg)$/, use:[ { loader:'url-loader' ,
                    options: {esModule: false, limit:1024, name:'images/[name][hash].[ext]'}}]
            },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: { "vue$": "vue/dist/vue.js"}
    }
}