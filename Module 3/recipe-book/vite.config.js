import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import commonjs from 'vite-plugin-commonjs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), commonjs()],
  build: {
    commonjsOptions: { transformMixedEsModules: true }
  },
  server: {
    // Forward API so we can access it within our components later
    proxy: { "/api": "http://localhost:3001" },
  },
})