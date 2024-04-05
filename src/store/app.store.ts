import type { Locale } from '@/typings'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app-store', {
  state: () => {
    return {
      currentLocale: <Locale>{},
      locales: <Locale[]>[]
    }
  }
})
