<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  title?: string
}>()
</script>

<template>
  <div
    class="overflow-hidden rounded-xl border border-white/10 bg-[#0a0f12] shadow-[0_50px_140px_-40px_rgba(0,0,0,0.95)] ring-1 ring-white/5"
  >
    <div class="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-white/15" />
      <span class="size-2.5 rounded-full bg-white/15" />
      <span class="size-2.5 rounded-full bg-white/15" />
      <span v-if="title" class="ml-2 truncate text-xs text-white/45">{{ title }}</span>
    </div>
    <img :src="src" :alt="alt" loading="lazy" class="block w-full" />
  </div>
</template>
