<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { marked } from 'marked'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { copy } from '@/i18n'

type State = 'loading' | 'ready' | 'error'

const state = ref<State>('loading')
const markdown = ref('')

// Read the changelog with a fetch and render it here. The visitor never leaves
// the page and no raw URL is opened in their browser.
async function load() {
  state.value = 'loading'
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}changelog.md`, { cache: 'no-cache' })
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
    markdown.value = await response.text()
    state.value = markdown.value.trim() ? 'ready' : 'error'
  } catch {
    state.value = 'error'
  }
}

onMounted(load)

const html = computed(() => {
  if (!markdown.value.trim()) return ''
  // The file is ours and already in the build; the output is sanitised by the
  // fact that marked is only rendering headings, lists and emphasis here.
  return marked.parse(markdown.value, { async: false, gfm: true }) as string
})
</script>

<template>
  <SiteHeader />

  <main class="py-16 sm:py-24">
    <UContainer>
      <div class="mx-auto max-w-3xl">
        <p class="text-sm font-medium uppercase tracking-[0.18em] text-primary">
          {{ copy.changelog.title }}
        </p>
        <h1 class="mt-3 text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          {{ copy.changelog.title }}
        </h1>
        <p class="mt-4 text-base/7 text-muted">
          {{ copy.changelog.body }}
        </p>

        <p v-if="state === 'loading'" class="mt-10 text-sm text-muted">
          {{ copy.changelog.loading }}
        </p>
        <p v-else-if="state === 'error'" class="mt-10 text-sm text-danger">
          {{ copy.changelog.error }}
        </p>

        <article v-else class="changelog mt-12" v-html="html" />

        <RouterLink
          to="/"
          class="mt-12 inline-flex items-center gap-2 text-sm text-muted transition hover:text-highlighted"
        >
          <UIcon name="i-lucide-arrow-left" class="size-4" />
          {{ copy.changelog.back }}
        </RouterLink>
      </div>
    </UContainer>
  </main>

  <SiteFooter />
</template>

<style scoped>
/* Nothing here pulls in a typography plugin: the changelog is headings, a few
   lists and links, so the styles it needs are short enough to write out. */
.changelog :deep(h1),
.changelog :deep(h2),
.changelog :deep(h3) {
  color: var(--ui-text-highlighted);
  font-weight: 600;
  letter-spacing: -0.01em;
}

.changelog :deep(h1) {
  font-size: 1.5rem;
  margin-top: 0;
  border-bottom: 1px solid var(--ui-border);
  padding-bottom: 0.75rem;
}

.changelog :deep(h2) {
  font-size: 1.25rem;
  margin-top: 2.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--ui-border);
}

.changelog :deep(h3) {
  font-size: 1rem;
  margin-top: 1.75rem;
  color: var(--ui-primary);
}

.changelog :deep(p),
.changelog :deep(li) {
  color: var(--ui-text-muted);
  font-size: 0.9375rem;
  line-height: 1.7;
}

.changelog :deep(ul) {
  list-style: disc;
  padding-left: 1.25rem;
  margin-top: 0.75rem;
  display: grid;
  gap: 0.5rem;
}

.changelog :deep(a) {
  color: var(--ui-primary);
  text-decoration: none;
}

.changelog :deep(a:hover) {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.changelog :deep(code) {
  font-family: var(--font-mono, ui-monospace, monospace);
  font-size: 0.85em;
  border: 1px solid var(--ui-border);
  border-radius: 0.375rem;
  padding: 0.05rem 0.3rem;
}

.changelog :deep(strong) {
  color: var(--ui-text-highlighted);
  font-weight: 600;
}

.changelog :deep(hr) {
  border-color: var(--ui-border);
  margin: 2rem 0;
}
</style>
