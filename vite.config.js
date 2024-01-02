import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': '/src',
    },
  },
  server: {
    cors: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
    },
  },
});