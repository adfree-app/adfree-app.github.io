<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { copy } from '@/i18n'
import {
  error,
  humanSize,
  loadRelease,
  loading,
  release,
  releasesPage,
} from '@/composables/useLatestRelease'

// The files are asked of the GitHub API, so the buttons are always the assets
// of the current release rather than a list that goes stale in the markup.
onMounted(loadRelease)

const ids = ['android', 'windows', 'linux'] as const
type Id = (typeof ids)[number]

/** Which tab to open: the platform the visitor is reading the page on. */
function detected(): Id {
  const ua = navigator.userAgent
  if (/android/i.test(ua)) return 'android'
  if (/windows/i.test(ua)) return 'windows'
  return 'linux'
}

const tab = ref<Id>(detected())

const tabs = computed(() =>
  ids.map((id) => ({
    id,
    // The same three names the screenshots section uses, so the site does not
    // spell "Android" one way here and another way there.
    label: copy.value.shots.platforms.find((platform) => platform.id === id)!.label,
    icon: copy.value.shots.platforms.find((platform) => platform.id === id)!.icon,
  })),
)

const files = computed(() => (release.value?.assets ?? []).filter((asset) => asset.family === tab.value))

const installCommand =
  'curl -fsSL https://raw.githubusercontent.com/yuuki-kagura/adfree/main/scripts/install-linux.sh | bash'

const copied = ref(false)
async function copyInstall() {
  try {
    await navigator.clipboard.writeText(installCommand)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    copied.value = false
  }
}
</script>

<template>
  <div class="rounded-2xl border border-default bg-default/60 p-4 sm:p-5">
    <!-- version line -->
    <div class="grid grid-cols-[minmax(0,1fr)_9rem] items-center gap-3">
      <p class="flex items-center gap-2 text-sm text-muted">
        <UIcon name="i-simple-icons-github" class="size-4" />
        <span v-if="release">
          {{ copy.download.release.latest }} <span class="text-highlighted">{{ release.version }}</span>
        </span>
        <span v-else>{{ copy.download.release.loading }}</span>
      </p>
      <a
        :href="releasesPage"
        target="_blank"
        rel="noreferrer"
        class="justify-self-end text-xs text-dimmed transition hover:text-highlighted"
        >{{ copy.download.release.all }}</a
      >
    </div>

    <!-- platform tabs -->
    <div class="mt-4 flex flex-wrap gap-1.5">
      <button
        v-for="entry in tabs"
        :key="entry.id"
        type="button"
        class="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition"
        :class="
          tab === entry.id
            ? 'bg-primary/15 text-primary ring-1 ring-primary/30'
            : 'text-muted hover:bg-elevated/60 hover:text-highlighted'
        "
        :aria-pressed="tab === entry.id"
        @click="tab = entry.id"
      >
        <UIcon :name="entry.icon" class="size-4" />
        {{ entry.label }}
      </button>
    </div>

    <div class="mt-4">
      <p v-if="loading" class="text-sm text-muted">{{ copy.download.release.loading }}</p>

      <div v-else-if="error" class="flex flex-wrap items-center gap-3">
        <p class="text-sm text-muted">{{ copy.download.release.error }}</p>
        <UButton size="xs" color="neutral" variant="subtle" :label="copy.download.release.retry" @click="loadRelease" />
        <UButton size="xs" color="neutral" variant="ghost" :to="releasesPage" target="_blank">
          {{ copy.download.release.all }}
        </UButton>
      </div>

      <div v-else class="grid grid-cols-[minmax(0,1fr)] gap-2">
        <div
          v-for="file in files"
          :key="file.name"
          class="grid grid-cols-[minmax(0,1fr)_8rem] items-center gap-3 rounded-xl border border-default bg-elevated/30 px-3 py-2.5"
        >
          <div class="min-w-0">
            <p class="truncate text-sm text-highlighted">
              {{ file.kind }}<span v-if="file.arch" class="text-muted"> · {{ file.arch }}</span>
            </p>
            <p class="truncate text-xs text-dimmed">
              {{ file.name }}<span v-if="file.size"> · {{ humanSize(file.size) }}</span>
            </p>
          </div>
          <UButton
            size="xs"
            class="w-full justify-center"
            icon="i-lucide-download"
            :to="file.url"
            target="_blank"
            rel="noreferrer"
            :label="copy.cta.getBuild"
          />
        </div>

        <!-- The command is Linux-only, so it is inside the Linux tab: no reason
             to show it to someone reading this on Windows. -->
        <div v-if="tab === 'linux'" class="mt-1 min-w-0 rounded-xl border border-default bg-elevated/20 p-3">
          <div class="flex items-center justify-between gap-3">
            <p class="text-sm font-semibold text-highlighted">{{ copy.download.install.label }}</p>
            <UButton
              size="xs"
              color="neutral"
              variant="subtle"
              :icon="copied ? 'i-lucide-check' : 'i-lucide-copy'"
              :label="copied ? copy.download.install.copied : copy.download.install.copy"
              @click="copyInstall"
            />
          </div>
          <pre class="mt-2 overflow-x-auto rounded-lg bg-default/80 p-3 text-xs/6 text-muted"><code>{{ installCommand }}</code></pre>
          <p class="mt-2 text-xs/5 text-dimmed">{{ copy.download.install.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
