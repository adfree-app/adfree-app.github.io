<script setup lang="ts">
import { copy } from '@/i18n'
import WindowFrame from './WindowFrame.vue'
</script>

<template>
  <!-- ---------------------------------------------------------- inspector -->
  <section id="inspector" class="border-t border-default py-20 sm:py-28">
    <UContainer>
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-medium uppercase tracking-[0.18em] text-primary">
          {{ copy.inspector.kicker }}
        </p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          {{ copy.inspector.title }}
        </h2>
        <p class="mt-4 text-base/7 text-muted">
          {{ copy.inspector.body }}
        </p>
      </div>

      <!-- The list is the first thing the window shows, so it is the first
           thing here; the body and the stream sit side by side because they are
           two answers to the same question — what came back. -->
      <div class="mx-auto mt-12 max-w-4xl">
        <WindowFrame
          :src="copy.inspector.shots[0]!.src"
          :alt="copy.inspector.shots[0]!.alt"
          :title="copy.inspector.kicker"
        />
      </div>

      <div class="mx-auto mt-6 grid max-w-5xl gap-6 md:grid-cols-2">
        <WindowFrame
          v-for="shot in copy.inspector.shots.slice(1, 3)"
          :key="shot.src"
          :src="shot.src"
          :alt="shot.alt"
          :title="copy.inspector.kicker"
        />
      </div>

      <div class="mt-10 grid gap-5 sm:grid-cols-2">
        <div
          v-for="point in copy.inspector.points"
          :key="point.title"
          class="rounded-2xl border border-default bg-elevated/20 p-6"
        >
          <div class="flex items-center gap-3">
            <div class="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UIcon :name="point.icon" class="size-4.5" />
            </div>
            <h3 class="text-base font-semibold text-highlighted">{{ point.title }}</h3>
          </div>
          <p class="mt-3 text-sm/6 text-muted">{{ point.body }}</p>
        </div>
      </div>

      <div class="mx-auto mt-10 max-w-4xl">
        <WindowFrame
          :src="copy.inspector.shots[3]!.src"
          :alt="copy.inspector.shots[3]!.alt"
          :title="copy.inspector.kicker"
        />
        <p class="mt-4 text-xs/5 text-dimmed">{{ copy.inspector.caption }}</p>
      </div>

      <p class="mt-8 text-center text-sm text-muted">
        <UIcon name="i-lucide-terminal" class="mr-1.5 inline size-4 align-[-2px] text-primary" />
        {{ copy.inspector.how }}
      </p>
    </UContainer>
  </section>
</template>
