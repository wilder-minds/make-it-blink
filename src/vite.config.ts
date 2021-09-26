import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: "./main.ts",
      output: [
        {
          format: 'umd',
          name: "blinker",
          entryFileNames: "blinker.min.js",
          dir: '../dist/'
        },
        {
          format: 'esm',
          name: "blinker",
          entryFileNames: "blinker.esm.js",
          chunkFileNames: "blinker.vendor.esm.js",
          dir: '../dist/'        
        }
      ]
    }
  }
})
