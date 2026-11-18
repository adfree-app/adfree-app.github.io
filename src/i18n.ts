import { computed, ref, watch } from 'vue'
import { en } from './content/en'
import { ja } from './content/ja'
import { vi } from './content/vi'
import { zh } from './content/zh'
import type { Copy } from './content/types'

export type Lang = 'en' | 'vi' | 'ja' | 'zh'

const copies: Record<Lang, Copy> = { en, vi, ja, zh }

const KEY = 'adfree:lang'

function initial(): Lang {
  const saved = localStorage.getItem(KEY)
  if (saved && saved in copies) return saved as Lang
  // No choice made yet: follow the browser, which is the only signal we have.
  // Chinese first, because `zh-TW` and `zh-Hans` both land on the one file.
  const tag = navigator.language?.toLowerCase() ?? 'en'
  if (tag.startsWith('vi')) return 'vi'
  if (tag.startsWith('ja')) return 'ja'
  if (tag.startsWith('zh')) return 'zh'
  return 'en'
}

/** Every language the site carries. A new one is a file in ./content and an
 *  entry here; the header menus it, nothing else changes. */
export const languages: { id: Lang; label: string }[] = [
  { id: 'en', label: 'English' },
  { id: 'vi', label: 'Tiếng Việt' },
  { id: 'ja', label: '日本語' },
  { id: 'zh', label: '简体中文' },
]

export const lang = ref<Lang>(initial())

/** The copy for the current language, and every string the page needs. */
export const copy = computed<Copy>(() => copies[lang.value])


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
