import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
   base: '/' ,
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      // 使用绝对路径或相对路径来指定 vue 包的位置
      vue: 'vue/dist/vue.esm-bundler.js', 
      '@': fileURLToPath(new URL('/src', import.meta.url)) 
    }
  }
})
