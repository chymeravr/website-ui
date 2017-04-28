var path = require('path');
var webpack = require('webpack');

// module.exports = {
//   entry: './src/index.js',

//   output: {
//     filename: 'static/bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: '/'
//   },

//   devtool: 'source-map',

//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         use: [
//           'babel-loader'
//         ],
//         exclude: /node_modules/
//       },
//       {
//         test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//         use: ['url-loader?limit=100000',],
//         exclude: /node_modules/,
//       },
//       // {
//       //   test: /\.css$/,
//       //   // include: path.resolve(__dirname, '../semantic/dist'),
//       //   use: 'style-loader!css-loader!postcss-loader',
//       //   exclude: /node_modules/,
//       // },
//       // {
//       //   test: /\.css$/,
//       //   // include: path.resolve(__dirname, 'assets/dashboard/css'),
//       //   use: 'style-loader!css-loader!postcss-loader',
//       // },
//       {
//         test: /\.css$/,
//         // include: path.resolve(__dirname, '../node_modules/react-dates/lib/css/'),
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },

//   plugins: [
//     // new webpack.optimize.UglifyJsPlugin({
//     //   sourceMap: true,
//     //   comments: false
//     // })
//   ]
// };
module.exports = {
    stats: {
        // Configure the console output
        errorDetails: true, //this does show errors
        colors: false,
        modules: true,
        reasons: true
    },
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:3000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './src/index.js',
        // the entry point of our app
    ],

    output: {
        filename: 'bundle.js',
        // the output bundle

        path: path.resolve(__dirname, 'dist'),

        publicPath: '/static/'
        // necessary for HMR to know where to load the hot update chunks
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader?limit=100000',],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                // include: path.resolve(__dirname, '../node_modules/react-dates/lib/css/'),
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.NoEmitOnErrorsPlugin(),
        // do not emit compiled assets that include errors
        new webpack.DefinePlugin({
            PRODUCTION: false
        })
    ],

    devServer: {
        host: 'localhost',
        port: 3000,

        historyApiFallback: true,
        // respond to 404s with index.html

        hot: true,
        // enable HMR on the server
    },
};
