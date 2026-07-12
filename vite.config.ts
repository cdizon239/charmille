import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Served at the root of the custom domain charmilledizon.com, so base is '/'.
export default defineConfig({
  plugins: [react()],
})
