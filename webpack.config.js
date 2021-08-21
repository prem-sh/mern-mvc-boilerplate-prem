const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: path.join(__dirname, 'views', "src", "index.js"),
        about : path.join(__dirname, 'views', "src", "about.js")
    },
    output: { 
        path: path.join(__dirname, 'views', "build"), 
        filename: "[name].bundle.js" 
    },
    mode: process.env.NODE_ENV || "development",
    resolve: { modules: [path.resolve(__dirname, 'views', "src"), "node_modules"] },
    devServer: { 
        proxy: { // proxy URLs to backend development server
            '/api': 'http://localhost:3000'
          },
        static: path.join(__dirname, 'views', "build") 
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'views', "src", "index.html"),
            filename: "index.html",
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'views', "src", "about.html"),
            filename: "about.html",
            chunks: ['about']
        }),
    ],
};
