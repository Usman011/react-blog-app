import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_GRAPHQL_URL': JSON.stringify(process.env.VITE_GRAPHQL_URL)
  },
  optimizeDeps: {
    include: ['@mui/icons-material', '@mui/material', '@emotion/react']
  },
  resolve: {
    alias: {
      components: '/src/components',
      pages: '/src/pages',
      assets: '/src/assets',
      theme: '/src/theme',
      stores: '/src/stores',
      constants: '/src/constants',
      api: '/src/api',
      types: '/src/types'
    }
  }
})
