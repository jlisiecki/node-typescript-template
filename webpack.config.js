//@ts-check
const { join } = require('path');
const nodeExternals = require('webpack-node-externals');

/** @type { import('webpack').Configuration } */
const config = {
    mode: 'production',
    entry: './src/main.ts',
    output: {
        path: join(__dirname, 'dist'),
        filename: 'main.js'
    },
    target: 'node',
    module: {
        rules: [{ test: /\.tsx?$/, use: 'ts-loader' }]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    externals: [nodeExternals()]
};

module.exports = config;
