import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs'
  },
  optimizeDeps: {
    include: ['mapbox-gl', 'flatgeobuf']
  },
  resolve: {
    alias: {
      // Use the explicit path without dist/
      'mapbox-gl': 'mapbox-gl',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
  ]
})