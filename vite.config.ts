import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/bundles/misstype-tourist-online-gen2/',
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        'graphics/index': resolve(__dirname, 'graphics/index.html'),
        'dashboard/scores': resolve(__dirname, 'dashboard/scores.html'),
        'dashboard/subjects': resolve(__dirname, 'dashboard/subjects.html'),
      },
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
})
