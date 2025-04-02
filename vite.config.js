import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/test/',
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps in production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // Inline small assets
  },
  server: {
    port: 3000,
    open: true
  }
})
