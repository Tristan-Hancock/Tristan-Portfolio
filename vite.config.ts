import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      // TODO: replace with your actual site URL or use an env var
      hostname: 'https://www.tristanhancock.com/',
      // optional settings:
      // changefreq: 'daily',
      // priority: 0.7,
      // exclude: ['/secret', '/drafts'],
    }),
  ],
})
