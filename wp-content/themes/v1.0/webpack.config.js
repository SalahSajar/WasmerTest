const path = require('path');

module.exports = {
    mode: 'development', // Change to 'production' for optimized builds
    entry: ['./src/index.js', "./src/openSimplexNoise.js"],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build/js'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};