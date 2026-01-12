import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Custom plugin to watch tailwind.config.js and invalidate CSS
    {
      name: 'tailwind-config-watcher',
      configureServer(server) {
        const configPath = resolve(__dirname, 'tailwind.config.js')
        server.watcher.add(configPath)
        server.watcher.on('change', (file) => {
          if (file === configPath || file.endsWith('tailwind.config.js')) {
            // Invalidate all CSS modules to force recompilation with new Tailwind config
            server.moduleGraph.invalidateAll()
            // Trigger HMR update for CSS files
            server.ws.send({
              type: 'update',
              updates: [{
                type: 'css-update',
                path: '/src/styles/globals.css',
                timestamp: Date.now(),
              }],
            })
          }
        })
      },
    },
  ],
  base: '/design/',
  server: {
    watch: {
      // Explicitly watch config files
      ignored: ['!**/tailwind.config.js'],
    },
  },
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true,
  },
})