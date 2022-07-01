import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/book-review/',
  plugins: [react()],
  server: {
    port: 8000,
  },
})