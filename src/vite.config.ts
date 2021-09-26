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
          entryFileNames: "[name].min.js",
          dir: '../dest/'
        },
        {
          format: 'esm',
          name: "blinker",
          entryFileNames: "[name].esm.js",
          chunkFileNames: "[name].esm.js",
          dir: '../dest/'        
        }
      ]
    }
  }
})
