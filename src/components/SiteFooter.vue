<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { copy } from '@/i18n'

const year = new Date().getFullYear()
const from = 2026

const product = computed(() => [
  { label: copy.value.nav.features, href: '/#features' },
  { label: copy.value.nav.screenshots, href: '/#screenshots' },
  { label: copy.value.nav.platforms, href: '/#platforms' },
  { label: copy.value.nav.changelog, href: '/changelog' },
  { label: copy.value.nav.faq, href: '/#faq' },
  { label: copy.value.sponsor.kicker, href: '/sponsor' },
])

const project = computed(() => [
  { label: copy.value.footer.source, href: 'https://github.com/yuuki-kagura/adfree' },
  { label: copy.value.footer.releases, href: 'https://github.com/yuuki-kagura/adfree/releases' },
  { label: copy.value.footer.issues, href: 'https://github.com/yuuki-kagura/adfree/issues' },
  { label: copy.value.footer.design, href: 'https://github.com/yuuki-kagura/adfree/blob/main/DESIGN.md' },
])
</script>

<template>
  <footer class="border-t border-default bg-elevated/20">
    <UContainer class="py-14">
      <div class="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <RouterLink to="/" class="flex items-center gap-2.5">
            <img src="/app-icon.png" alt="" class="size-7 rounded-lg" />
            <span class="text-lg font-semibold text-highlighted">AdFree</span>
          </RouterLink>
          <p class="mt-4 max-w-sm text-sm/6 text-muted">
            {{ copy.footer.blurb }}
          </p>
          <p class="mt-4 max-w-sm text-xs/5 text-dimmed">
            {{ copy.footer.disclaimer }}
          </p>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-highlighted">{{ copy.footer.product }}</h3>
          <ul class="mt-4 space-y-2.5">
            <li v-for="link in product" :key="link.href">
              <RouterLink :to="link.href" class="text-sm text-muted transition hover:text-highlighted">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-highlighted">{{ copy.footer.project }}</h3>
          <ul class="mt-4 space-y-2.5">
            <li v-for="link in project" :key="link.href">
              <a
                :href="link.href"
                target="_blank"
                rel="noreferrer"
                class="text-sm text-muted transition hover:text-highlighted"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col gap-3 border-t border-default pt-6 text-xs text-dimmed sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ from }}–{{ year }} {{ copy.footer.rights }}</p>
        <p>{{ copy.footer.madeWith }}</p>
      </div>
    </UContainer>
  </footer>
</template>
