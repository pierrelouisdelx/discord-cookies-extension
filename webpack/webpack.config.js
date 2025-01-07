const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = path.resolve(__dirname, '..', 'src');

module.exports = {
    mode: 'production',
    entry: {
        content_script: path.resolve(srcDir, 'content_script.ts'),
        background: path.resolve(srcDir, 'background.ts'),
    },
    output: {
        path: path.join(__dirname, '../dist/js'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: '.', to: '../', context: 'public' }],
        }),
    ],
};
