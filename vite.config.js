import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, './src/pages'),
      ui: path.resolve(__dirname, './src/ui')
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/react-returns/' : '/'
})
