import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    fs: {
      allow: [
        './',
        'C:/Users/ACER/.gemini/antigravity/brain/b09a1d23-a136-4ed0-b23e-450fb28a25a4'
      ]
    }
  }
})
