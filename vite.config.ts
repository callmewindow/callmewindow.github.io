import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 打包路径，对应publicPath
  base: './',
  build: {
    // 打包路径，对应outputDir
    outDir: 'docs',
  },
  // 配置运行的有关属性
  server: {
    // 运行端口
    port: 8080,
    // 自动打开
    open: true,
    // 接口转发代理
    // proxy: {

    // }
  }
})