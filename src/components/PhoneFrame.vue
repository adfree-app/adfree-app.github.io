<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <!-- A flat frame: an even bezel and nothing cut out of the screen. The
       captures are cropped to the app, so a notch or a punch-hole would sit on
       top of a status bar that is not in the picture. -->
  <div
    class="relative mx-auto w-full max-w-[19rem] rounded-[2.2rem] border border-white/10 bg-[#070b0d] p-[10px] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/5"
  >
    <div class="overflow-hidden rounded-[1.7rem] ring-1 ring-white/5">
      <img :src="src" :alt="alt" loading="lazy" class="block w-full" />
    </div>
    <!-- One hairline down the left edge, the way a phone body catches the
         light: enough to read as hardware without inventing a cutout. -->
    <span class="pointer-events-none absolute inset-y-12 left-[3px] w-px rounded bg-white/15" />
  </div>
</template>
