<script setup lang="ts">
import { copy } from '@/i18n'

// The browser extension is the one piece of AdFree that runs inside the
// browser, and it holds no rules of its own: it asks the app what it would have
// injected and applies the answer. There is no screenshot here on purpose —
// what a reader would see is chrome://extensions with the developer-mode badge
// on it, which is an install detail rather than a result, and the results this
// page shows elsewhere are real captures of the shipped build.
</script>

<template>
  <section id="extension" class="border-t border-default py-20 sm:py-28">
    <UContainer>
      <div class="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p class="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            {{ copy.extension.kicker }}
          </p>
          <h2 class="mt-3 text-balance text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
            {{ copy.extension.title }}
          </h2>
          <p class="mt-4 text-base/7 text-muted">
            {{ copy.extension.body }}
          </p>
          <ul class="mt-6 space-y-3 text-sm text-muted">
            <li v-for="point in copy.extension.points" :key="point" class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="mt-0.5 size-4 shrink-0 text-primary" />
              {{ point }}
            </li>
          </ul>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <UButton
              :to="'/adfree-extension.zip'"
              color="primary"
              size="lg"
              icon="i-lucide-download"
              class="rounded-xl"
              download
            >
              {{ copy.extension.download }}
            </UButton>
            <span class="text-xs text-dimmed">{{ copy.extension.note }}</span>
          </div>
        </div>

        <div class="rounded-2xl border border-default bg-elevated/40 p-6">
          <div class="flex items-center gap-3">
            <img
              src="/app-icon.png"
              :alt="copy.extension.title"
              class="size-10 rounded-xl"
              width="40"
              height="40"
            >
            <div>
              <p class="text-sm font-medium text-highlighted">{{ copy.extension.cardName }}</p>
              <p class="text-xs text-dimmed">{{ copy.extension.cardVersion }}</p>
            </div>
          </div>
          <ol class="mt-5 space-y-3 text-sm text-muted">
            <li v-for="(step, index) in copy.extension.steps" :key="step" class="flex items-start gap-3">
              <span
                class="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-[11px] font-semibold text-primary"
              >{{ index + 1 }}</span>
              {{ step }}
            </li>
          </ol>
          <p class="mt-5 border-t border-default pt-4 text-xs/5 text-dimmed">
            {{ copy.extension.footnote }}
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>
