import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import ChangelogPage from './pages/ChangelogPage.vue'
import SponsorPage from './pages/SponsorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/changelog', name: 'changelog', component: ChangelogPage },
    { path: '/sponsor', name: 'sponsor', component: SponsorPage },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

createApp(App).use(router).use(ui).mount('#app')
