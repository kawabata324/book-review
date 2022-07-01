import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  assetsDir: './',
  outDir: 'docs',
  plugins: [react()],
  server: {
    port: 8000,
  },
})
