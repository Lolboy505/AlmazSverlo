import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'

// Создаем замену __dirname для ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Теперь символ @ всегда указывает на папку src
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/' 
  // '/AlmazSverlo/', // Оставляем для корректных путей в билде
})