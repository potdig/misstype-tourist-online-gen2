import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    viteStaticCopy({
      targets: [
        {
          src: 'package-nodecg.json',
          dest: '.',
          rename: 'package.json',
        },
      ],
    }),
  ],
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
