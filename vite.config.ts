import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Resume/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
} as Parameters<typeof defineConfig>[0])
