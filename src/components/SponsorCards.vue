<script setup lang="ts">
import { computed, ref } from 'vue'
import { copy } from '@/i18n'

// The three ways that actually reach one person: Ko-fi, MoMo, and the bank
// account the same details are published under on the project's sponsor page.
const kofi = 'https://ko-fi.com/tachib_shin'
const momo = 'https://me.momo.vn/tachibshin'

const account = '9021454964386'
const holder = 'NGUYEN TIEN THANH'
const bankName = 'Viet Capital Bank (BVBank)'
const swift = 'VCBCVNVX'
const branch = '412 Nguyen Thi Minh Khai, Ward 5, District 3, Ho Chi Minh City'

const copied = ref<string | null>(null)
async function copyValue(key: string, value: string) {
  try {
    await navigator.clipboard.writeText(value)
    copied.value = key
    setTimeout(() => {
      if (copied.value === key) copied.value = null
    }, 2000)
  } catch {
    copied.value = null
  }
}

// Computed, not built once: the labels follow the language switch.
const bankRows = computed(() => [
  { key: 'account', label: copy.value.sponsor.bank.account, value: account, copyable: true },
  { key: 'holder', label: copy.value.sponsor.bank.holder, value: holder, copyable: true },
  { key: 'bank', label: copy.value.sponsor.bank.bankName, value: bankName, copyable: false },
  { key: 'swift', label: copy.value.sponsor.bank.swift, value: swift, copyable: true },
  { key: 'branch', label: copy.value.sponsor.bank.address, value: branch, copyable: false },
])
</script>

<template>
  <section id="sponsor" class="py-16 sm:py-20">
    <UContainer>
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-medium uppercase tracking-[0.18em] text-primary">
          {{ copy.sponsor.kicker }}
        </p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          {{ copy.sponsor.title }}
        </h2>
        <p class="mt-4 text-base/7 text-muted">
          {{ copy.sponsor.body }}
        </p>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <!-- Ko-fi -->
        <div class="flex flex-col rounded-2xl border border-default bg-elevated/20 p-6">
          <div class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <UIcon name="i-lucide-coffee" class="size-5" />
          </div>
          <h3 class="mt-4 text-lg font-semibold text-highlighted">{{ copy.sponsor.kofi.title }}</h3>
          <p class="mt-2 text-sm/6 text-muted">{{ copy.sponsor.kofi.body }}</p>
          <p class="mt-3 font-mono text-xs text-dimmed">ko-fi.com/tachib_shin</p>
          <div class="mt-auto pt-5">
            <UButton
              class="w-full justify-center"
              icon="i-lucide-external-link"
              :label="copy.sponsor.kofi.action"
              :to="kofi"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </div>

        <!-- MoMo -->
        <div class="flex flex-col rounded-2xl border border-default bg-elevated/20 p-6">
          <div class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <UIcon name="i-lucide-wallet" class="size-5" />
          </div>
          <h3 class="mt-4 text-lg font-semibold text-highlighted">{{ copy.sponsor.momo.title }}</h3>
          <p class="mt-2 text-sm/6 text-muted">{{ copy.sponsor.momo.body }}</p>
          <p class="mt-3 font-mono text-xs text-dimmed">me.momo.vn/tachibshin</p>
          <div class="mt-auto pt-5">
            <UButton
              class="w-full justify-center"
              icon="i-lucide-external-link"
              :label="copy.sponsor.momo.action"
              :to="momo"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </div>

        <!-- Bank -->
        <div class="flex flex-col rounded-2xl border border-default bg-elevated/20 p-6">
          <div class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <UIcon name="i-lucide-landmark" class="size-5" />
          </div>
          <h3 class="mt-4 text-lg font-semibold text-highlighted">{{ copy.sponsor.bank.title }}</h3>
          <p class="mt-2 text-sm/6 text-muted">{{ copy.sponsor.bank.body }}</p>

          <dl class="grid gap-2.5 pt-4 text-xs">
            <div v-for="row in bankRows" :key="row.key" class="flex items-start justify-between gap-2">
              <dt class="text-dimmed">{{ row.label }}</dt>
              <dd class="flex items-center gap-1.5 text-right">
                <span class="font-mono text-highlighted">{{ row.value }}</span>
                <button
                  v-if="row.copyable"
                  type="button"
                  class="text-dimmed transition hover:text-primary"
                  :aria-label="copy.sponsor.bank.copy"
                  @click="copyValue(row.key, row.value)"
                >
                  <UIcon
                    :name="copied === row.key ? 'i-lucide-check' : 'i-lucide-copy'"
                    class="size-3.5"
                  />
                </button>
              </dd>
            </div>
          </dl>

          <div class="mt-auto pt-5">
            <UButton
              class="w-full justify-center"
              :icon="copied === 'account-button' ? 'i-lucide-check' : 'i-lucide-clipboard-copy'"
              color="neutral"
              variant="subtle"
              :label="copied === 'account-button' ? copy.sponsor.bank.copied : copy.sponsor.bank.action"
              @click="copyValue('account-button', account)"
            />
          </div>
        </div>
      </div>

      <p class="mx-auto mt-10 max-w-2xl text-center text-xs/5 text-dimmed">
        {{ copy.sponsor.note }}
      </p>
    </UContainer>
  </section>
</template>
