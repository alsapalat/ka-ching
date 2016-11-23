var path = require('path');
var webpack = require('webpack');

var NoErrorsPlugin = webpack.NoErrorsPlugin;
var optimize = webpack.optimize;

var plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
];

if (process.env.COMPRESS) {
    plugins.push(
        new optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true,
                warnings: false
            }
        }),
        new optimize.OccurenceOrderPlugin(),
        new optimize.DedupePlugin(),
        new NoErrorsPlugin()
    );
}

plugins.push(
    new optimize.CommonsChunkPlugin('vendors', 'vendors.js')
)

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/app/Provider'),
        vendors: ['react','react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist/js/'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /src\/.+.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react','stage-0']
                }
            }
        ]
    },
    plugins: plugins
};
