'use strickt';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

var env = process.env.NODE_ENV || 'development';

module.exports = {
    context: __dirname + '/src',

    entry: {
        main: "./js/main"
    },
    output: {
        path: __dirname,
        publicPath: './',
        filename: "js/[name].js"
    },

    watch: env === 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: "source-map",

    plugins: [
        new ExtractTextPlugin({
            filename: "css/main.css",
            disable: false,
            allChunks: true
        })
    ],

    resolve: {
        modulesDirectories : ['node_modules'],
        extensions: ['', '.js', '.styl']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader'],
        extensions: ['', '.js', '.styl']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }, {
            test: /\.styl$/i,
            loader: ExtractTextPlugin.extract({
                loader: "css?minimize!postcss!stylus"
            })
        },{
            test: /\.(jpe?g|jpg|png|gif|svg)$/i,
            loaders: [ 'file?name=../[path][name].[ext]', 'img?minimize&optimizationLevel=5&progressive=true' ]
        },{
            test: /\.md$/,
            loader: "html!markdown"
        },
        {
            test: /particles\.js/,
            loader: 'exports?particlesJS=window.particlesJS,pJSDom=window.pJSDom'
        }]
    },

    postcss: function () {
        return [autoprefixer];
    },

    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: __dirname
    }
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}