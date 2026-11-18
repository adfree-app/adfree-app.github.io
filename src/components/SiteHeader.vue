<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { copy, lang, languages, setLang } from '@/i18n'

const open = ref(false)

const languageItems = computed(() =>
  languages.map((entry) => ({
    label: entry.label,
    icon: lang.value === entry.id ? 'i-lucide-check' : undefined,
    onSelect: () => setLang(entry.id),
  })),
)

const links = computed(() => [
  { label: copy.value.nav.features, href: '/#features' },
  { label: copy.value.nav.how, href: '/#how' },
  { label: copy.value.nav.screenshots, href: '/#screenshots' },
  { label: copy.value.nav.platforms, href: '/#platforms' },
  { label: copy.value.nav.changelog, href: '/changelog' },
  { label: copy.value.nav.faq, href: '/#faq' },
])
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-default bg-default/80 backdrop-blur-xl">
    <UContainer>
      <div class="flex h-16 items-center justify-between gap-4">
        <RouterLink to="/" class="flex items-center gap-2.5">
          <img src="/app-icon.png" alt="" class="size-7 rounded-lg" />
          <span class="text-lg font-semibold tracking-tight text-highlighted">AdFree</span>
        </RouterLink>

        <nav class="hidden items-center gap-1 md:flex">
          <RouterLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            class="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-elevated/70 hover:text-highlighted"
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <div class="flex items-center gap-1.5">
          <!-- A menu, not a pair of buttons: the list grows with every
               language, and two buttons do not scale to five. -->
          <UDropdownMenu :items="languageItems" :content="{ align: 'end' }">
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-lucide-languages"
              :label="lang.toUpperCase()"
              trailing-icon="i-lucide-chevron-down"
              aria-label="Language"
            />
          </UDropdownMenu>

          <UButton
            :label="copy.sponsor.kicker"
            icon="i-lucide-heart"
            color="neutral"
            variant="subtle"
            to="/sponsor"
            class="hidden md:inline-flex"
          />
          <UButton
            icon="i-simple-icons-github"
            color="neutral"
            variant="ghost"
            to="https://github.com/yuuki-kagura/adfree"
            target="_blank"
            aria-label="AdFree on GitHub"
          />
          <UButton
            :label="copy.cta.download"
            trailing-icon="i-lucide-download"
            to="/#download"
            class="hidden sm:inline-flex"
          />
          <UButton
            :icon="open ? 'i-lucide-x' : 'i-lucide-menu'"
            color="neutral"
            variant="ghost"
            class="md:hidden"
            :aria-label="open ? 'Close menu' : 'Open menu'"
            @click="open = !open"
          />
        </div>
      </div>
    </UContainer>

    <div v-if="open" class="border-t border-default md:hidden">
      <UContainer>
        <nav class="flex flex-col py-3">
          <RouterLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            class="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-elevated/70 hover:text-highlighted"
            @click="open = false"
          >
            {{ link.label }}
          </RouterLink>
          <RouterLink
            to="/sponsor"
            class="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-elevated/70 hover:text-highlighted"
            @click="open = false"
          >
            {{ copy.sponsor.kicker }}
          </RouterLink>
        </nav>
      </UContainer>
    </div>
  </header>
</template>
