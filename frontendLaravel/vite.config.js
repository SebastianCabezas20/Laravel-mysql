import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/



export default {
  plugins: [react()],
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}