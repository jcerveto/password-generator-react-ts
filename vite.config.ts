import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://jcerveto.github.io/password-generator-react-ts",
  plugins: [react()],
})
