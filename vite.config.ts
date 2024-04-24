import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ar-work/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/index";`,
      }
    }
  },
  plugins: [react()],
})
