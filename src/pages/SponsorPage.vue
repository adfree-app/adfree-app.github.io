<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SponsorCards from '@/components/SponsorCards.vue'
</script>

<template>
  <SiteHeader />

  <main>
    <!-- The cards title themselves, so the page adds only the frame around
         them and the way back. -->
    <SponsorCards />
  </main>

  <SiteFooter />
</template>
