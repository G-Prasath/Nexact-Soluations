import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

const robotsPlugin = () => ({
  name: 'generate-robots',
  closeBundle() {
    const robots = `User-agent: *\nAllow: /\nSitemap: https://www.nexactsolutions.in/sitemap.xml\n`
    writeFileSync(resolve(__dirname, 'dist/robots.txt'), robots)
  }
})

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.nexactsolutions.in',
      routes: ['/'],
      changefreq: 'monthly',
      priority: 1.0,
      lastmod: new Date().toISOString().split('T')[0],
    }),
    robotsPlugin(),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) {
              return 'gsap'
            }
            return 'vendor'
          }
        }
      }
    },

    minify: 'terser',
    cssCodeSplit: true,
  },
})