import { computed, ref, watch } from 'vue'
import { en } from './content/en'
import { vi } from './content/vi'
import type { Copy } from './content/types'

export type Lang = 'en' | 'vi'

const copies: Record<Lang, Copy> = { en, vi }

const KEY = 'adfree:lang'

function initial(): Lang {
  const saved = localStorage.getItem(KEY)
  if (saved === 'en' || saved === 'vi') return saved
  // No choice made yet: follow the browser, which is the only signal we have.
  return navigator.language?.toLowerCase().startsWith('vi') ? 'vi' : 'en'
}

/** Every language the site carries. A new one is a file in ./content and an
 *  entry here; the header menus it, nothing else changes. */
export const languages: { id: Lang; label: string }[] = [
  { id: 'en', label: 'English' },
  { id: 'vi', label: 'Tiếng Việt' },
]

export const lang = ref<Lang>(initial())

/** The copy for the current language, and every string the page needs. */
export const copy = computed<Copy>(() => copies[lang.value])

export const otherLang = computed<Lang>(() => (lang.value === 'en' ? 'vi' : 'en'))

export function setLang(next: Lang) {
  lang.value = next
}

watch(
  lang,
  (next) => {
    localStorage.setItem(KEY, next)
    document.documentElement.lang = next
  },
  { immediate: true },
)
