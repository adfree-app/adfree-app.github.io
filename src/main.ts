import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import ChangelogPage from './pages/ChangelogPage.vue'
import SponsorPage from './pages/SponsorPage.vue'
import InstallExtensionPage from './pages/InstallExtensionPage.vue'

// GitHub Pages serves `404.html` for a route it has no file for, and that file
// asks to have the real path put back here. One redirect, then the address bar
// shows the deep link the visitor asked for.
const parked = new URLSearchParams(location.search).get('redirect')
if (parked && parked !== '/' && parked.startsWith('/')) {
  history.replaceState(null, '', import.meta.env.BASE_URL.replace(/\/$/, '') + parked)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/changelog', name: 'changelog', component: ChangelogPage },
    { path: '/sponsor', name: 'sponsor', component: SponsorPage },
    { path: '/install-extension', name: 'install-extension', component: InstallExtensionPage },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

createApp(App).use(router).use(ui).mount('#app')
