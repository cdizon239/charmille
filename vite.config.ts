import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base is '/charmille/' for the GitHub Pages project URL
// (cdizon239.github.io/charmille/). Change to '/' if you add a custom domain.
export default defineConfig({
  base: '/charmille/',
  plugins: [react()],
})
