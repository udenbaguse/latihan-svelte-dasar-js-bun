import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // AUTO-GENERATED VITE INPUT START
        // AUTO-GENERATED VITE INPUT END
      },
    },
  },
  plugins: [svelte()],
})
