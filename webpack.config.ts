// const path = require("path");
//const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

type Mode = 'production' | 'development';

interface IEnvironment {
  mode?: Mode;
  port?: number;
}

export default (env: IEnvironment) => {
  const isDev = env.mode === 'development';

  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: './src/index.ts', // Точка входа для сборки проекта
    output: {
      filename: '[name].[contenthash:8].js', // Имя выходного файла сборки
      path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
      clean: true,
      assetModuleFilename: 'assets/[hash][ext]'
    },
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev
      ? {
          port: env.port ? env.port : 5000,
          static: './dist',
          open: true,
          liveReload: true
        }
      : undefined,
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html')
      }),
      new ESLintPlugin({
        extensions: ['ts'],
        exclude: 'node_modules',
        fix: true, // Автоматически исправлять ошибки
        formatter: 'stylish'
      }),
      isDev && new webpack.ProgressPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    }
  };

  return config;
};
