import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import path from 'path'

// Создаем замену __dirname для ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    vike()
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      host: 'localhost',
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@footer': path.resolve(__dirname, './src/components/footer'),
      '@header': path.resolve(__dirname, './src/components/header'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@HomePage': path.resolve(__dirname, './src/pages/HomePage'),
      '@constants': path.resolve(__dirname, './src/constants'),

    },
  },
  base:
    '/'
  // '/AlmazSverlo/', // Оставляем для корректных путей
  //  в билде для github где AlmazSverlo название репозитория 
})