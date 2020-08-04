const path = require('path');
const webpack = require('webpack');

const root = path.resolve( __dirname, '');

module.exports = {
    context: root,
    entry: {
        'main': './app.ts',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve( __dirname, 'build' )
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            root,
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: 'ts-loader'
            }
        ]
    },

    devtool: 'cheap-module-source-map',
    optimization: {
        minimize: false
    },
};
