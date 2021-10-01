const {VueLoaderPlugin} = require("vue-loader");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: {
        main: "./src/index.ts",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.tsx?$/,
                loader: "babel-loader",
                // options: {
                //   appendTsSuffixTo: [/\.vue$/],
                // },
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["autoprefixer"],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `
                                  @import "./src/styles/index.scss";
                                `
                        }
                    }
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [new VueLoaderPlugin(), new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html")
    })],
    resolve: {
        // alias: {
        //     vue$: "vue/dist/vue.runtime.esm.js",
        // },
        extensions: ["*", ".ts", ".js", ".vue", ".json"],
    },
};
