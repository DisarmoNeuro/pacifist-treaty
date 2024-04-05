import { acceptHMRUpdate, defineStore } from 'pinia'

import type { Locale } from '@/typings'

const locales: Locale[] = [{ id: 'ru', alias: 'RUS' }]

export const useAppStore = defineStore('app-store', {
  state: () => {
    return {
      localePopupState: false,
      menuPopupState: false,
      currentLocale: <Locale>locales[0],
      locales: <Locale[]>locales
    }
  },

  actions: {
    showMenuPopup(): void {
      this.menuPopupState = !this.menuPopupState
    },

    showLocalePopup(): void {
      this.localePopupState = !this.localePopupState
    },

    selectLocale(id: string): void {
      this.currentLocale = this.locales.find(locale => locale.id === id)!
      this.showLocalePopup()
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
