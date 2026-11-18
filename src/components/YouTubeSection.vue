<script setup lang="ts">
import WindowFrame from '@/components/WindowFrame.vue'
import { copy } from '@/i18n'
</script>

<template>
  <!-- The section that shows the thing people actually check first: a video
       playing with no pre-roll. The capture is the released build's browser,
       not a mockup — same rule as the rest of the shots on this page. -->
  <section id="youtube" class="border-t border-default py-20 sm:py-28">
    <UContainer>
      <div class="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p class="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            {{ copy.youtube.kicker }}
          </p>
          <h2 class="mt-3 text-balance text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
            {{ copy.youtube.title }}
          </h2>
          <p class="mt-4 text-base/7 text-muted">
            {{ copy.youtube.body }}
          </p>
          <ul class="mt-6 space-y-3 text-sm text-muted">
            <li v-for="point in copy.youtube.points" :key="point" class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="mt-0.5 size-4 shrink-0 text-primary" />
              {{ point }}
            </li>
          </ul>
        </div>

        <figure class="space-y-3">
          <WindowFrame
            src="/shots/youtube-watch.png"
            :alt="copy.youtube.alt"
            title="youtube.com"
          />
          <figcaption class="text-xs/5 text-dimmed">{{ copy.youtube.caption }}</figcaption>
        </figure>
      </div>
    </UContainer>
  </section>
</template>
