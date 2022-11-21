import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://mako542b.github.io/paper-scissors-rock/',
  plugins: [react()]
})
