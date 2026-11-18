<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { copy } from '@/i18n'
import { EXTENSION_RELEASES, EXTENSION_SOURCE } from '@/github'
</script>

<template>
  <SiteHeader />

  <main class="py-16 sm:py-24">
    <UContainer>
      <div class="mx-auto max-w-3xl">
        <p class="text-sm font-medium uppercase tracking-[0.18em] text-primary">
          {{ copy.install.kicker }}
        </p>
        <h1 class="mt-3 text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          {{ copy.install.title }}
        </h1>
        <p class="mt-4 text-base/7 text-muted">
          {{ copy.install.body }}
        </p>

        <ol class="mt-12 grid gap-6">
          <li
            v-for="(step, index) in copy.install.steps"
            :key="index"
            class="flex items-start gap-4 rounded-2xl border border-default bg-elevated/40 p-5"
          >
            <span
              class="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
            >
              {{ index + 1 }}
            </span>
            <div>
              <p class="text-sm font-medium text-highlighted">{{ step.title }}</p>
              <p class="mt-1 text-sm leading-relaxed text-muted">{{ step.body }}</p>
            </div>
          </li>
        </ol>

        <div class="mt-12 grid gap-8">
          <figure>
            <img
              src="/shots/extension-load-unpacked.png"
              :alt="copy.install.shots[0].loadAlt"
              class="w-full rounded-2xl border border-default"
              width="640"
              height="360"
              loading="lazy"
            >
            <figcaption class="mt-3 text-xs leading-relaxed text-dimmed">
              {{ copy.install.shots[0].caption }}
            </figcaption>
          </figure>
          <figure>
            <img
              src="/shots/extension-installed.png"
              :alt="copy.install.shots[1].installedAlt"
              class="w-full rounded-2xl border border-default"
              width="640"
              height="360"
              loading="lazy"
            >
            <figcaption class="mt-3 text-xs leading-relaxed text-dimmed">
              {{ copy.install.shots[1].caption }}
            </figcaption>
          </figure>
        </div>

        <div class="mt-12 flex flex-wrap items-center gap-3">
          <UButton
            :to="EXTENSION_RELEASES"
            target="_blank"
            rel="noopener"
            color="primary"
            size="lg"
            icon="i-lucide-download"
            class="rounded-xl"
          >
            {{ copy.install.download }}
          </UButton>
          <UButton
            :to="EXTENSION_SOURCE"
            target="_blank"
            rel="noopener"
            color="neutral"
            variant="subtle"
            size="lg"
            icon="i-lucide-code-2"
            class="rounded-xl"
          >
            {{ copy.install.source }}
          </UButton>
        </div>

        <p class="mt-6 text-sm text-dimmed">{{ copy.install.note }}</p>

        <RouterLink
          to="/"
          class="mt-12 inline-flex items-center gap-2 text-sm text-muted transition hover:text-highlighted"
        >
          <UIcon name="i-lucide-arrow-left" class="size-4" />
          {{ copy.install.back }}
        </RouterLink>
      </div>
    </UContainer>
  </main>

  <SiteFooter />
</template>