import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pizzeria.mammamia.github.io/',
  plugins: [react()],
})
