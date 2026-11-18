<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules'
import PhoneFrame from './PhoneFrame.vue'
import WindowFrame from './WindowFrame.vue'
import { copy } from '@/i18n'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Shot = { src: string; alt: string; kind: 'phone' | 'window'; title?: string }

type Platform = {
  id: string
  shots: Shot[]
}

// Every screen here is a capture of a real build, in English: the phone app,
// the Windows window and the Linux package render the same Compose screens over
// the same Rust core. The two desktop builds are one set of captures — the same
// screens down to the pixel — because the only thing that differs is the window
// manager around them.
const platforms: Platform[] = [
  {
    id: 'android',
    shots: [
      { src: '/shots/android-home.png', alt: 'AdFree on Android: Home, protection on', kind: 'phone' },
      { src: '/shots/android-protection.png', alt: 'AdFree on Android: the Protection screen', kind: 'phone' },
      { src: '/shots/android-apps.png', alt: 'AdFree on Android: per-app control', kind: 'phone' },
      { src: '/shots/android-activity.png', alt: 'AdFree on Android: the request log', kind: 'phone' },
      { src: '/shots/android-statistics.png', alt: 'AdFree on Android: Statistics', kind: 'phone' },
      { src: '/shots/android-settings.png', alt: 'AdFree on Android: Settings', kind: 'phone' },
      { src: '/shots/android-test.png', alt: 'AdFree on Android: 95% on the adblock test page', kind: 'phone' },
    ],
  },
  {
    id: 'windows',
    shots: [
      { src: '/shots/desktop-home.png', alt: 'AdFree on Windows: Home, protection on', kind: 'window', title: 'AdFree' },
      { src: '/shots/desktop-protection.png', alt: 'AdFree on Windows: the Protection screen', kind: 'window', title: 'AdFree' },
      { src: '/shots/desktop-activity.png', alt: 'AdFree on Windows: the request log', kind: 'window', title: 'AdFree' },
      { src: '/shots/desktop-statistics.png', alt: 'AdFree on Windows: Statistics', kind: 'window', title: 'AdFree' },
      { src: '/shots/desktop-settings.png', alt: 'AdFree on Windows: Settings', kind: 'window', title: 'AdFree' },
    ],
  },
  {
    id: 'linux',
    shots: [
      { src: '/shots/desktop-home.png', alt: 'AdFree on Linux: Home, protection on', kind: 'window', title: 'AdFree' },
      { src: '/shots/desktop-protection.png', alt: 'AdFree on Linux: the Protection screen', kind: 'window', title: 'AdFree' },
      { src: '/shots/desktop-activity.png', alt: 'AdFree on Linux: the request log', kind: 'window', title: 'AdFree' },
      { src: '/shots/desktop-statistics.png', alt: 'AdFree on Linux: Statistics', kind: 'window', title: 'AdFree' },
      { src: '/shots/desktop-settings.png', alt: 'AdFree on Linux: Settings', kind: 'window', title: 'AdFree' },
    ],
  },
]

const modules = [Navigation, Pagination, Keyboard, A11y]

/** The platform each visitor most likely wants to see first. */
function detected(): string {
  const ua = navigator.userAgent
  if (/android/i.test(ua)) return 'android'
  if (/windows/i.test(ua)) return 'windows'
  // macOS and Linux both get the desktop window: it is the same Compose UI.
  return 'linux'
}

const selected = ref('android')
const active = computed(() => platforms.find((platform) => platform.id === selected.value)!)

onMounted(() => {
  selected.value = detected()
})

const tabs = computed(() =>
  platforms.map((platform) => {
    const meta = copy.value.shots.platforms.find((entry) => entry.id === platform.id)!
    return { ...meta, shots: platform.shots }
  }),
)
const activeTab = computed(() => tabs.value.find((tab) => tab.id === selected.value)!)
</script>

<template>
  <section id="screenshots" class="border-t border-default py-20 sm:py-28">
    <UContainer>
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-medium uppercase tracking-[0.18em] text-primary">
          {{ copy.shots.kicker }}
        </p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          {{ copy.shots.title }}
        </h2>
        <p class="mt-4 text-base/7 text-muted">
          {{ copy.shots.body }}
        </p>
      </div>

      <div class="mt-10 flex justify-center">
        <div class="inline-flex rounded-full border border-default bg-elevated/40 p-1">
          <button
            v-for="platform in tabs"
            :key="platform.id"
            class="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition"
            :class="
              selected === platform.id
                ? 'bg-primary text-inverted shadow-sm'
                : 'text-muted hover:text-highlighted'
            "
            @click="selected = platform.id"
          >
            <UIcon :name="platform.icon" class="size-4" />
            {{ platform.label }}
          </button>
        </div>
      </div>

      <p class="mx-auto mt-6 max-w-2xl text-center text-sm/6 text-muted">
        {{ activeTab.note }}
      </p>

      <!-- One swiper per platform: `:key` rebuilds it on a tab change so the
           slides belong to the platform that is selected, and the pagination
           counts that platform's shots. -->
      <Swiper
        :key="active.id"
        class="shots mt-12 [--swiper-pagination-color:var(--ui-primary)] [--swiper-navigation-color:var(--ui-text-muted)] [--swiper-pagination-bottom:0px] [--swiper-navigation-size:1.5rem]"
        :modules="modules"
        :slides-per-view="1.15"
        :space-between="24"
        :loop="active.shots.length > 2"
        :keyboard="{ enabled: true }"
        :pagination="{ clickable: true }"
        :navigation="{ prevEl: '.shots-prev', nextEl: '.shots-next' }"
        :a11y="{ enabled: true }"
        :breakpoints="{
          640: { slidesPerView: active.id === 'android' ? 2 : 1 },
          1024: { slidesPerView: active.id === 'android' ? 2.4 : 1.15 },
        }"
      >
        <SwiperSlide v-for="shot in active.shots" :key="shot.src" class="!h-auto pb-12">
          <PhoneFrame v-if="shot.kind === 'phone'" :src="shot.src" :alt="shot.alt" />
          <WindowFrame v-else :src="shot.src" :alt="shot.alt" :title="shot.title" />
        </SwiperSlide>
      </Swiper>

      <div class="mt-2 flex items-center justify-center gap-4">
        <button
          class="shots-prev grid size-11 place-items-center rounded-full border border-white/15 bg-elevated/60 text-highlighted transition hover:border-primary hover:text-primary disabled:opacity-40"
          aria-label="Previous screenshot"
        >
          <UIcon name="i-lucide-chevron-left" class="size-5" />
        </button>
        <button
          class="shots-next grid size-11 place-items-center rounded-full border border-white/15 bg-elevated/60 text-highlighted transition hover:border-primary hover:text-primary disabled:opacity-40"
          aria-label="Next screenshot"
        >
          <UIcon name="i-lucide-chevron-right" class="size-5" />
        </button>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* The default arrows are decorative but overlap the frames; the buttons below
   the carousel are the ones people press. */
.shots :deep(.swiper-button-prev),
.shots :deep(.swiper-button-next) {
  display: none;
}

.shots :deep(.swiper-pagination-bullet) {
  opacity: 0.4;
}

.shots :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}
</style>
