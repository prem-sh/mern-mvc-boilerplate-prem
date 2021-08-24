const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'production';

module.exports = {
    entry: path.join(__dirname, 'views', 'src', 'index.js'),
    output: { 
        path: path.join(__dirname, 'views', "build"), 
        filename: "bundle.js" 
    },
    mode: process.env.NODE_ENV || "development",
    resolve: { modules: [path.resolve(__dirname, 'views', "src"), "node_modules"] },
    devServer: { 
        static: path.join(__dirname, 'views', "build") 
    },
    module: {
        rules: [
            { 
                test: /\.(js)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'views', "public", "index.html"),
            filename: "index.html",
        })
    ],
};
