const { defineConfig } = require('@vue/cli-service');
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  }, devServer: {
    host: '0.0.0.0',
    port: 3000,
    client: {
      webSocketURL: 'ws://0.0.0.0:3000/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 16
      })
  },
})
