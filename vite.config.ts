import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'

// Nuxt UI runs in a plain Vue app through its Vite plugin: components, the
// Tailwind layer and the runtime colors all come from here.
//
// `SITE_BASE` is what GitHub Pages needs for a project site (/adfree/); a
// custom domain or a local run leaves it at '/'.
export default defineConfig({
  base: process.env.SITE_BASE || '/',
  plugins: [
    vue(),
    ui({
      ui: {
        colors: { primary: 'green', neutral: 'slate' },
      },
      icon: {
        mode: 'svg',
        clientBundle: {
          scan: true,
          // The scanner only sees names written into the markup. Platform icons
          // come from the copy file and are bound with :name, so they have to be
          // named here or the build ships an empty <svg> for each one.
          icons: [
            'i-simple-icons-android',
            'i-simple-icons-windows',
            'i-simple-icons-linux',
            'i-simple-icons-apple',
            'i-simple-icons-debian',
            'i-simple-icons-ubuntu',
            'i-simple-icons-archlinux',
            'i-simple-icons-fedora',
            'i-lucide-check',
            'i-lucide-download',
            'i-lucide-copy',
            'i-lucide-heart',
            'i-lucide-clipboard-copy',
            'i-lucide-coffee',
            'i-lucide-wallet',
            'i-lucide-landmark',
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
