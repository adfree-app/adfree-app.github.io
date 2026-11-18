<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import PhoneFrame from '@/components/PhoneFrame.vue'
import WindowFrame from '@/components/WindowFrame.vue'
import ScreenshotShowcase from '@/components/ScreenshotShowcase.vue'
import DownloadTabs from '@/components/DownloadTabs.vue'
import { copy } from '@/i18n'

const releases = 'https://github.com/yuuki-kagura/adfree/releases/latest'
const source = 'https://github.com/yuuki-kagura/adfree'
const designNotes = 'https://github.com/yuuki-kagura/adfree/blob/main/DESIGN.md'

</script>

<template>
  <SiteHeader />

  <main>
    <!-- ---------------------------------------------------------------- hero -->
    <section class="relative overflow-hidden">
      <div class="pointer-events-none absolute inset-0 grid-lines" />
      <div
        class="pointer-events-none absolute -top-48 left-1/2 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]"
      />
      <UContainer class="relative py-20 lg:py-28">
        <div class="grid items-center gap-16 lg:grid-cols-[1.02fr_1fr]">
          <div>
            <UBadge color="primary" variant="subtle" size="lg" class="rounded-full">
              {{ copy.hero.badge }}
            </UBadge>
            <h1 class="mt-6 text-balance text-4xl font-semibold tracking-tight text-highlighted sm:text-5xl lg:text-6xl">
              {{ copy.hero.lead }}
              <span class="text-primary">{{ copy.hero.accent }}</span>
            </h1>
            <p class="mt-6 max-w-xl text-lg/8 text-muted">
              {{ copy.hero.body }}
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <UButton
                size="lg"
                :label="copy.cta.download"
                trailing-icon="i-lucide-download"
                to="#download"
              />
              <UButton
                size="lg"
                color="neutral"
                variant="subtle"
                :label="copy.cta.howItWorks"
                trailing-icon="i-lucide-arrow-right"
                to="#how"
              />
            </div>
            <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <span class="flex items-center gap-2">
                <UIcon name="i-lucide-monitor-smartphone" class="size-4 text-primary" />
                {{ copy.hero.notes[0] }}
              </span>
              <span class="flex items-center gap-2">
                <UIcon name="i-lucide-server-off" class="size-4 text-primary" />
                {{ copy.hero.notes[1] }}
              </span>
            </div>
          </div>

          <div class="relative pb-16 sm:pb-20">
            <WindowFrame
              src="/shots/desktop-home.png"
              alt="AdFree on the desktop: Home with protection on"
              title="AdFree"
            />
            <div class="absolute -bottom-2 left-2 w-36 sm:-bottom-6 sm:left-0 sm:w-44">
              <PhoneFrame src="/shots/android-home.png" alt="AdFree on Android: Home" />
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- --------------------------------------------------------------- trust -->
    <section class="border-y border-default bg-elevated/20">
      <UContainer>
        <dl class="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="item in copy.trust" :key="item.title" class="flex gap-4">
            <div class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UIcon :name="item.icon" class="size-5" />
            </div>
            <div>
              <dt class="text-sm font-semibold text-highlighted">{{ item.title }}</dt>
              <dd class="mt-1 text-sm/6 text-muted">{{ item.body }}</dd>
            </div>
          </div>
        </dl>
      </UContainer>
    </section>

    <!-- ----------------------------------------------------------------- how -->
    <section id="how" class="py-20 sm:py-28">
      <UContainer>
        <div class="mx-auto max-w-2xl text-center">
          <p class="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            {{ copy.how.kicker }}
          </p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
            {{ copy.how.title }}
          </h2>
          <p class="mt-4 text-base/7 text-muted">
            {{ copy.how.body }}
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <div
            v-for="layer in copy.how.steps"
            :key="layer.step"
            class="relative rounded-2xl border border-default bg-elevated/30 p-6"
          >
            <span class="text-xs font-semibold tracking-[0.2em] text-primary/70">{{ layer.step }}</span>
            <div class="mt-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UIcon :name="layer.icon" class="size-5" />
            </div>
            <h3 class="mt-4 text-lg font-semibold text-highlighted">{{ layer.title }}</h3>
            <p class="mt-2 text-sm/6 text-muted">{{ layer.body }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ------------------------------------------------------------ features -->
    <section id="features" class="border-t border-default py-20 sm:py-28">
      <UContainer>
        <div class="max-w-2xl">
          <p class="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            {{ copy.features.kicker }}
          </p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
            {{ copy.features.title }}
          </h2>
          <p class="mt-4 text-base/7 text-muted">
            {{ copy.features.body }}
          </p>
        </div>

        <div class="mt-12 grid gap-px overflow-hidden rounded-2xl border border-default bg-default sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="feature in copy.features.items"
            :key="feature.title"
            class="group bg-elevated/20 p-6 transition hover:bg-elevated/40"
          >
            <div class="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              <UIcon :name="feature.icon" class="size-5" />
            </div>
            <h3 class="mt-4 text-base font-semibold text-highlighted">{{ feature.title }}</h3>
            <p class="mt-2 text-sm/6 text-muted">{{ feature.body }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ------------------------------------------------------------- numbers -->
    <section class="border-t border-default bg-elevated/20 py-14">
      <UContainer>
        <div class="grid gap-8 text-center sm:grid-cols-4">
          <div v-for="number in copy.numbers" :key="number.label">
            <p class="text-3xl font-semibold text-highlighted">{{ number.value }}</p>
            <p class="mt-1 text-sm text-muted">{{ number.label }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- --------------------------------------------------------------- proof -->
    <section id="proof" class="border-t border-default py-20 sm:py-28">
      <UContainer>
        <div class="mx-auto max-w-2xl text-center">
          <p class="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            {{ copy.proof.kicker }}
          </p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
            {{ copy.proof.title }}
          </h2>
          <p class="mt-4 text-base/7 text-muted">
            <a
              href="https://adblock.turtlecute.org/"
              target="_blank"
              rel="noopener"
              class="text-primary underline-offset-4 hover:underline"
              >{{ copy.proof.link }}</a
            >
            {{ copy.proof.bodyRest }}
          </p>
        </div>

        <div class="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div class="mx-auto w-full max-w-[19rem]">
            <PhoneFrame src="/shots/android-test.png" :alt="copy.proof.phoneAlt" />
          </div>
          <div class="space-y-6">
            <div class="rounded-2xl border border-default bg-elevated/30 p-2 shadow-2xl shadow-black/40">
              <img :src="'/shots/desktop-test.png'" :alt="copy.proof.desktopAlt" class="w-full rounded-xl" />
            </div>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div
                v-for="card in copy.proof.cards"
                :key="card.label"
                class="rounded-xl border border-default bg-elevated/20 p-4"
              >
                <p class="text-2xl font-semibold text-highlighted">{{ card.value }}</p>
                <p class="mt-1 text-xs text-muted">{{ card.label }}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-3">
              <UButton
                to="https://adblock.turtlecute.org/"
                target="_blank"
                rel="noopener"
                icon="i-lucide-external-link"
                >{{ copy.proof.runTest }}</UButton
              >
              <UButton to="#download" color="neutral" variant="outline">{{ copy.proof.getBuild }}</UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <ScreenshotShowcase />

    <!-- ------------------------------------------------------------ platforms -->
    <section id="platforms" class="border-t border-default py-20 sm:py-28">
      <UContainer>
        <div class="mx-auto max-w-2xl text-center">
          <p class="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            {{ copy.platforms.kicker }}
          </p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
            {{ copy.platforms.title }}
          </h2>
          <p class="mt-4 text-base/7 text-muted">
            {{ copy.platforms.body }}
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <div
            v-for="platform in copy.platforms.items"
            :key="platform.name"
            class="flex flex-col rounded-2xl border border-default bg-elevated/20 p-6"
          >
            <div class="flex items-center gap-3">
              <div class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <UIcon :name="platform.icon" class="size-5" />
              </div>
              <h3 class="text-lg font-semibold text-highlighted">{{ platform.name }}</h3>
            </div>
            <p class="mt-4 text-sm/6 text-muted">{{ platform.body }}</p>
            <ul class="mt-5 space-y-2 text-sm text-muted">
              <li v-for="point in platform.points" :key="point" class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="mt-0.5 size-4 shrink-0 text-primary" />
                {{ point }}
              </li>
            </ul>
            <UButton
              class="mt-6 w-full justify-center"
              color="neutral"
              variant="subtle"
              :label="copy.platforms.getBuild"
              trailing-icon="i-lucide-arrow-up-right"
              :to="releases"
              target="_blank"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ------------------------------------------------------------- download -->
    <section id="download" class="border-t border-default py-20 sm:py-28">
      <UContainer>
        <div class="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-elevated/40 to-elevated/10 p-8 sm:p-12">
          <div class="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/20 blur-[90px]" />
          <!-- minmax(0, …) on both tracks: `1fr` alone takes its minimum from the
               content, so the long install command widened the column holding
               the panel and the panel moved when the tab changed. -->
          <div class="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div class="min-w-0">
              <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
                {{ copy.download.title }}
              </h2>
              <p class="mt-4 max-w-xl text-base/7 text-muted">
                {{ copy.download.body }}
              </p>
              <div class="mt-8 flex flex-wrap gap-3">
                <UButton
                  size="lg"
                  icon="i-simple-icons-github"
                  :label="copy.cta.latestRelease"
                  :to="releases"
                  target="_blank"
                />
                <UButton
                  size="lg"
                  color="neutral"
                  variant="subtle"
                  icon="i-lucide-book-open"
                  :label="copy.cta.source"
                  :to="source"
                  target="_blank"
                />
              </div>
              <p class="mt-6 text-xs/5 text-dimmed">
                {{ copy.download.note }}
              </p>
            </div>

            <DownloadTabs />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ------------------------------------------------------------------ faq -->
    <section id="faq" class="border-t border-default py-20 sm:py-28">
      <UContainer>
        <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p class="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              {{ copy.faq.kicker }}
            </p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
              {{ copy.faq.title }}
            </h2>
            <p class="mt-4 text-base/7 text-muted">
              {{ copy.faq.body }}
            </p>
            <UButton
              class="mt-6"
              color="neutral"
              variant="subtle"
              :label="copy.faq.design"
              trailing-icon="i-lucide-arrow-up-right"
              :to="designNotes"
              target="_blank"
            />
          </div>

          <UAccordion :items="copy.faq.items" color="neutral" variant="subtle" />
        </div>
      </UContainer>
    </section>
  </main>

  <SiteFooter />
</template>
